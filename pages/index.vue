<template>
  <div class="flex flex-col">
    <section id="hero" class="relative w-full h-screen">
      <div
        class="absolute inset-0 bg-[url(/images/main/hero-bg.webp)] bg-cover bg-no-repeat filter blur-sm"
      ></div>
      <div
        class="relative z-10 flex items-center justify-center h-full flex-col gap-3"
      >
        <h1 class="text-white text-4xl">
          Buxoro kutubxonalarining boy merosiga sayohat
        </h1>
        <UButton
          role="link"
          size="xl"
          color="neutral"
          variant="outline"
          class="group"
          @click="
            () => {
              router.push('/libs');
            }
          "
        >
          Kutubxonalar
          <UIcon
            name="i-lucide-arrow-right"
            class="size-5 ml-2 transform transition-transform duration-400 group-hover:translate-x-1"
          />
        </UButton>
      </div>
    </section>
    <section
      id="libs-teaser"
      class="flex flex-col items-center justify-center py-10 pt-20 bg-gradient-to-r from-[#e9c6a0] to-white"
    >
      <h1 class="font-bold text-3xl capitalize mb-10">Kutubxonalar</h1>
      <UCarousel
        loop
        auto-scroll
        :autoplay="{ delay: 2000 }"
        v-slot="{ item: lib }"
        :items="firstFour"
        :ui="{
          item: 'basis-1/3 flex items-stretch',
          container: 'items-stretch',
        }"
        class="w-full max-w-5xl mx-auto group py-4"
      >
        <div
          class="p-4 my-10 bg-white/30 backdrop-blur-md rounded flex flex-col h-full transform transition duration-200 hover:shadow-[0px_4px_16px_rgba(17,17,26,0.05),0px_8px_32px_rgba(17,17,26,0.05)]"
        >
          <h2 class="text-xl font-bold mb-2">{{ lib.nomi }}</h2>
          <p>📍 {{ lib.manzil }}</p>
          <p>🕒 {{ lib.ish_vaqti }}</p>
          <p>❌ Dam olish: {{ lib.dam_olish_kunlari.join(", ") }}</p>
        </div>
      </UCarousel>
      <UButton
        role="link"
        size="xl"
        color="neutral"
        variant="outline"
        class="group mt-10"
        @click="
          () => {
            router.push('/libs');
          }
        "
      >
        Batafsil
        <UIcon
          name="i-lucide-arrow-right"
          class="size-5 ml-2 transform transition-transform duration-400 group-hover:translate-x-1"
        />
      </UButton>
    </section>

    <section
      id="news-teaser"
      class="flex flex-col items-center justify-center py-10 pt-20 bg-gradient-to-r from-[#e9c6a0] to-white"
    >
      <div class="max-w-[1024px] mx-auto flex flex-col items-center">
        <h1 class="font-bold text-3xl capitalize mb-10 text-center">
          Yangiliklar
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="item in firstThreeNews"
            :key="item.id"
            class="bg-white/80 backdrop-blur-sm rounded-lg p-6 flex flex-col shadow-[0px_4px_16px_rgba(17,17,26,0.05),0px_8px_32px_rgba(17,17,26,0.05)]"
          >
            <!-- Sarlavha -->
            <h2 class="text-2xl font-bold text-gray-800 mb-2">
              {{ item.title }}
            </h2>

            <!-- Sana -->
            <p class="text-sm text-gray-500 mb-4">
              {{ item.date }}
            </p>

            <!-- Tavsif -->
            <p class="text-gray-700 flex-1 mb-6">
              {{ item.description }}
            </p>

            <!-- Qo‘shimcha tugma yoki link -->
            <NuxtLink
              :to="`/news/${item.id}`"
              class="mt-auto inline-block text-[#e0903b] hover:underline font-medium"
            >
              Batafsil o‘qish →
            </NuxtLink>
          </div>
        </div>
        <UButton
          role="link"
          size="xl"
          color="neutral"
          variant="outline"
          class="group mt-10 align-middle"
          @click="
            () => {
              router.push('/news');
            }
          "
        >
          Ko'proq ko'rish
          <UIcon
            name="i-lucide-arrow-right"
            class="size-5 ml-2 transform transition-transform duration-400 group-hover:translate-x-1"
          />
        </UButton>
      </div>
    </section>

    <section
      id="quick-links"
      class="flex flex-col items-center justify-center py-10 pt-20 bg-gradient-to-r from-[#e9c6a0] to-white"
    >
      <div class="grid grid-cols-3 grid-rows-2 gap-10">
        <!-- 1-chi qator -->
        <NuxtLink
          to="/news"
          class="py-10 px-20 bg-white/50 rounded flex flex-col items-center justify-between gap-2 transform transition-transform duration-300 hover:-translate-y-1 hover:scale-105 shadow-[0px_4px_16px_rgba(17,17,26,0.05),0px_8px_32px_rgba(17,17,26,0.05)]"
        >
          <div class="w-32 h-32 overflow-hidden rounded">
            <NuxtImg
              src="/images/main/news_card.jpg"
              alt="image"
              class="w-full h-full object-cover"
            />
          </div>
          <h1 class="text-xl">Yangiliklar</h1>
        </NuxtLink>
        <NuxtLink
          to="/libs"
          class="py-10 px-20 bg-white/50 rounded flex flex-col items-center justify-between gap-2 transform transition-transform duration-300 hover:-translate-y-1 hover:scale-105 shadow-[0px_4px_16px_rgba(17,17,26,0.05),0px_8px_32px_rgba(17,17,26,0.05)]"
        >
          <div class="w-32 h-32 overflow-hidden rounded">
            <NuxtImg
              src="/images/main/libs_card.jpg"
              alt="image"
              class="w-full h-full object-cover"
            />
          </div>
          <h1 class="text-xl">Kutubxonalar</h1>
        </NuxtLink>
        <NuxtLink
          to="/places"
          class="py-10 px-20 bg-white/50 rounded flex flex-col items-center justify-between gap-2 transform transition-transform duration-300 hover:-translate-y-1 hover:scale-105 shadow-[0px_4px_16px_rgba(17,17,26,0.05),0px_8px_32px_rgba(17,17,26,0.05)]"
        >
          <div class="w-32 h-32 overflow-hidden rounded">
            <NuxtImg
              src="/images/main/places_card.jpg"
              alt="image"
              class="w-full h-full object-cover"
            />
          </div>
          <h1 class="text-xl">Qadamjolar</h1>
        </NuxtLink>
        <!-- 2-chi qator -->
        <NuxtLink
          to="/celebrities"
          class="py-10 px-20 bg-white/50 rounded flex flex-col items-center justify-between gap-2 transform transition-transform duration-300 hover:-translate-y-1 hover:scale-105 shadow-[0px_4px_16px_rgba(17,17,26,0.05),0px_8px_32px_rgba(17,17,26,0.05)]"
        >
          <div class="w-32 h-32 overflow-hidden rounded">
            <NuxtImg
              src="/images/main/person_card.jpg"
              alt="image"
              class="w-full h-full object-cover"
            />
          </div>
          <h1 class="text-xl">Mashhur shaxslar</h1>
        </NuxtLink>
        <NuxtLink
          to="/facts"
          class="py-10 px-20 bg-white/50 rounded flex flex-col items-center justify-between gap-2 transform transition-transform duration-300 hover:-translate-y-1 hover:scale-105 shadow-[0px_4px_16px_rgba(17,17,26,0.05),0px_8px_32px_rgba(17,17,26,0.05)]"
        >
          <div class="w-32 h-32 overflow-hidden rounded">
            <NuxtImg
              src="/images/main/facts_card.jpg"
              alt="image"
              class="w-full h-full object-cover"
            />
          </div>
          <h1 class="text-xl">Qiziqarli faktlar</h1>
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="py-10 px-20 bg-white/50 rounded flex flex-col items-center justify-between gap-2 transform transition-transform duration-300 hover:-translate-y-1 hover:scale-105 shadow-[0px_4px_16px_rgba(17,17,26,0.05),0px_8px_32px_rgba(17,17,26,0.05)]"
        >
          <div class="w-32 h-32 overflow-hidden rounded">
            <NuxtImg
              src="/images/main/contacts_card.jpg"
              alt="image"
              class="w-full h-full object-cover"
            />
          </div>
          <h1 class="text-xl">Bog'anish</h1>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { libs, news } from "../constants/data";

const router = useRouter();

const firstFour = libs.slice(0, 4);
const firstThreeNews = news.slice(0, 3);
</script>

<style scoped></style>
