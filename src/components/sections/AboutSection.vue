<script setup lang="ts">
import BentoCard from '@/components/BentoCard.vue'
import BentoGrid from '@/components/BentoGrid.vue'
import { Icon } from '@iconify/vue'
</script>

<template>
    <section id="about" class="portfolio-section">
        <div class="w-full max-w-6xl">
            <BentoGrid>
                <BentoCard :width="2" :height="2">
                    <div class="flex h-full flex-col justify-center">
                
                        <div class="flex items-center gap-3">
                            <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-400">
                                <Icon icon="lucide:user" class="h-4 w-4 text-black"/>
                            </div>
                
                            <div>
                                <p class="text-10px uppercase tracking-widest text-orange-400">
                                    Who I Am
                                </p>
                                <h3 class="text-base font-bold text-white">
                                    Software Developer
                                </h3>
                            </div>
                        </div>

                        <p class="mt-4 text-justify text-xs leading-5  text-gray-400 md:text-sm">
                            I'm a software developer focused on building practical software applications using modern technologies. I enjoy turning ideas and real-world problems into useful software solutions.

                        </p>
                
                        <p class="mt-2 text-xs leading-5  text-gray-500">
                            Experienced with
                            <span class="text-orange-400">Laravel</span>,
                            <span class="text-orange-400">Vue.js</span>,
                            <span class="text-orange-400">PHP</span>,
                            and databases.
                        </p>
                    </div>
                </BentoCard>
                <BentoCard :width="2" :height="2">
                    <div class="flex h-full flex-col justify-center">
                        <div class="flex items-center gap-3">
                            <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-400">
                                <Icon icon="lucide:route" class="h-4 w-4 text-black"/>
                            </div>
                
                            <div>
                                <p class="text-[10px] uppercase tracking-widest text-orange-400">
                                    My Journey
                                </p>
                
                                <h3 class="text-base font-bold text-white">
                                    From learning to building
                                </h3>
                            </div>
                        </div>
                
                        <div class="mt-4 space-y-3">
                            <div class="flex gap-3">
                                <span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-400"></span>
                                <div>
                                    <p class="text-xs font-semibold text-white">
                                        IT Graduate
                                    </p>
                
                                    <p class="text-[11px] leading-4 text-gray-500">
                                        Foundation in software development
                                        and databases.
                                    </p>
                                </div>
                            </div>
                            <div class="flex gap-3">
                                <span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-400"></span>
                                <div>
                                    <p class="text-xs font-semibold text-white">
                                        Internship
                                    </p>
                
                                    <p class="text-[11px] leading-4 text-gray-500">
                                        Developed a web-based billing
                                        inquiry application.
                                    </p>
                                </div>
                            </div>
                
                            <div class="flex gap-3">
                                <span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-400"></span>
                                <div>
                                    <p class="text-xs font-semibold  text-orange-400">
                                        Software Development
                                    </p>
                
                                    <p class="text-[11px] leading-4 text-gray-500">
                                        Continuing to build and improve
                                        practical applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </BentoCard>
                <BentoCard :width="2" :height="2">
                    <div class="flex h-full flex-col justify-center">
                            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-400/10">
                                <Icon icon="lucide:code-2" class="h-4 w-4 text-orange-400"/>
                            </div>
                    
                            <p class="mt-3 text-[10px] uppercase tracking-widest text-orange-400">
                                How I Work
                            </p>
                    
                            <h3 class="mt-1 text-base font-bold text-white">
                                Practical and focused
                            </h3>
                    
                            <p class="mt-2 text-xs leading-5 text-gray-400">
                                Understand the problem → build a practical
                                solution → test and improve.
                            </p>
                    
                            <div class="mt-3 flex gap-2">
                                <span class="rounded bg-orange-400/10 px-2 py-1 text-[10px] text-orange-400">
                                    Understand
                                </span>
                    
                                <span class="rounded bg-orange-400/10 px-2 py-1 text-[10px] text-orange-400">
                                    Build
                                </span>
                    
                                <span class="rounded bg-orange-400/10 px-2 py-1 text-[10px] text-orange-400">
                                    Improve
                                </span>
                            </div>
                        </div>
                </BentoCard>
                <BentoCard :width="2" :height="2">
                    <div class="flex h-full flex-col justify-center">
                            <div
                                class="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-400/10">
                                <Icon icon="lucide:lightbulb" class="h-4 w-4 text-orange-400"/>
                            </div>
                    
                            <p class="mt-3 text-[10px] uppercase tracking-widest text-orange-400">
                                What Matters
                            </p>
                    
                            <h3 class="mt-1 text-base font-bold text-white">
                                Always learning
                            </h3>
                    
                            <p class="mt-2 text-xs leading-5 text-gray-400">
                                Continuous learning, clean implementation,
                                practical solutions, and meaningful projects.
                            </p>
                    
                            <div class="mt-3 flex flex-wrap gap-2">
                                <span class="rounded bg-white/5 px-2 py-1 text-[10px] text-gray-400">
                                    Learning
                                </span>
                    
                                <span class="rounded bg-white/5 px-2 py-1 text-[10px] text-gray-400">
                                    Clean Code
                                </span>
                    
                                <span class="rounded bg-white/5 px-2 py-1 text-[10px] text-gray-400">
                                    Problem Solving
                                </span>
                            </div>
                        </div>
                </BentoCard>
            </BentoGrid>
        </div>
    </section>
</template>
