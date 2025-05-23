<template>
  <section id="hero" class="relative w-full h-full">
    <div
      class="absolute inset-0 bg-[url(/images/places/bg.jpg)] bg-cover bg-no-repeat filter blur-sm z-0"
    ></div>

    <div class="container mx-auto px-6 py-32 relative z-40">
      <h1 class="text-3xl text-center font-bold mb-6">{{ t("places") }}</h1>
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
      <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <PlaceCard v-for="place in filteredData" :key="place.id" :place="place" />
      </div>
      <div v-show="!filteredData.length">
        <Vue3Lottie :animation-data="notFound" :height="200" :width="200" />
      </div>
    </div>
  </section>
</template>

<script setup>
import PlaceCard from "./components/PlaceCard.vue";
import { places } from "/constants/data";
import notFound from "~/assets/not-found.json";

const { t } = useI18n();

const searchValue = ref();
const originalData = computed(() => places);
const filteredData = computed(() => {
  if (!searchValue.value) return originalData.value;
  return originalData.value.filter((item) =>
    item.name.toLowerCase().includes(searchValue.value.toLowerCase())
  );
});
</script>
