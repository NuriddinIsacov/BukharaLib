<template>
  <section id="hero" class="py-20 bg-gradient-to-r from-[#e9c6a0] to-white">
    <UCarousel
      loop
      :itemsToShow="1"
      :autoplay="{ delay: 2000 }"
      v-slot="{ item: news }"
      :items="firstFour"
      :ui="{
        item: 'basis-1/1',
        container: 'items-stretch overfolow-hidden px-5',
      }"
      class="w-full max-w-5xl mx-auto group py-4"
    >
      <div
        class="p-4 my-10 bg-white/30 backdrop-blur-md rounded flex flex-col h-full transform transition duration-200 hover:shadow-[0px_4px_16px_rgba(17,17,26,0.05),0px_8px_32px_rgba(17,17,26,0.05)]"
      >
        <h2 class="text-xl font-bold mb-2">{{ news.title }}</h2>

        <p class="text-[14px] mb-8">🕒 {{ news.date }}</p>
        <p>{{ news.description }}</p>
      </div>
    </UCarousel>
  </section>
  <!-- Divider -->

  <USeparator color="primary" class="text-xl bg-gradient-to-r from-[#e9c6a0] to-white">Bukhara news</USeparator>

  <section
    id="news-list"
    class="bg-gradient-to-r from-[#e9c6a0] to-white py-20 h-auto flex flex-col items-center"
  >
    <div v-show="news.length == 0" class="grid grid-cols-4 gap-4">
      <USkeleton class="h-32 w-32 rounded-md" />
      <USkeleton class="h-32 w-32 rounded-md" />
      <USkeleton class="h-32 w-32 rounded-md" />
      <USkeleton class="h-32 w-32 rounded-md" />

      <USkeleton class="h-32 w-32 rounded-md" />
      <USkeleton class="h-32 w-32 rounded-md" />
      <USkeleton class="h-32 w-32 rounded-md" />
      <USkeleton class="h-32 w-32 rounded-md" />
    </div>

    <div class="grid grid-cols-3 gap-4 max-w-[1024px] mx-auto">
      <NuxtLink
        :to="`/news/${item.id}`"
        v-for="item in news"
        class="bg-transparent/30 backdrop-blur-md shadow-[0px_4px_16px_rgba(17,17,26,0.05),0px_8px_32px_rgba(17,17,26,0.05)] p-8 rounded"
      >
        <h2 class="text-xl line-clamp-3 font-bold mb-2">{{ item.title }}</h2>

        <p class="text-[14px] mb-8">🕒 {{ item.date }}</p>
        <p class="line-clamp-3">{{ item.description }}</p>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { news } from "~/constants/data";
const news2: any = [];
const firstFour = news.slice(0, 4);
</script>

<style scoped>
.divider {
}
</style>
