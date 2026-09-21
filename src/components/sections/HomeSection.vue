<script setup lang="ts">
import BentoCard from '../BentoCard.vue';
import BentoGrid from '../BentoGrid.vue';
</script>
<template>
    <section id="home" class="portfolio-section">
        <div class="hero-content">
            <BentoGrid>
                <BentoCard :width="3" :height="2" class="cell-hero">
                    <span class="tag">Featured</span>
                    <h2>Build beautiful layouts</h2>
                    <p>Call one card, choose its spans, and let the grid handle the responsive layout.</p>
                </BentoCard>
                <BentoCard :width="2" :height="2" class="cell-stat">
                    <span class="stat-number">12+</span>
                    <span class="stat-label">Projects shipped</span>
                </BentoCard>
                <BentoCard :width="2" class="cell-icon">
                    <span class="icon">⚡</span>
                    <h3>Fast</h3>
                    <p>Dense, responsive CSS grid placement.</p>
                </BentoCard>
                
            </BentoGrid>
        </div>
    </section>
</template>
<style scoped>
</style>