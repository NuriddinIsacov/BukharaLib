<template>
  <header
    :class="[
      'fixed top-0 h-[10%] left-0 w-full flex items-center justify-between px-35 z-50 transition-colors duration-300',
      scrolled
        ? 'bg-[#e9c6a0]/60 shadow-md backdrop-blur-md'
        : 'bg-transparent',
    ]"
  >
    <NuxtLink to="/">
      <h4
        class="font-bold text-3xl capitalize"
        :class="{
          'text-white': route.path.startsWith('/news') && scrollY < 200,
        }"
      >
        Bukhara library
      </h4>
    </NuxtLink>

    <div>
      <ul
        class="flex items-center gap-6"
        :class="{
          'text-white': route.path.startsWith('/news') && scrollY < 200,
        }"
      >
        <li
          class="transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.2)]"
        >
          <NuxtLink to="/news">Yangiliklar</NuxtLink>
        </li>
        <li
          class="transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.2)]"
        >
          <NuxtLink to="/libs">Kutubxonalar</NuxtLink>
        </li>
        <li
          class="transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.2)]"
        >
          <NuxtLink to="/places">Qadamjolar</NuxtLink>
        </li>
        <li
          class="transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.2)]"
        >
          <NuxtLink to="/celebrities">Mashhur shaxslar</NuxtLink>
        </li>
        <li
          class="transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.2)]"
        >
          <NuxtLink to="/facts">Qiziqarli faktlar</NuxtLink>
        </li>
        <li
          class="transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.2)]"
        >
          <NuxtLink to="/contact">Bog'lanish</NuxtLink>
        </li>
      </ul>
    </div>
    <!-- <SharedColoreMode /> -->
  </header>
</template>

<script setup lang="ts">
const route = useRoute();

const scrolled = ref(false);

// qancha scrolldan keyin fon o‘zgarsin:
const SCROLL_THRESHOLD = 50;
const scrollY = ref(0);

function onScroll() {
  scrolled.value = window.scrollY > SCROLL_THRESHOLD;
}

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});

function handleScroll() {
  scrollY.value = window.scrollY;
}
</script>

<style scoped></style>
