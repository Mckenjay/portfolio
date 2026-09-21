<script setup lang="ts">
import BentoCard from '@/components/BentoCard.vue'
import BentoGrid from '@/components/BentoGrid.vue'
</script>

<template>
  <section id="about" class="portfolio-section bento-demo">
    <BentoGrid>
        <BentoCard :width="2" :height="2" class="cell-hero">
            <span class="tag">Featured</span>
            <h2>Build beautiful layouts</h2>
            <p>Call one card, choose its spans, and let the grid handle the responsive layout.</p>
        </BentoCard>
        <BentoCard :width="2" class="cell-stat">
            <span class="stat-number">12+</span>
            <span class="stat-label">Projects shipped</span>
        </BentoCard>
        <BentoCard class="cell-icon">
            <span class="icon">⚡</span>
            <h3>Fast</h3>
            <p>Dense, responsive CSS grid placement.</p>
        </BentoCard>
        <BentoCard :width="2" class="cell-quote">
            <blockquote>“Simplicity is the ultimate sophistication.”</blockquote>
            <cite>— Leonardo da Vinci</cite>
        </BentoCard>
        <BentoCard class="cell-icon">
            <span class="icon">🎨</span>
            <h3>Themeable</h3>
            <p>Keep the glass and customize the content.</p>
        </BentoCard>
        <BentoCard :width="2" class="cell-cta">
            <h3>Reusable API</h3>
            <p>
                <code>&lt;BentoCard :width="2" :height="1"&gt;</code>
            </p>
        </BentoCard>
    </BentoGrid>
    
  </section>
</template>

<style scoped>
h2,h3 { margin: 0; font-weight: 700; line-height: 1.2; } p { margin: 0; line-height: 1.55; color: rgba(255,255,255,.65); font-size: .925rem; }.cell-hero { gap: .6rem; }.cell-hero h2 { font-size: 1.75rem; background: linear-gradient(135deg,#a29bfe,#00cec9); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }.tag { width: fit-content; padding: .2rem .7rem; border: 1px solid rgba(162,155,254,.3); border-radius: 999px; color: #a29bfe; background: rgba(162,155,254,.08); font-size: .7rem; font-weight: 600; text-transform: uppercase; letter-spacing: .1em; }.cell-stat { align-items: center; text-align: center; gap: .25rem; }.stat-number { font-size: 3rem; font-weight: 800; background: linear-gradient(135deg,#e17055,#fdcb6e); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }.stat-label { color: rgba(255,255,255,.45); font-size: .85rem; text-transform: uppercase; letter-spacing: .12em; }.cell-icon,.cell-quote,.cell-cta { gap: .45rem; }.icon { font-size: 1.75rem; } blockquote { margin: 0; color: rgba(255,255,255,.78); font-size: 1.1rem; font-style: italic; line-height: 1.5; } cite { color: rgba(255,255,255,.35); font-size: .8rem; } code { padding: .15em .4em; border-radius: 6px; background: rgba(255,255,255,.08); color: #00cec9; }
</style> 
