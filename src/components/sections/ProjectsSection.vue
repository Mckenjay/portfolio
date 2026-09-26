<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import BentoCard from '@/components/BentoCard.vue'
import BentoGrid from '@/components/BentoGrid.vue'
import { projects } from '@/data/projects'

const selectedTechnology = ref('All')
const activeIndex = ref(0)
const slideDirection = ref<1 | -1>(1)

const technologyIcons: Record<string, string> = {
  All: 'lucide:layers-3',
  'Vue.js': 'fa6-brands:vuejs',
  Laravel: 'fa6-brands:laravel',
  MySQL: 'fontisto:mysql',
  'VB.NET': 'fluent:code-vb-16-regular',
  'Flutter': 'fluent:code-vb-16-regular',
  
}

const technologies = computed(() => [
  'All',
  ...new Set(projects.flatMap((project) => project.technologies)),
])

const filteredProjects = computed(() =>
  selectedTechnology.value === 'All'
    ? projects
    : projects.filter((project) => project.technologies.includes(selectedTechnology.value)),
)

const activeProject = computed(() => filteredProjects.value[activeIndex.value])

function selectTechnology(technology: string) {
  selectedTechnology.value = technology
  activeIndex.value = 0
  slideDirection.value = 1
}

function moveProject(direction: -1 | 1) {
  const count = filteredProjects.value.length
  if (count < 2) return
  slideDirection.value = direction
  activeIndex.value = (activeIndex.value + direction + count) % count
}
</script>

<template>
  <section id="projects" class="portfolio-section !min-h-[calc(100svh-56px)] !overflow-visible !px-4 !py-4 sm:!px-8 sm:!py-5 lg:!px-12">
    <div class="flex w-full max-w-6xl flex-col justify-center">
      <BentoGrid :columns="3" :tablet-columns="2" :row-height="110" gap="0.75rem" max-width="none">
        <BentoCard :width="3" :tablet-width="2" class="!gap-3 !bg-[#141414] !p-4 sm:!gap-4 sm:!p-5">
          <div class="flex flex-wrap items-start justify-between gap-x-5 gap-y-3">
            <div>
              <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400 sm:text-xs">Selected work</p>
              <h2 class="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
                Projects <span class="text-orange-400">&amp; builds</span>
              </h2>
              <p class="mt-1.5 max-w-2xl text-xs leading-5 text-gray-400 sm:text-sm sm:leading-6">
                Practical applications shaped around real workflows and useful details.
              </p>
            </div>
            <div class="flex shrink-0 items-center gap-3">
              <span class="text-[10px] text-gray-500"><span class="text-orange-400">{{ String(filteredProjects.length).padStart(2, '0') }}</span> projects</span>
              <div class="flex items-center gap-1.5" aria-label="Project carousel controls">
                <button type="button" class="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-gray-300 transition hover:border-orange-400/50 hover:text-orange-300 disabled:opacity-35" :disabled="filteredProjects.length < 2" aria-label="Previous project" @click="moveProject(-1)">
                  <Icon icon="lucide:arrow-left" class="block h-4 w-4 shrink-0" />
                </button>
                <span class="min-w-12 text-center text-[10px] tabular-nums text-gray-500">{{ String(activeIndex + 1).padStart(2, '0') }} / {{ String(filteredProjects.length).padStart(2, '0') }}</span>
                <button type="button" class="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-gray-300 transition hover:border-orange-400/50 hover:text-orange-300 disabled:opacity-35" :disabled="filteredProjects.length < 2" aria-label="Next project" @click="moveProject(1)">
                  <Icon icon="lucide:arrow-right" class="block h-4 w-4 shrink-0" />
                </button>
              </div>
            </div>
          </div>

          <nav class="flex flex-wrap items-center gap-1.5 border-t border-white/10 pt-4" aria-label="Filter projects by technology">
            <span class="mr-1 text-[9px] font-bold uppercase tracking-widest text-gray-500 sm:text-[10px]">Stack</span>
            <button
              v-for="technology in technologies"
              :key="technology"
              type="button"
              class="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-[10px] font-semibold transition sm:gap-2 sm:px-3 sm:text-xs"
              :class="selectedTechnology === technology
                ? 'border-orange-400/50 bg-orange-400/10 text-orange-300'
                : 'border-white/10 bg-white/[0.03] text-gray-400 hover:border-orange-400/40 hover:text-orange-300'"
              :aria-pressed="selectedTechnology === technology"
              @click="selectTechnology(technology)"
            >
              <Icon :icon="technologyIcons[technology] || 'lucide:code-2'" class="h-3.5 w-3.5" />
              {{ technology }}
            </button>
          </nav>
        </BentoCard>

        <Transition :name="slideDirection > 0 ? 'project-next' : 'project-prev'" mode="out-in">
        <BentoCard v-if="activeProject" :key="activeProject.id" :width="2" :tablet-width="2" :height="2" :tablet-height="2" :mobile-height="2" class="!justify-between !gap-4 !bg-[#141414] !p-4 sm:!p-6">
          <div class="flex h-full min-w-0 flex-col">
            <div class="flex items-center gap-3">
              <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-orange-400/20 bg-orange-400/10 text-orange-400 sm:h-9 sm:w-9">
                <Icon icon="lucide:folder-kanban" class="block h-4 w-4 shrink-0" />
              </span>
              <p class="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400 sm:text-xs">{{ activeProject.category }}</p>
            </div>

            <div class="my-auto py-3 sm:py-5">
              <p class="mb-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-orange-400 sm:text-[10px]">Project {{ String(activeIndex + 1).padStart(2, '0') }}</p>
              <h3 class="max-w-2xl text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl md:text-3xl">
                {{ activeProject.name }}
              </h3>
              <p class="mt-2 max-w-2xl text-xs leading-5 text-gray-400 sm:mt-3 sm:text-sm sm:leading-6">
                {{ activeProject.description }}
              </p>
              <ul v-if="activeProject.highlights?.length" class="mt-3 hidden flex-wrap gap-1.5 lg:flex" aria-label="Project highlights">
                <li v-for="highlight in activeProject.highlights" :key="highlight" class="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px] text-gray-300">
                  <Icon icon="lucide:check" class="h-3 w-3 text-orange-400" />{{ highlight }}
                </li>
              </ul>
            </div>

            <div class="flex flex-wrap items-end justify-between gap-3 border-t border-white/10 pt-5">
              <div>
                <p class="mb-1.5 text-[9px] font-bold uppercase tracking-widest text-gray-500">Built with</p>
                <ul class="flex flex-wrap gap-1.5" :aria-label="`${activeProject.name} technologies`">
                  <li v-for="technology in activeProject.technologies" :key="technology" class="inline-flex items-center gap-1.5 rounded-md border border-orange-400/20 bg-orange-400/5 px-2 py-1 text-[10px] text-orange-300 sm:px-2.5 sm:text-xs">
                    <Icon :icon="technologyIcons[technology] || 'lucide:code-2'" class="h-3 w-3 sm:h-3.5 sm:w-3.5" />{{ technology }}
                  </li>
                </ul>
              </div>
              <div class="flex gap-2">
                <a v-if="activeProject.link" :href="activeProject.link" target="_blank" rel="noreferrer" class="inline-flex items-center gap-1.5 rounded-lg bg-orange-400 px-2.5 py-2 text-[10px] font-bold text-black transition hover:bg-orange-300 sm:px-3 sm:text-xs">
                  View project <Icon icon="lucide:arrow-up-right" class="h-3.5 w-3.5" />
                </a>
                <a v-if="activeProject.repository" :href="activeProject.repository" target="_blank" rel="noreferrer" class="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-2.5 py-2 text-[10px] font-semibold text-gray-300 transition hover:border-white/30 hover:text-white sm:px-3 sm:text-xs">
                  <Icon icon="simple-icons:github" class="h-3.5 w-3.5" /> Repository
                </a>
              </div>
            </div>
          </div>

        </BentoCard>
        </Transition>

        <Transition :name="slideDirection > 0 ? 'project-next' : 'project-prev'" mode="out-in">
        <BentoCard v-if="activeProject" :width="1" :tablet-width="2" :height="2" :tablet-height="2" class="project-preview-card !overflow-hidden !bg-[#151515] !p-0">
          <div v-if="activeProject.image" class="relative h-full w-full overflow-hidden">
            <img :src="activeProject.image" :alt="`${activeProject.name} preview`" class="!absolute !inset-0 h-full w-full object-cover" />
          </div>
          <div v-else class="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-orange-400/[0.10] via-white/[0.02] to-transparent p-4 text-center">
            <span class="flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-300/20 bg-black/20 text-orange-400 shadow-[0_0_60px_rgba(251,146,60,0.08)]">
              <Icon :icon="activeProject.id === 'pharma-clinic' ? 'lucide:heart-pulse' : 'lucide:receipt-text'" class="block h-8 w-8 shrink-0" />
            </span>
            <p class="mt-4 text-[10px] font-semibold text-gray-300">{{ activeProject.name }}</p>
            <p class="mt-1 text-[9px] uppercase tracking-widest text-gray-500">No preview image</p>
          </div>
        </BentoCard>
        </Transition>
      </BentoGrid>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 900px) {
  .project-preview-card {
    display: none !important;
  }
}

.project-next-enter-active,
.project-next-leave-active,
.project-prev-enter-active,
.project-prev-leave-active {
  transition: opacity 220ms ease, transform 260ms ease;
}

.project-next-enter-from { opacity: 0; transform: translateX(1rem); }
.project-next-leave-to { opacity: 0; transform: translateX(-1rem); }
.project-prev-enter-from { opacity: 0; transform: translateX(-1rem); }
.project-prev-leave-to { opacity: 0; transform: translateX(1rem); }

@media (prefers-reduced-motion: reduce) {
  .project-next-enter-active,
  .project-next-leave-active,
  .project-prev-enter-active,
  .project-prev-leave-active {
    transition: none;
  }
}
</style>
