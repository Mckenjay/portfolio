<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import HomeSection from '@/components/sections/HomeSection.vue';
import BentoSection from '@/components/sections/BentoSection.vue';
</script>

<template>
    <NavBar />
    <main class="portfolio">
        <HomeSection /> 
        <BentoSection /> 
    </main>
</template>

<style scoped></style>
