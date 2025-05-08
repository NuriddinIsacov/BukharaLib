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

    <div class="flex items-center gap-20">
      <ul
        class="flex items-center gap-6"
        :class="{
          'text-white': route.path.startsWith('/news') && scrollY < 200,
        }"
      >
        <li
          class="transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.2)]"
        >
          <NuxtLink to="/news">{{ t("news") }}</NuxtLink>
        </li>
        <li
          class="transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.2)]"
        >
          <NuxtLink to="/libs">{{ t("libs") }}</NuxtLink>
        </li>
        <li
          class="transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.2)]"
        >
          <NuxtLink to="/places">{{ t("places") }}</NuxtLink>
        </li>
        <li
          class="transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.2)]"
        >
          <NuxtLink to="/celebrities">{{ t("celebrities") }}</NuxtLink>
        </li>
        <li
          class="transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.2)]"
        >
          <NuxtLink to="/facts">{{ t("facts") }}</NuxtLink>
        </li>
        <li
          class="transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.2)]"
        >
          <NuxtLink to="/contact">{{ t("contact") }}</NuxtLink>
        </li>
      </ul>
      <div class="flex items-center justify-center gap-4">
        <SwitchLocalePathLink locale="uz"
          ><NuxtImg src="/images/header/flags/uzbek.svg"
        /></SwitchLocalePathLink>
        <SwitchLocalePathLink locale="ru"
          ><NuxtImg src="/images/header/flags/russian.svg"
        /></SwitchLocalePathLink>
        <SwitchLocalePathLink locale="en"
          ><NuxtImg src="/images/header/flags/english.svg"
        /></SwitchLocalePathLink>
      </div>
    </div>
    <!-- <SharedColoreMode /> -->
  </header>
</template>

<script setup lang="ts">
import { useI18n } from "#imports";

const route = useRoute();

const { t } = useI18n();

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
