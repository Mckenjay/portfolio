<!-- <script setup lang="ts">
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
</style>  -->

<script setup lang="ts">
import BentoCard from '@/components/BentoCard.vue'
import BentoGrid from '@/components/BentoGrid.vue'
import { Icon } from '@iconify/vue'
</script>

<template>
    <section id="about" class="portfolio-section">
        <div class="w-full max-w-6xl">

            <BentoGrid
                 :columns="4" 
                 :tablet-columns="2" 
                 :row-height="75" 
                 gap="0.75rem" 
            >

                <!-- WHO I AM -->
                <BentoCard :width="2" :height="2">

                    <div class="flex h-full flex-col justify-center">

                        <div class="flex items-center gap-3">
                            <div
                                class="flex h-9 w-9 shrink-0
                                       items-center justify-center
                                       rounded-lg bg-orange-400"
                            >
                                <Icon
                                    icon="lucide:user"
                                    class="h-4 w-4 text-black"
                                />
                            </div>

                            <div>
                                <p
                                    class="text-20px uppercase
                                           tracking-widest text-orange-400"
                                >
                                    Who I Am
                                </p>

                                <h3 class="text-base font-bold text-white">
                                    Software Developer
                                </h3>
                            </div>
                        </div>

                        <p
                            class="mt-4 text-xs leading-5
                                   text-gray-400 md:text-sm"
                        >
                            I'm a fresh IT graduate specializing in
                            software development. I enjoy building
                            practical web applications that solve
                            real-world problems.
                        </p>

                        <p
                            class="mt-2 text-xs leading-5
                                   text-gray-500"
                        >
                            Experienced with
                            <span class="text-orange-400">Laravel</span>,
                            <span class="text-orange-400">Vue.js</span>,
                            <span class="text-orange-400">PHP</span>,
                            and databases.
                        </p>

                    </div>

                </BentoCard>


                <!-- MY JOURNEY -->
                <BentoCard :width="2" :height="2">

                    <div class="flex h-full flex-col justify-center">

                        <div class="flex items-center gap-3">
                            <div
                                class="flex h-9 w-9 shrink-0
                                       items-center justify-center
                                       rounded-lg bg-orange-400"
                            >
                                <Icon
                                    icon="lucide:route"
                                    class="h-4 w-4 text-black"
                                />
                            </div>

                            <div>
                                <p
                                    class="text-[10px] uppercase
                                           tracking-widest text-orange-400"
                                >
                                    My Journey
                                </p>

                                <h3 class="text-base font-bold text-white">
                                    From learning to building
                                </h3>
                            </div>
                        </div>

                        <div class="mt-4 space-y-3">

                            <div class="flex gap-3">
                                <span
                                    class="mt-1.5 h-2 w-2 shrink-0
                                           rounded-full bg-orange-400"
                                ></span>

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
                                <span
                                    class="mt-1.5 h-2 w-2 shrink-0
                                           rounded-full bg-orange-400"
                                ></span>

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
                                <span
                                    class="mt-1.5 h-2 w-2 shrink-0
                                           rounded-full bg-orange-400"
                                ></span>

                                <div>
                                    <p
                                        class="text-xs font-semibold
                                               text-orange-400"
                                    >
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


                <!-- HOW I WORK -->
                <BentoCard :width="2" :height="2">

                    <div class="flex h-full flex-col justify-center">

                        <div
                            class="flex h-8 w-8 items-center
                                   justify-center rounded-lg
                                   bg-orange-400/10"
                        >
                            <Icon
                                icon="lucide:code-2"
                                class="h-4 w-4 text-orange-400"
                            />
                        </div>

                        <p
                            class="mt-3 text-[10px] uppercase
                                   tracking-widest text-orange-400"
                        >
                            How I Work
                        </p>

                        <h3 class="mt-1 text-base font-bold text-white">
                            Practical and focused
                        </h3>

                        <p
                            class="mt-2 text-xs leading-5 text-gray-400"
                        >
                            Understand the problem → build a practical
                            solution → test and improve.
                        </p>

                        <div class="mt-3 flex gap-2">
                            <span
                                class="rounded bg-orange-400/10
                                       px-2 py-1 text-[10px]
                                       text-orange-400"
                            >
                                Understand
                            </span>

                            <span
                                class="rounded bg-orange-400/10
                                       px-2 py-1 text-[10px]
                                       text-orange-400"
                            >
                                Build
                            </span>

                            <span
                                class="rounded bg-orange-400/10
                                       px-2 py-1 text-[10px]
                                       text-orange-400"
                            >
                                Improve
                            </span>
                        </div>

                    </div>

                </BentoCard>


                <!-- WHAT MATTERS -->
                <BentoCard :width="2" :height="2">

                    <div class="flex h-full flex-col justify-center">

                        <div
                            class="flex h-8 w-8 items-center
                                   justify-center rounded-lg
                                   bg-orange-400/10"
                        >
                            <Icon
                                icon="lucide:lightbulb"
                                class="h-4 w-4 text-orange-400"
                            />
                        </div>

                        <p
                            class="mt-3 text-[10px] uppercase
                                   tracking-widest text-orange-400"
                        >
                            What Matters
                        </p>

                        <h3 class="mt-1 text-base font-bold text-white">
                            Always learning
                        </h3>

                        <p
                            class="mt-2 text-xs leading-5 text-gray-400"
                        >
                            Continuous learning, clean implementation,
                            practical solutions, and meaningful projects.
                        </p>

                        <div class="mt-3 flex flex-wrap gap-2">
                            <span
                                class="rounded bg-white/5
                                       px-2 py-1 text-[10px]
                                       text-gray-400"
                            >
                                Learning
                            </span>

                            <span
                                class="rounded bg-white/5
                                       px-2 py-1 text-[10px]
                                       text-gray-400"
                            >
                                Clean Code
                            </span>

                            <span
                                class="rounded bg-white/5
                                       px-2 py-1 text-[10px]
                                       text-gray-400"
                            >
                                Problem Solving
                            </span>
                        </div>

                    </div>

                </BentoCard>

            </BentoGrid>

        </div>
    </section>
</template>