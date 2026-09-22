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
.bento-card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
    padding: 24px;
    border-radius: 30px;
    background: #0F0F0F;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0);
    color: #fff;
    font-family: 'Space Mono', Inter, 'Segoe UI', system-ui, sans-serif;
    grid-column: span var(--bento-card-columns);
    grid-row: span var(--bento-card-rows);
    transition: box-shadow .4s ease, transform .3s ease;
}

.bento-card::before {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
    pointer-events: none;
    border-radius: 30px;
    opacity: .25;
    background: linear-gradient(120deg, rgba(255,255,255,.3), rgba(255,255,255,.05));
}

.bento-card::after {
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
    border-radius: inherit;
    pointer-events: none;
    margin: -1px;
    background: linear-gradient(120deg, rgba(255,255,255,.12), rgba(255,255,255,.01));
}

.bento-card :deep(*) { position: relative; z-index: 2; }
.bento-card:hover {
    box-shadow: inset 0 0 0 0.5px rgba(255, 255, 255, .1);
}

@media (max-width: 900px) { .bento-card { grid-column: span var(--bento-card-columns-tablet); grid-row: span var(--bento-card-rows-tablet); } }
@media (max-width: 520px) { .bento-card { grid-column: span var(--bento-card-columns-mobile); grid-row: span var(--bento-card-rows-mobile); min-height: 140px; } }
@media (prefers-reduced-motion: reduce) { .bento-card { transition: none; } }
</style>
