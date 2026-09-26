<script setup lang="ts">
import BentoCard from '@/components/BentoCard.vue'
import BentoGrid from '@/components/BentoGrid.vue'
import { Icon } from '@iconify/vue'
</script>

<template>
    <section id="contact" class="portfolio-section">
        <div class="w-full max-w-6xl">

            <BentoGrid
                :columns="4"
                :tablet-columns="2"
                :row-height="72"
                gap="0.75rem"
            >

                <!-- =========================================
                     MAIN CONTACT CARD
                     3 × 3
                ========================================== -->
                <BentoCard :width="3" :height="4">

                    <div class="relative flex h-full flex-col">


                        <!-- Heading -->
                        <div class="relative z-10">

                            <p
                                class="text-[10px] font-bold uppercase
                                       tracking-[0.3em] text-orange-400"
                            >
                                Get In Touch
                            </p>

                            <h2
                                class="mt-4 max-w-2xl text-3xl
                                       font-bold leading-tight
                                       tracking-tight text-white
                                       md:text-4xl"
                            >
                                Let's build something
                                <span class="text-orange-400">
                                    meaningful.
                                </span>
                            </h2>

                            <p
                                class="mt-4 max-w-xl text-sm
                                       leading-6 text-gray-400"
                            >
                                I'm open to software development
                                opportunities, freelance projects,
                                and collaborations.
                            </p>

                        </div>


                        <!-- Bottom -->
                        <div
                            class="relative z-10 mt-auto
                                   flex items-end justify-between
                                   gap-6"
                        >

                            <a
                                href="mailto:tedbryanrazonado12345@gmail.com"
                                class="group inline-flex items-center
                                       gap-3 rounded-lg
                                       bg-orange-400 px-5 py-3
                                       text-sm font-bold text-black
                                       transition-all duration-300
                                       hover:-translate-y-1
                                       hover:bg-orange-300
                                       hover:shadow-[0_8px_30px_rgba(251,146,60,0.2)]"
                            >
                                <span>Send me an email</span>

                                <Icon
                                    icon="lucide:arrow-up-right"
                                    class="h-4 w-4 transition-transform
                                           duration-300
                                           group-hover:translate-x-1
                                           group-hover:-translate-y-1"
                                />
                            </a>


                            <div
                                class="hidden text-right
                                       sm:block"
                            >
                                <p
                                    class="text-[10px] uppercase
                                           tracking-widest
                                           text-gray-600"
                                >
                                    Currently
                                </p>

                                <p
                                    class="mt-1 text-xs
                                           text-gray-400"
                                >
                                    Building & learning
                                </p>
                            </div>

                        </div>

                    </div>

                </BentoCard>


                <!-- =========================================
                     AVAILABILITY CARD
                     1 × 3
                ========================================== -->
                <BentoCard :width="1" :height="3">

                    <div class="flex h-full flex-col">

                        <!-- status -->
                        <div class="flex justify-end">

                            <span
                                class="flex items-center gap-2
                                       rounded-full border
                                       border-orange-400/20
                                       bg-orange-400/5
                                       px-2.5 py-1.5
                                       text-[9px] font-bold
                                       uppercase tracking-wider
                                       text-orange-400"
                            >
                                <span
                                    class="h-1.5 w-1.5 rounded-full
                                           bg-orange-400
                                           shadow-[0_0_8px_rgba(251,146,60,0.8)]"
                                ></span>

                                Available
                            </span>

                        </div>


                        <!-- center -->
                        <div
                            class="flex flex-1 flex-col
                                   items-center justify-center
                                   text-center"
                        >

                            <div
                                class="flex h-14 w-14 items-center
                                       justify-center rounded-2xl
                                       bg-orange-400"
                            >
                                <Icon
                                    icon="lucide:briefcase-business"
                                    class="h-6 w-6 text-black"
                                />
                            </div>

                            <h3
                                class="mt-5 text-base font-bold
                                       text-white"
                            >
                                Open to Work
                            </h3>

                            <p
                                class="mt-2 text-xs leading-5
                                       text-gray-500"
                            >
                                Looking for my next opportunity
                                in software development.
                            </p>

                        </div>


                        <!-- bottom -->
                        <div
                            class="border-t border-white/10
                                   pt-4"
                        >

                            <p
                                class="text-[9px] uppercase
                                       tracking-widest
                                       text-gray-600"
                            >
                                Interested in
                            </p>

                            <p
                                class="mt-2 text-[11px]
                                       leading-5 text-gray-400"
                            >
                                Web Development<br>
                                Software Development<br>
                                Backend Development
                            </p>

                        </div>

                    </div>

                </BentoCard>


                <!-- =========================================
                     BOTTOM MESSAGE
                     3 × 1
                ========================================== -->
                <!-- <BentoCard :width="3" :height="1">

                    <div
                        class="flex h-full items-center
                               justify-between gap-6"
                    >

                        <div>

                            <p
                                class="text-[9px] uppercase
                                       tracking-[0.25em]
                                       text-orange-400"
                            >
                                Start a conversation
                            </p>

                            <p
                                class="mt-1 text-xs
                                       text-gray-400"
                            >
                                Have an opportunity in mind?
                                I'd love to hear about it.
                            </p>

                        </div>

                        <a
                            href="mailto:your@email.com"
                            class="hidden shrink-0 items-center
                                   gap-2 text-xs font-bold
                                   text-white transition-colors
                                   hover:text-orange-400
                                   sm:flex"
                        >
                            Let's talk

                            <Icon
                                icon="lucide:arrow-right"
                                class="h-4 w-4"
                            />
                        </a>

                    </div>

                </BentoCard> -->


                <!-- =========================================
                     SOCIAL RAIL
                     1 × 1
                ========================================== -->
                <BentoCard :width="1" :height="1">

                    <div
                        class="flex h-full items-center
                               justify-center gap-5"
                    >

                        <a
                            href="https://github.com/Mckenjay"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            class="group"
                        >
                            <Icon
                                icon="simple-icons:github"
                                class="h-4 w-4 text-gray-500
                                       transition-colors
                                       group-hover:text-white"
                            />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/teddev"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            class="group"
                        >
                            <Icon
                                icon="simple-icons:linkedin"
                                class="h-4 w-4 text-gray-500
                                       transition-colors
                                       group-hover:text-orange-400"
                            />
                        </a>

                        <a
                            href="mailto:tedbryanrazonado12345@gmail.com"
                            aria-label="Email"
                            class="group"
                        >
                            <Icon
                                icon="lucide:mail"
                                class="h-4 w-4 text-gray-500
                                       transition-colors
                                       group-hover:text-orange-400"
                            />
                        </a>

                    </div>

                </BentoCard>

            </BentoGrid>

        </div>
    </section>
</template>
