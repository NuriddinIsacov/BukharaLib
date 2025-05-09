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
    <div class="grid gap-4">
      <NuxtLink
        v-for="kutubxona in libs"
        :key="kutubxona.id"
        :to="`/libs/${kutubxona?.id}`"
        class="flex items-center justify-center px-6 bg-white/10 rounded-xl overflow-hidden shadow-[0px_4px_16px_rgba(17,17,26,0.05),0px_8px_32px_rgba(17,17,26,0.05)] transform transition duration-300 hover:scale-102 hover:shadow-lg"
      >
        <!-- Chap tomon: Rasm -->
        <div class="w-1/3">
          <img
            src=""
            alt="Kutubxona rasmi"
            class="h-full w-full object-cover"
          />
        </div>

        <!-- O'ng tomon: Ma'lumotlar -->
        <div class="w-2/3 p-4">
          <h2 class="text-xl font-bold mb-2 text-gray-800 line-clamp-1">
            {{ kutubxona.nomi }}
          </h2>
          <p class="text-gray-600 mb-1">
            <strong>📍 Manzil:</strong> {{ kutubxona.manzil }}
          </p>
          <p class="text-gray-600 mb-1">
            <strong>🕒 Ish vaqti:</strong> {{ kutubxona.ish_vaqti }}
          </p>
          <p class="text-gray-600">
            <strong>❌ Dam olish kunlari:</strong>
            {{ kutubxona.dam_olish_kunlari.join(", ") }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { libs } from "~/constants/data";

const { t } = useI18n();
</script>

<style scoped></style>
