<script setup lang="ts">
import BentoCard from '../BentoCard.vue';
import BentoGrid from '../BentoGrid.vue';
import profile from '@/assets/images/profile.png';
import { Icon } from '@iconify/vue';
import { onMounted, onUnmounted, ref } from 'vue'

const words = ['Hello,', 'Bonjour,', 'Hola,', 'Konnichiwa,', '']
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
                <BentoCard :width="3" :height="2"> 
                    <div class="flex h-full flex-col justify-center"> 
                        <p class="mb-2 text-2xl font-bold text-white" > 
                            {{ displayedWord }} 
                            <span class="typing-cursor text-orange-400" aria-hidden="true" >|</span> 
                        </p> 
                        <h1 class="text-4xl font-bold tracking-tight text-white md:text-5xl" > 
                            I'm a <span class="text-orange-400"> Software Developer </span> 
                        </h1> 
                        <p class="mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 md:text-lg" > 
                            I build practical web applications using Laravel, Vue.js and modern web technologies. 
                        </p>
                        <!-- <div class="mt-6 flex flex-wrap gap-3"> 
                            <a href="#projects" class="rounded-lg bg-orange-400 px-4 py-2 text-sm font-semibold text-black no-underline transition hover:bg-orange-300" > 
                                View Projects 
                            </a> 
                            <a href="#contact" class="rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-white no-underline transition hover:bg-white/10" > 
                                Contact Me 
                            </a> 
                        </div>  -->
                    </div> 
                </BentoCard> 
                <!-- ===================================================== CARD 2 — PROFILE ===================================================== --> 
                <BentoCard :width="1" :height="2"> 
                    <div class="flex h-full flex-col items-center justify-center text-center"> 
                        <!-- Replace with your actual photo --> 
                        <div class="mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5" > 
                            <span class="text-3xl"> <img class="bg-orange-400" :src="profile" alt="Profile" /> </span> 
                        </div> 
                        <h2 class="text-lg font-bold text-white"> Ted Bryan </h2> 
                        <p class="mt-1 text-xs text-gray-400"> IT Graduate </p> 
                        <p class="mt-3 text-xs text-gray-500"> Software Development </p> 
                    </div> 
                </BentoCard> 
                <!-- ===================================================== CARD 3 — CURRENT FOCUS ===================================================== --> 
                <!-- <BentoCard :width="2" :height="1"> 
                    <div class="flex h-full items-center gap-5"> 
                        <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-400/10 text-xl" > 
                            <span class="text-orange-400"> &lt;/&gt; </span> 
                        </div> 
                        <div> 
                            <p class="text-xs uppercase tracking-widest text-gray-500" > Currently focused on </p> 
                            <h3 class="mt-1 text-lg font-bold text-white"> Full-Stack Development </h3> 
                            <p class="mt-1 text-xs text-gray-400"> Building and improving practical web applications. </p> 
                        </div> 
                    </div> 
                </BentoCard>  -->
                <!-- ===================================================== CARD 4 — TECHNOLOGY STACK ===================================================== --> 
                <BentoCard :width="2" :height="1"> 
                    <div class="flex h-full flex-col justify-center"> 
                        <p class="text-xs uppercase tracking-widest text-gray-500" > Tech I've worked with </p> 
                        <div class="mt-3 flex flex-wrap gap-2"> 
                            <span class="tech-badge"><Icon icon="fa6-brands:laravel" class="h-6 w-6" /></span>  
                            <span class="tech-badge"><Icon icon="fa6-brands:php" class="h-6 w-6" /></span> 
                            <span class="tech-badge"><Icon icon="fa6-brands:vuejs" class="h-6 w-6" /></span> 
                            <span class="tech-badge"><Icon icon="bi:typescript" class="h-6 w-6" /></span> 
                            <span class="tech-badge"><Icon icon="fa6-brands:css3-alt" class="h-6 w-6" /></span>
                            <span class="tech-badge"><Icon icon="bi:javascript" class="h-6 w-6" /></span>
                            <span class="tech-badge"><Icon icon="flowbite:html-solid" class="h-6 w-6" /></span>
                            <span class="tech-badge"><Icon icon="fa6-brands:flutter" class="h-6 w-6" /></span>
                            <span class="tech-badge"><Icon icon="bxl:firebase" class="h-6 w-6" /></span>
                            <span class="tech-badge"><Icon icon="bxl:supabase" class="h-6 w-6" /></span>
                            <span class="tech-badge"><Icon icon="fluent:code-vb-16-regular" class="h-6 w-6" /></span>  
                            <span class="tech-badge"><Icon icon="fa6-brands:wordpress" class="h-6 w-6" /></span>
                            <span class="tech-badge"><Icon icon="fa6-brands:elementor" class="h-6 w-6" /></span>
                            <span class="tech-badge"><Icon icon="fa6-brands:github" class="h-6 w-6" /></span>
                            
                        </div> 
                    </div> 
                </BentoCard> 
                <BentoCard :width="2" :height="1">
                    <div class="flex h-full flex-col justify-between">
                
                        <!-- Heading -->
                        <div>
                            <p class="text-sm font-bold uppercase tracking-widest text-gray-400">
                                Let's Connect
                            </p>
                
                            <h2 class="mt-2 text-xl font-bold text-white">
                                Interested in working together?
                            </h2>
                        </div>
                
                        <!-- Main actions -->
                        <div class="mt-6 flex flex-wrap gap-3"> 
                            <a href="#projects" class="rounded-lg bg-orange-400 px-4 py-2 text-sm font-semibold text-black no-underline transition hover:bg-orange-300" > 
                                View Projects 
                            </a> 
                            <a href="#contact" class="rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-white no-underline transition hover:bg-white/10" > 
                                Contact Me 
                            </a> 
                        </div> 
                    </div>
                </BentoCard>

                <BentoCard :width="2" :height="1">
                        <div class="flex h-full flex-col">
                
                            <!-- Header -->
                            <div>
                                <p class="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                                    Let's Connect
                                </p>
                
                                <h2 class="mt-2 text-2xl font-bold tracking-tight text-white">
                                    Interested in working together?
                                </h2>
                
                                <p class="mt-1 text-sm text-gray-400">
                                    Let's connect and discuss opportunities or projects.
                                </p>
                            </div>
                
                            <!-- Main Actions -->
                            <div class="mt-auto pt-6 flex flex-wrap gap-3">
                                <a
                                    href="#projects"
                                    class="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-bold text-orange-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-black hover:bg-orange-400"
                                >
                                    <span>View Projects</span>
                                    <Icon icon="lucide:arrow-up-right" class="h-4 w-4"/>
                                </a>
                
                                <a href="#contact"
                                    class="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
                                >
                                    <span>Contact Me</span>
                                    <Icon icon="lucide:mail" class="h-4 w-4" />
                                </a>
                            </div>
                
                            <!-- Social Links -->
                            <!-- <div
                                class="mt-5 flex items-center gap-5
                                       border-t border-white/10 pt-4"
                            >
                
                                <a
                                    href="https://github.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="group inline-flex items-center gap-2
                                           text-xs text-gray-400 transition-colors
                                           hover:text-white"
                                    aria-label="GitHub"
                                >
                                    <Icon
                                        icon="simple-icons:github"
                                        class="h-4 w-4 transition-transform duration-300
                                               group-hover:scale-110"
                                    />
                
                                    <span>GitHub</span>
                                </a>
                
                                <a
                                    href="https://www.linkedin.com/in/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="group inline-flex items-center gap-2
                                           text-xs text-gray-400 transition-colors
                                           hover:text-white"
                                    aria-label="LinkedIn"
                                >
                                    <Icon
                                        icon="simple-icons:linkedin"
                                        class="h-4 w-4 transition-transform duration-300
                                               group-hover:scale-110"
                                    />
                
                                    <span>LinkedIn</span>
                                </a>
                
                                <a
                                    href="mailto:your@email.com"
                                    class="group inline-flex items-center gap-2
                                           text-xs text-gray-400 transition-colors
                                           hover:text-white"
                                    aria-label="Email"
                                >
                                    <Icon
                                        icon="lucide:mail"
                                        class="h-4 w-4 transition-transform duration-300
                                               group-hover:scale-110"
                                    />
                
                                    <span>Email</span>
                                </a>
                
                            </div> -->
                
                        </div>
                    </BentoCard>
                
                <!-- ===================================================== CARD 5 — FEATURED PROJECT ===================================================== --> 
                 <!-- <BentoCard :width="3" :height="2"> 
                    <div class="flex h-full flex-col justify-between"> 
                        <div> 
                            <div class="flex items-center justify-between"> 
                                <p class="text-xs uppercase tracking-widest text-gray-500" > Featured Project </p> 
                                <span class="rounded-full border border-orange-400/20 bg-orange-400/10 px-2 py-1 text-xs text-orange-400" > Capstone </span> 
                            </div> 
                            <h2 class="mt-3 text-2xl font-bold text-white" > 
                                Pharma-Clinic 
                                <span class="text-orange-400"> Management System </span> 
                            </h2> 
                            <p class="mt-3 max-w-xl text-sm leading-relaxed text-gray-400" > 
                                A system designed to manage pharmacy inventory, medicines, suppliers, orders and clinic-related workflows. 
                            </p> 
                        </div> 
                        <div class="flex items-center justify-between"> 
                            <div class="flex flex-wrap gap-2"> 
                                <span class="tech-badge"> Laravel </span> 
                                <span class="tech-badge"> MySQL </span> 
                                <span class="tech-badge"> VB.NET </span> 
                            </div> 
                            <a href="#projects" class="text-sm font-semibold text-orange-400 no-underline transition hover:text-orange-300" > 
                                View → 
                            </a> 
                        </div> 
                    </div> 
                </BentoCard>   -->
                <!-- ===================================================== CARD 6 — OJT / EXPERIENCE ===================================================== --> 
                 <!-- <BentoCard :width="1" :height="2"> 
                    <div class="flex h-full flex-col justify-between"> 
                        <div> 
                            <p class="text-xs uppercase tracking-widest text-gray-500" > Experience </p> 
                            <div class="mt-4 h-10 w-10 rounded-lg bg-white/5 p-2 text-center" > 
                                <span class="text-sm text-orange-400"> MIS </span> 
                            </div> 
                            <h3 class="mt-4 text-lg font-bold text-white" > FIBECO </h3> 
                            <p class="mt-1 text-xs text-gray-500"> MIS Section </p> 
                            <p class="mt-4 text-xs leading-relaxed text-gray-400" > 
                                Worked on a client billing inquiry web application using Laravel and Vue.js. 
                            </p> 
                        </div> 
                        <a href="#experience" class="text-sm font-semibold text-orange-400 no-underline transition hover:text-orange-300" > 
                            Experience → 
                        </a> 
                    </div> 
                </BentoCard>  -->
            </BentoGrid>
        </div>
    </section>
</template>
<style scoped>
.typing-cursor {
  display: inline-block;
  margin-left: 0.15em;
  /*color: #a78bfa;*/
  font-weight: 400;
  animation: cursor-blink 0.8s step-end infinite;
}

.tech-badge { 
    display: inline-flex; 
    align-items: center; 
    border: 1px solid rgba(255, 255, 255, 0.08); 
    border-radius: 0.5rem; 
    background: rgba(255, 255, 255, 0.04); 
    padding: 0.6rem; 
    /*font-size: 0.7rem; */
    color: rgba(255, 255, 255, 0.65); 
    transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease; 
} 
.tech-badge:hover { 
    border-color: rgba(251, 146, 60, 0.3); 
    background: rgba(251, 146, 60, 0.08); 
    color: rgb(251, 146, 60); 
} 

@keyframes cursor-blink {
  50% {
    opacity: 0;
  }
}
</style>