<template>
  <section id="hero" class="relative w-full h-screen">
    <div
      class="absolute inset-0 bg-[url(/images/libs/lib-bg.jpg)] bg-cover bg-no-repeat filter blur-sm"
    ></div>
    <div
      class="relative z-10 flex items-center h-full flex-row justify-between max-w-[1024px] mx-auto px-4 gap-6"
    >
      <h1 class="text-white text-5xl font-bold">{{ t("bukhara-libs") }}</h1>
    </div>
  </section>
  <section
    id="libs"
    class="bg-gradient-to-r from-[#e9c6a0] to-white py-20 h-auto flex flex-col items-center"
  >
    <div class="flex flex-col items-start">
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
      <div class="y-20 h-auto flex flex-col items-center">
        <div class="grid gap-4">
          <NuxtLink
            v-for="kutubxona in filteredData"
            :key="kutubxona.id"
            :to="`/libs/${kutubxona?.id}`"
            class="flex group items-center gap-8 bg-white/10 rounded-xl overflow-hidden shadow-[0px_4px_16px_rgba(17,17,26,0.05),0px_8px_32px_rgba(17,17,26,0.05)] transform transition duration-300 hover:scale-102 hover:shadow-lg px-6 py-6"
          >
            <!-- Chap tomon: Rasm -->
            <div class="">
              <NuxtImg
                :src="kutubxona.image"
                alt="Fakt rasmi"
                class="w-34 h-34 object-cover rounded-md"
              />
            </div>

            <!-- O'ng tomon: Ma'lumotlar -->
            <div class="p-4">
              <h2 class="text-xl font-bold mb-2 text-gray-800 line-clamp-1">
                {{ kutubxona.name }}
              </h2>
              <p class="text-gray-600 mb-1">
                <strong class="capitalize">📍 {{ t("address") }}:</strong>
                {{ kutubxona.address }}
              </p>
              <p class="text-gray-600 mb-1">
                <strong>🕒 {{ t("working_hours") }}:</strong>
                {{ kutubxona.working_hours }}
              </p>
              <p class="text-gray-600">
                <strong>❌ {{ t("days_off") }}:</strong>
                {{ kutubxona.days_off.join(", ") }}
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Vue3Lottie } from "vue3-lottie";
import notFound from "~/assets/not-found.json";
import { libs } from "~/constants/data";

const { t, locale } = useI18n();

const searchValue = ref();

const originalData = computed(() => libs[locale.value]);

const filteredData = computed(() => {
  if (!searchValue.value) return originalData.value;
  return originalData.value.filter((item) =>
    item.name.toLowerCase().includes(searchValue.value.toLowerCase())
  );
});
const data = libs[locale.value];
</script>

<style scoped></style>
