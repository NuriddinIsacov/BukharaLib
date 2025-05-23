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
      <UInput
        icon="i-lucide-search"
        size="lg"
        variant="outline"
        color="neutral"
        placeholder="Search..."
        v-model="searchValue"
        class="bg-white/30 mb-15 [&_input]:focus:ring-0 rounded-full"
        :ui="{ root: 'rounded-full', leadingIcon: 'rounded-full' }"
      />
       <div v-show="!filteredData.length">
        <Vue3Lottie :animation-data="notFound" :height="200" :width="200" />
      </div>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <UCard
          v-for="scholar in filteredData"
          :key="scholar.id"
          class="p-4 rounded-2xl bg-white/85 shadow hover:shadow-lg transition"
        >
          <NuxtImg
            :src="scholar.image"
            alt="scholar.name"
            class="w-full h-52 object-cover rounded-md mb-4"
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
import notFound from "~/assets/not-found.json";

const searchValue = ref();

const originalData = computed(() => celebrities);

const filteredData = computed(() => {
  if (!searchValue.value) return originalData.value;
  return originalData.value.filter((item) =>
    item.name?.toLowerCase().includes(searchValue.value.toLowerCase())
  );
});
const { t } = useI18n();
</script>
