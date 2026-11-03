<script setup lang="ts">
import BentoCard from "@/components/BentoCard.vue";
import BentoGrid from "@/components/BentoGrid.vue";
import { Icon } from "@iconify/vue";
import { experiences } from "@/data/experiences";
</script>

<template>
    <section
        id="experience"
        class="portfolio-section min-h-[calc(100svh-56px)]! overflow-visible! px-4! py-8! sm:px-8! lg:px-12!"
    >
        <div class="w-full max-w-6xl">
            <BentoGrid
                :columns="3"
                :tablet-columns="2"
                :row-height="90"
                gap="0.75rem"
                max-width="none"
            >
                <BentoCard :width="3" :tablet-width="2" class="p-4! sm:p-6!">
                    <div class="flex flex-wrap items-end justify-between gap-3">
                        <div>
                            <p
                                class="text-[10px] font-bold uppercase tracking-[0.2em] text-accent sm:text-xs"
                            >
                                Career & learning
                            </p>
                            <h2
                                class="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
                            >
                                Experience
                                <span class="text-accent">&amp; growth</span>
                            </h2>
                            <p
                                class="mt-2 max-w-2xl text-xs leading-5 text-gray-400 sm:text-sm sm:leading-6"
                            >
                                Professional work, internship experience, and
                                continued independent development.
                            </p>
                        </div>
                    </div>
                </BentoCard>
                <article
                    v-for="(item, index) in experiences"
                    :key="item.role"
                    class="col-span-3 sm:col-span-3"
                >
                    <BentoCard
                        :width="3"
                        :tablet-width="2"
                        class="relative justify-start! p-4! sm:p-5!"
                    >
                        <details class="group w-full">
                            <summary
                                class="flex cursor-pointer list-none flex-wrap items-start justify-between gap-3 [&::-webkit-details-marker]:hidden"
                            >
                                <div class="flex min-w-0 items-start gap-3">
                                    <div
                                        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-(--accent-color)/15 text-accent"
                                    >
                                        <Icon
                                            :icon="item.icon"
                                            class="h-5 w-5"
                                        />
                                    </div>
                                    <div class="min-w-0">
                                        <p
                                            class="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent"
                                        >
                                            {{ item.type }}
                                        </p>
                                        <h3
                                            class="mt-1 text-base font-bold leading-snug text-white sm:text-lg"
                                        >
                                            {{ item.role }}
                                        </h3>
                                        <p class="mt-1 text-xs text-gray-400">
                                            {{ item.organization }}
                                        </p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span
                                        class="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] text-gray-300 sm:text-xs"
                                        >{{ item.period }}</span
                                    >
                                    <span
                                        class="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition-transform group-open:rotate-180"
                                        aria-hidden="true"
                                    >
                                        <Icon
                                            icon="lucide:chevron-down"
                                            class="h-4 w-4"
                                        />
                                    </span>
                                    <span class="sr-only"
                                        >Toggle details for
                                        {{ item.role }}</span
                                    >
                                </div>
                            </summary>

                            <div class="mt-4 space-y-4">
                                <p
                                    class="text-xs leading-6 text-gray-300 sm:text-sm"
                                >
                                    {{ item.description }}
                                </p>

                                <ul class="space-y-2">
                                    <li
                                        v-for="highlight in item.highlights"
                                        :key="highlight"
                                        class="flex gap-2 text-xs leading-5 text-gray-400 sm:text-sm"
                                    >
                                        <Icon
                                            icon="lucide:arrow-up-right"
                                            class="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
                                        />
                                        <span>{{ highlight }}</span>
                                    </li>
                                </ul>

                                <div
                                    class="flex flex-wrap gap-1.5 border-t border-white/10 pt-3"
                                >
                                    <span
                                        v-for="technology in item.technologies"
                                        :key="technology"
                                        class="rounded-md border border-(--accent-color)/20 bg-(--accent-color)/10 px-2.5 py-1 text-[10px] text-accent"
                                        >{{ technology }}</span
                                    >
                                </div>
                            </div>
                        </details>
                    </BentoCard>
                </article>
            </BentoGrid>
        </div>
    </section>
</template>
