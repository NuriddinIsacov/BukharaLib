<template>
  <div class="min-h-screen flex flex-col">
    <div
      v-show="showButton"
      class="fixed bottom-8 right-8 flex items-center justify-center w-12 h-12 bg-[#e0903b] text-white rounded-full shadow-lg hover:bg-[#e0903b]/60 transition-opacity duration-300 opacity-80 hover:opacity-100 z-[9999]"
    >
      <UButton
        @click="scrollToTop"
        color="neutral"
        class="rounded-full font-bold bg-[#e0903b] w-full h-full text-white hover:bg-[#e0903b]/60 opacity-80 hover:opacity-100 flex items-center justify-center"
        ><UIcon name="i-lucide-arrow-up" class="size-5"
      /></UButton>
    </div>
    <SharedHeader />
    <main class="flex-1 relative">
      <slot />
    </main>
    <SharedFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const showButton = ref(false);
const SCROLL_THRESHOLD = 200; // px bo‘yicha qancha scrolldan so‘ng ko‘rsatilsin

function onScroll() {
  showButton.value = window.scrollY > SCROLL_THRESHOLD;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<style scoped></style>
