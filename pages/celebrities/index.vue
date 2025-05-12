<template>
  <section
    id="hero"
    class="relative w-full bg-[url(/images/celebrities/bg.jpg)] bg-cover bg-no-repeat backdrop-blur-md"
  >
    <!-- <div
      class="absolute inset-0 bg-[url(/images/celebrities/bg.jpg)] bg-cover bg-no-repeat filter blur-sm"
    ></div> -->
    <UContainer class="py-32 z-40">
      <h1 class="text-3xl text-white font-bold text-center mb-6">{{ t('celebrities') }}</h1>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <UCard
          v-for="scholar in celebrities"
          :key="scholar.id"
          class="p-4 rounded-2xl bg-white/85 shadow hover:shadow-lg transition"
        >
          <NuxtImg
            :src="scholar.image"
            alt="scholar.name"
            class="w-full h-32 object-cover rounded-md mb-4"
          />
          <h2 class="text-lg font-semibold mb-2">{{ scholar.name }}</h2>
          <p class="text-sm text-gray-600 line-clamp-3 mb-4">
            {{ scholar.childhood }}
          </p>
          <NuxtLink :to="`/celebrities/${scholar.id}`">
            <UButton size="sm" variant="outline">Batafsil</UButton>
          </NuxtLink>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { celebrities } from "~/constants/data";

const { t } = useI18n();
</script>
