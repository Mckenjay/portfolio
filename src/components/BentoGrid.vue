<script setup lang="ts">
import { computed } from 'vue'

/** A fluid grid for BentoCard instances. */
const props = withDefaults(defineProps<{
  /** Number of columns on large screens. */ columns?: number
  /** Number of columns below 900px. */ tabletColumns?: number
  /** Grid row height in pixels. */ rowHeight?: number
  gap?: string
  maxWidth?: string
}>(), {
  columns: 4, tabletColumns: 2, rowHeight: 110, gap: '1rem', maxWidth: '1200px',
})

const gridStyle = computed(() => ({
  '--bento-columns': String(props.columns),
  '--bento-tablet-columns': String(Math.min(props.tabletColumns, props.columns)),
  '--bento-row-height': `${props.rowHeight}px`,
  '--bento-gap': props.gap,
  '--bento-max-width': props.maxWidth,
}))
</script>

<template>
  <div class="bento-grid" :style="gridStyle"><slot /></div>
</template>

<style scoped>
.bento-grid { display: grid; width: 100%; grid-template-columns: repeat(var(--bento-columns), minmax(0, 1fr)); grid-auto-rows: minmax(var(--bento-row-height), auto); grid-auto-flow: dense; gap: var(--bento-gap); max-width: var(--bento-max-width); margin: 0 auto; }
@media (max-width: 900px) { .bento-grid { grid-template-columns: repeat(var(--bento-tablet-columns), minmax(0, 1fr)); } }
@media (max-width: 520px) { .bento-grid { grid-template-columns: minmax(0, 1fr); } }
</style>
