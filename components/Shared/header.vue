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
          'text-white':
            (route.path.includes('/news') ||
              route.path.includes('/libs') ||
              route.path.includes('/celebrities') ||
              route.path.includes('/facts')) &&
            scrollY < 200,
        }"
      >
        Travel to Bukhara
      </h4>
    </NuxtLink>

    <div class="flex items-center gap-20">
      <ul
        class="flex items-center gap-6"
        :class="{
          'text-white':
            (route.path.includes('/news') ||
              route.path.includes('/libs') ||
              route.path.includes('/celebrities') ||
              route.path.includes('/facts')) &&
            scrollY < 200,
        }"
      >
        <li
          class="transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.2)]"
          :class="{
            '-translate-y-2 shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.2)]':
              route.path.includes('/news'),
          }"
        >
          <NuxtLink to="/news">{{ t("news") }}</NuxtLink>
        </li>
        <li
          class="transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.2)]"
          :class="{
            '-translate-y-2 shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.2)]':
              route.path.includes('/libs'),
          }"
        >
          <NuxtLink to="/libs">{{ t("libs") }}</NuxtLink>
        </li>
        <li
          class="transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.2)]"
          :class="{
            '-translate-y-2 shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.2)]':
              route.path.includes('/places'),
          }"
        >
          <NuxtLink to="/places">{{ t("places") }}</NuxtLink>
        </li>
        <li
          class="transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.2)]"
          :class="{
            '-translate-y-2 shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.2)]':
              route.path.includes('/celebrities'),
          }"
        >
          <NuxtLink to="/celebrities">{{ t("celebrities") }}</NuxtLink>
        </li>
        <li
          class="transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.2)]"
          :class="{
            '-translate-y-2 shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.2)]':
              route.path.includes('/facts'),
          }"
        >
          <NuxtLink to="/facts">{{ t("facts") }}</NuxtLink>
        </li>
        <li
          class="transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.2)]"
          :class="{
            '-translate-y-2 shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.2)]':
              route.path.includes('/contact'),
          }"
        >
          <NuxtLink to="/contact">{{ t("contact") }}</NuxtLink>
        </li>
      </ul>

      <div>
        <UButton @click="setLocale('uz')" color="neutral" variant="ghost" :class="{'bg-white/50': locale === 'uz'}">
          <NuxtImg width="25" src="/images/header/flags/uzbek.svg" />
        </UButton>
        <UButton @click="setLocale('ru')" color="neutral" variant="ghost" :class="{'bg-white/50': locale === 'ru'}">
          <NuxtImg width="25" src="/images/header/flags/russian.svg" />
        </UButton>
        <UButton @click="setLocale('en')" color="neutral" variant="ghost" :class="{'bg-white/50': locale === 'en'}">
          <NuxtImg width="25" src="/images/header/flags/english.svg" />
        </UButton>
      </div>
    </div>
    <!-- <SharedColoreMode /> -->
  </header>
</template>

<script setup lang="ts">
import { useI18n } from "#imports";
import type { DropdownMenuItem } from "@nuxt/ui";

const route = useRoute();
const { t, locale, setLocale } = useI18n();


const open = ref(false);
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

const items: DropdownMenuItem[] = [
  { label: "O'zbekcha", slot: "uz" },
  { label: "Русский", slot: "ru" },
  { label: "English", slot: "en" },
];
</script>

<style scoped></style>
