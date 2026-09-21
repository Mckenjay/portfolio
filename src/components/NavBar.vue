<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const activeSection = ref('home');

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact'},
];

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  activeSection.value = id;
  isMenuOpen.value = false;
}

const updateActiveSection = () => {
  const navBarHeight = 56;
  const scrollPosition = window.scrollY + navBarHeight + 100;

  for (const item of navItems) {
    const section = document.getElementById(item.id);

    if (!section) continue;

    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      activeSection.value = item.id;
      break;
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection);
  updateActiveSection();
})

onUnmounted(() => { window.removeEventListener('scroll', updateActiveSection) })

</script>
<template>
    <nav class="sticky top-0 z-50 w-full h-14 p-4 backdrop-blur-md">
        <div class="md:flex gap-8 justify-center mx-auto h-14 max-w-7xl items-center px-4 md:px-8">
            <a href="#home" class="text-sm font-bold text-white no-underline" @click.prevent="scrollToSection('home')" > Ted Bryan </a>

            <div class="nav-links hidden gap-md-8 items-center md:flex">
                <a 
                    v-for="item in navItems"
                    :key="item.id"
                    :href="`#${item.id}`"
                    class="relative rounded-lg px-3 py-2 text-sm no-underline transition-all duration-200"
                    :class="activeSection === item.id ? 'text-gray-400' : 'text-gray-600 hover:text-gray-400'"
                    @click.prevent="scrollToSection(item.id)"
                >
                    {{ item.name }}
                </a>
            </div>
        </div>
    </nav>
    <div class="fixed right-4 top-1/2 z-50 flex -translate-y-1/2 flex-col items-end gap-4 md:hidden" aria-label="Section navigation" > 
        <a 
            v-for="item in navItems" 
            :key="item.id" 
            :href="`#${item.id}`" 
            class="group relative flex h-5 w-5 items-center justify-center" 
            :aria-label="`Go to ${item.name}`" 
            :aria-current=" activeSection === item.id ? 'page' : undefined " 
            @click.prevent="scrollToSection(item.id)" 
        > 
            <span class="pointer-events-none absolute right-7 whitespace-nowrap rounded-md border border-white/10 bg-[#0a0a12]/90 px-3 py-1.5 text-xs text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 translate-x-2" > 
                {{ item.name }} </span> <!-- Dot --> 
            <span class="block rounded-full border transition-all duration-300" 
                :class=" activeSection === item.id ? 'h-3 w-3 border-white bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)]' : 'h-2 w-2 border-gray-500 bg-gray-500/60 group-hover:h-3 group-hover:w-3 group-hover:border-white group-hover:bg-white' " >
            </span> 
        </a> 
    </div>
</template>
<style scoped></style>