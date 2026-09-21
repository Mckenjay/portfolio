<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import Background from '@/components/Background.vue';
import HomeSection from '@/components/sections/HomeSection.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
</script>

<template>
    <div class="relative min-h-screen">
        <Background />

        <div class="relative z-10 w-full">
            <NavBar />
            <main>
                <HomeSection />
                <AboutSection />
            </main>
        </div>
    </div>
</template>
<style scoped></style>
