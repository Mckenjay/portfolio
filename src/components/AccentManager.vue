<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import { useAccent, type AccentName } from '@/composables/useAccent'

const { accents, accentColor, setAccent, loadAccent, resetAccent } = useAccent()

const isOpen = ref(false)

onMounted(() => {
  loadAccent()
})

const selectAccent = (accent: AccentName) => {
  setAccent(accent)
}
</script>

<template>
    <div class="fixed z-50 bottom-6 right-6">
        <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-2 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-2 opacity-0"
        >   
            <div 
                v-if="isOpen"
                class="absolute bottom-14 right-0 mb-3 w-56 rounded-xl border border-white/10 bg-black/80 p-4 shadow-2xl backdrop-blur-xl"
            >
                <div class="mb-4 flex items-center justify-between">
                    <div>
                        <p class="text-sm font-semibold text-white">
                            Accent Color
                        </p>
                        <p class="mt-1 text-xs text-white/40">
                            Choose your theme color
                        </p>
                    </div>
                    <button type="button" class="flex h-7 w-7 items-center justify-center rounded-md text-white/40 transition hover:bg-white/40 hover:text-white"
                        aria-label="Close accent manager" @click="isOpen = false">
                        <Icon icon="lucide:x" class="h-4 w-4" />
                    </button>
                </div>
                <div class="grid grid-cols-7 gap-3">
                    <button 
                        v-for="accent in accents"
                        :key="accent.name"
                        type="button"
                        :aria-label="`Use ${accent.label} accent`"
                        :title="accent.label"
                        class="group flex flex-col items-center gap-1.5"
                        @click="selectAccent(accent.name)"
                    >
                        <span :class="[accent.preview, 'relative h-6 w-6 rounded-full transition-transform duration-200 group-hover:scale-100',
                          accentColor === accent.name ? 'ring-2 ring-white ring-offset-2 ring-offset-black' : '']">
                            <Icon v-if="accentColor === accent.name" icon="lucide:check" class="absolute inset-0 m-auto text-black h-4 w-4" />
                        </span>
                    </button>
                </div>
            </div>
        </Transition>

        <button type="button" aria-label="Open accent manager" :aria-expanded="isOpen"
            class="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/70 shadow-lg backdrop-blur-xl transition duration-200 hover:scale-105 hover:border-white/20"
            @click="isOpen = !isOpen"
        >
           <span class="flex h-5 w-5 items-center justify-center rounded-full">
               <Icon icon="lucide:palette" class="h-5 w-5 text-accent" />
           </span> 
        </button>
    </div>
</template>