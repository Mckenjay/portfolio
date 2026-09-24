<script setup lang="ts">
import BentoCard from '@/components/BentoCard.vue'
import BentoGrid from '@/components/BentoGrid.vue'
import { Icon } from '@iconify/vue'
</script>

<template>
    <section id="about" class="portfolio-section">
        <div class="w-full max-w-6xl">
            <BentoGrid :columns="3" max-width="1000px">
                <BentoCard :width="3" :height="3">
                    <div class="mx-auto flex h-full w-full max-w-4xl flex-col justify-center gap-6">
                        <header class="flex items-center gap-4">
                            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-400">
                                <Icon icon="lucide:user" class="h-6 w-6 text-black" />
                            </div>

                            <div>
                                <p class="text-xs font-semibold uppercase tracking-[0.18em] text-orange-400">
                                    About Me
                                </p>
                                <h2 class="mt-1 text-2xl font-bold leading-tight text-white md:text-3xl">
                                    Software Developer
                                </h2>
                            </div>
                        </header>

                        <div class="space-y-4">
                            <p class="text-base text-justify leading-7 text-gray-200 md:text-lg">
                                I specialize in software development, building practical
                                and user-focused applications. I enjoy turning ideas and
                                real-world needs into reliable software solutions.
                            </p>

                            <p class="text-sm leading-6 text-gray-400 md:text-base md:leading-7">
                                I turn project requirements into reliable, easy-to-use
                                features. I value maintainable code, practical
                                problem solving, and learning through building.
                            </p>
                        </div>

                        <div class="flex flex-col gap-2">
                            <p class="text-[10px] uppercase tracking-widest text-orange-400">
                                Core Focus
                            </p>
                            <ul class="flex flex-wrap gap-2.5" aria-label="Areas of focus">
                                <li class="rounded-md border border-orange-400/20 bg-orange-400/10 px-3 py-2 text-xs leading-4 text-orange-400">
                                    Software Development
                                </li>
                                <li class="rounded-md border border-orange-400/20 bg-orange-400/10 px-3 py-2 text-xs leading-4 text-orange-400">
                                    Web Development
                                </li>
                                <li class="rounded-md border border-orange-400/20 bg-orange-400/10 px-3 py-2 text-xs leading-4 text-orange-400">
                                    Database Systems
                                </li>
                                <li class="rounded-md border border-orange-400/20 bg-orange-400/10 px-3 py-2 text-xs leading-4 text-orange-400">
                                    Problem Solving
                                </li>
                            </ul>
                        </div>
                    </div>
                </BentoCard>
            </BentoGrid>
        </div>
    </section>
</template>
