<script setup lang="ts">
import BentoCard from '../BentoCard.vue';
import BentoGrid from '../BentoGrid.vue';
</script>
<template>
    <section id="home" class="portfolio-section">
        <div class="hero-content">
            <!-- <BentoGrid>
                <BentoCard :width="1" :height="3">
                    <img src="" alt="profile" />
                </BentoCard>
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
                
            </BentoGrid> -->
            <BentoGrid>
                <!-- Main introduction -->
                <BentoCard :width="3" :height="3">
                    <p>Hi, I'm Ted Bryan.</p>
                    <h1>Software Developer</h1>
                    <p>
                        I build web applications using Laravel,
                        Vue.js and modern web technologies.
                    </p>
                </BentoCard>
            
                <!-- Profile -->
                <BentoCard :width="1" :height="3">
                    Profile image / avatar
                </BentoCard>
            
                <!-- Current focus -->
                <BentoCard :width="2" :height="1">
                    Currently learning...
                </BentoCard>
            
                <!-- Quick stats -->
                <BentoCard :width="2" :height="1">
                    Projects • Technologies • OJT
                </BentoCard>
            
                <!-- Featured project -->
                <BentoCard :width="4" :height="2">
                    Featured Project
                </BentoCard>
            </BentoGrid>
        </div>
    </section>
</template>
<style scoped>
</style>