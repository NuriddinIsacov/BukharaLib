<template>
    <div
        class="absolute inset-0 bg-[url(/images/news/hero-bg2.webp)] bg-cover bg-no-repeat filter blur-sm"
      ></div>
  <div class="py-20 h-full w-full relative">
    <div class="mt-20 max-w-[1024px] mx-auto">
      
      <div class="p-20 bg-white/50 rounded-2xl">
          <p class="text-[14px]">
            {{ data?.date }}
          </p>
        <h1 class="text-3xl font-bold">{{ data?.title }}</h1>

        <p class="mt-10">{{ data?.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { news } from "~/constants/data";

const route = useRoute();

const data = news.find((n) => n.id.toString() == route.params.id);
</script>

<style scoped></style>
