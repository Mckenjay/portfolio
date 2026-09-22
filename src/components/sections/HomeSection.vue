<script setup lang="ts">
import BentoCard from '../BentoCard.vue';
import BentoGrid from '../BentoGrid.vue';

import { onMounted, onUnmounted, ref } from 'vue'

const words = ['Developer', 'Designer', 'Creator']
const displayedWord = ref('')
const wordIndex = ref(0)
const isDeleting = ref(false)

let timer: ReturnType<typeof setTimeout> | undefined

function type() {
  const fullWord = words[wordIndex.value]

  if (isDeleting.value) {
    displayedWord.value = fullWord.slice(0, displayedWord.value.length - 1)
  } else {
    displayedWord.value = fullWord.slice(0, displayedWord.value.length + 1)
  }

  let delay = isDeleting.value ? 80 : 130

  // Finished typing: wait before backspacing
  if (!isDeleting.value && displayedWord.value === fullWord) {
    isDeleting.value = true
    delay = 1200
  }

  // Finished deleting: move to the next word
  if (isDeleting.value && displayedWord.value === '') {
    isDeleting.value = false
    wordIndex.value = (wordIndex.value + 1) % words.length
    delay = 300
  }

  timer = setTimeout(type, delay)
}

onMounted(type)

onUnmounted(() => {
  if (timer) clearTimeout(timer)
})
</script>
<template>
    <section id="home" class="portfolio-section">
        <div class="hero-content">
            <BentoGrid>
                <!-- Main introduction -->
                <BentoCard :width="3" :height="3">
                    <p>Hi, I'm Ted Bryan.</p> 
                    <h1 class="text-5xl font-bold tracking-tight py-2">
                        <span class="text-orange-400">{{ displayedWord }}</span>
                        <span class="text-orange-400 typing-cursor" aria-hidden="true">|</span>
                    </h1>
                     
                     <p>
                        I build web applications using Laravel,
                        Vue.js and modern web technologies.
                    </p>  
                </BentoCard>
            
                <!-- Profile -->
                <BentoCard :width="1" :height="3">
                    <img src="" alt="Profile"></img>
                </BentoCard>
            
                <!-- Current focus -->
                <BentoCard :width="2" :height="1">
                    Currently learning...
                </BentoCard>
            
                <!-- Quick stats -->
                <BentoCard :width="2" :height="1">
                    Projects • Technologies • OJT
                </BentoCard>
            
                <!-- Featured project -->
                <BentoCard :width="4" :height="2">
                    Featured Project
                </BentoCard>
            </BentoGrid>
        </div>
    </section>
</template>
<style scoped>
.typing-cursor {
  display: inline-block;
  /*margin-left: 0.15em;*/
  /*color: #a78bfa;*/
  font-weight: 400;
  animation: cursor-blink 0.8s step-end infinite;
}

@keyframes cursor-blink {
  50% {
    opacity: 0;
  }
}

</style>