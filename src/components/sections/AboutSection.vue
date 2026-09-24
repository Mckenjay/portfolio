<script setup lang="ts">
import BentoCard from '@/components/BentoCard.vue'
import BentoGrid from '@/components/BentoGrid.vue'
import { Icon } from '@iconify/vue'
</script>

<template>
    <section id="about" class="portfolio-section">
        <div class="w-full max-w-6xl">
            <BentoGrid>
                <BentoCard :width="3" :height="3" >
                    <div class="flex h-full flex-col justify-center">
                    
                                <!-- Header -->
                                <div class="flex items-center gap-3">
                                    <div
                                        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-400"
                                    >
                                        <Icon
                                            icon="lucide:user"
                                            class="h-5 w-5 text-black"
                                        />
                                    </div>
                    
                                    <div>
                                        <p class="text-[10px] uppercase tracking-widest text-orange-400">
                                            About Me
                                        </p>
                    
                                        <h2 class="text-xl font-bold text-white">
                                            Software Developer
                                        </h2>
                                    </div>
                                </div>
                    
                                <!-- Main description -->
                                <div class="mt-5 max-w-3xl">
                                    <p class="text-sm leading-6 text-gray-300 md:text-base">
                                        I'm an IT graduate specializing in software development,
                                        with a focus on building practical and user-focused
                                        applications. I enjoy turning ideas and real-world
                                        requirements into reliable software solutions.
                                    </p>
                    
                                    <p class="mt-3 text-xs leading-5 text-gray-500 md:text-sm">
                                        My development experience includes
                                        <span class="text-orange-400">web applications</span>,
                                        <span class="text-orange-400">database-driven systems</span>,
                                        and
                                        <span class="text-orange-400">software solutions</span>.
                                        I value continuous improvement, practical implementation,
                                        and learning through building.
                                    </p>
                                </div>
                    
                                <!-- Bottom highlights -->
                                <div class="mt-6 flex flex-wrap gap-2">
                    
                                    <span class="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] text-gray-400">
                                        Software Development
                                    </span>
                    
                                    <span class="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] text-gray-400">
                                        Web Development
                                    </span>
                    
                                    <span class="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] text-gray-400">
                                        Database Systems
                                    </span>
                    
                                    <span class="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] text-gray-400">
                                        Problem Solving
                                    </span>
                    
                                </div>
                    
                            </div>
                </BentoCard>
            </BentoGrid>
        </div>
    </section>
</template>
