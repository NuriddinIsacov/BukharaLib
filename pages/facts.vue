<template>
  <section id="hero" class="relative w-full h-screen">
    <div
      class="absolute inset-0 bg-[url(/images/facts/facts-bg.webp)] bg-cover bg-no-repeat filter blur-sm"
    ></div>
    <div
      class="relative z-10 flex items-center h-full flex-row justify-between max-w-[1024px] mx-auto px-4 gap-6"
    >
      <h1 class="text-white text-5xl font-bold">{{ t("facts-title") }}</h1>
    </div>
  </section>
  <section
    id="libs"
    class="bg-gradient-to-r from-[#e9c6a0] to-white py-20 h-auto flex flex-col items-center"
  >
  <h1 class="text-xl font-bold">{{ t('facts') }}</h1>
    <div class="divide-y divide-gray-300">
      <div
        v-for="fact in data"
        :key="fact.id"
        class="group relative flex items-start gap-4 px-6 py-12"
      >
        <NuxtImg
          :src="fact.image"
          alt="Fakt rasmi"
          class="w-34 h-34 object-cover rounded-md group-hover:scale-110 transition-transform duration-300 ease-in-out"
        />
        <div class="flex-1">
          <h3
            class="text-lg font-semibold text-gray-800 mb-1 group-hover:text-indigo-600 transition-colors duration-300"
          >
            {{ fact.title }}
          </h3>
          <p
            class="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300"
          >
            {{ fact.description }}
          </p>
        </div>
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { facts } from "~/constants/data";

const { t, locale } = useI18n();

const data = facts[locale.value]
</script>

<style scoped></style>
