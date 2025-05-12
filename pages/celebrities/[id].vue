<template>
  <UContainer class="py-10">
    <UCard class="p-6 rounded-2xl shadow">
      <div class="flex flex-col lg:flex-row gap-6">
        <NuxtImg
          :src="scholar?.image"
          alt="scholar.name"
          class="w-full lg:w-1/3 h-64 object-cover rounded-md"
        />
        <div class="flex-1 space-y-4">
          <h1 class="text-2xl font-bold">{{ scholar?.name }}</h1>
          <section>
            <h2 class="text-xl font-semibold">Bolaligi</h2>
            <p class="text-gray-700">{{ scholar?.childhood }}</p>
          </section>
          <section>
            <h2 class="text-xl font-semibold">Hayoti</h2>
            <p class="text-gray-700">{{ scholar?.info }}</p>
          </section>
          <section>
            <h2 class="text-xl font-semibold">Faoliyati</h2>
            <p class="text-gray-700">{{ scholar?.activity }}</p>
          </section>
          <section>
            <h2 class="text-xl font-semibold">Vafoti</h2>
            <p class="text-gray-700">{{ scholar?.death }}</p>
          </section>
        </div>
      </div>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { celebrities } from "~/constants/data";

const route = useRoute();
const id = Number(route.params.id);
const scholar = celebrities.find((s) => s.id === id);
if (!scholar) {
  const router = useRouter();
  router.replace("/scholars");
}
</script>
