<template>
  <section id="hero" class="relative w-full h-full">
    <div
      class="absolute inset-0 bg-[url(/images/places/bg.jpg)] bg-cover bg-no-repeat filter blur-sm z-0"
    ></div>

    <div class="container mx-auto px-6 py-32 relative z-40">
      <h1 class="text-3xl text-center font-bold mb-6">{{ t("places") }}</h1>
      <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <PlaceCard v-for="place in places" :key="place.id" :place="place" />
      </div>
    </div>
  </section>
</template>

<script setup>
import PlaceCard from "./components/PlaceCard.vue";
import { places } from "/constants/data";

const { t } = useI18n();
</script>
