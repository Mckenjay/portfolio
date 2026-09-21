<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  /** Number of grid columns to occupy on desktop. */ width?: number
  /** Number of grid rows to occupy. */ height?: number
  /** Optional spans below 900px. Defaults prevent a card overflowing a 2-column grid. */ tabletWidth?: number
  tabletHeight?: number
  /** Optional spans below 520px. Cards use one column by default. */ mobileWidth?: number
  mobileHeight?: number
  /** Semantic element to render, for example `article` or `a`. */ as?: string
}>(), { width: 1, height: 1, as: 'article' })

const span = (value: number) => Math.max(1, Math.floor(value))
const cardStyle = computed(() => ({
  '--bento-card-columns': String(span(props.width)),
  '--bento-card-rows': String(span(props.height)),
  '--bento-card-columns-tablet': String(span(props.tabletWidth ?? Math.min(props.width, 2))),
  '--bento-card-rows-tablet': String(span(props.tabletHeight ?? props.height)),
  '--bento-card-columns-mobile': String(span(props.mobileWidth ?? 1)),
  '--bento-card-rows-mobile': String(span(props.mobileHeight ?? props.height)),
}))
</script>

<template><component :is="as" class="bento-card" :style="cardStyle"><slot /></component></template>

<style scoped>
.bento-card { position: relative; display: flex; flex-direction: column; justify-content: center; min-width: 0; padding: 1.75rem; overflow: hidden; border: 1px solid rgba(255,255,255,.12); border-radius: 1.25rem; background: rgba(255,255,255,.06); box-shadow: inset 0 1px 0 rgba(255,255,255,.1), 0 4px 24px rgba(0,0,0,.25); color: rgba(255,255,255,.85); font-family: 'Space Mono', Inter, 'Segoe UI', system-ui, sans-serif; backdrop-filter: blur(18px) saturate(1.4); -webkit-backdrop-filter: blur(18px) saturate(1.4); grid-column: span var(--bento-card-columns); grid-row: span var(--bento-card-rows); transition: transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s cubic-bezier(.22,1,.36,1), border-color .35s ease; }
.bento-card::after { content: ''; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; opacity: 0; background: linear-gradient(135deg, rgba(255,255,255,.08), transparent 50%); transition: opacity .35s ease; }
.bento-card:hover { transform: translateY(-4px) scale(1.015); border-color: rgba(255,255,255,.22); box-shadow: inset 0 1px 0 rgba(255,255,255,.15), 0 12px 40px rgba(0,0,0,.35); }.bento-card:hover::after { opacity: 1; }
@media (max-width: 900px) { .bento-card { grid-column: span var(--bento-card-columns-tablet); grid-row: span var(--bento-card-rows-tablet); } }
@media (max-width: 520px) { .bento-card { grid-column: span var(--bento-card-columns-mobile); grid-row: span var(--bento-card-rows-mobile); min-height: 140px; } }
@media (prefers-reduced-motion: reduce) { .bento-card { transition: none; } }
</style>
