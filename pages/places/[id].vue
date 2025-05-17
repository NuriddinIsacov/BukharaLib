<template>
  <section id="hero" class="relative w-full h-full">
    <div class="container mx-auto px-6 my-32 relative bg-white">
      <NuxtLink
        to="/places"
        class="text-[#e0903b] hover:underline mb-4 inline-block"
        >← Ortga</NuxtLink
      >
      <h1 class="text-4xl font-bold mb-4">{{ place.name }}</h1>

      <!-- Image Gallery -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div v-for="(img, idx) in place.images" :key="idx">
          <NuxtImg
            :src="img"
            :alt="`${place.name} image ${idx + 1}`"
            class="rounded-lg w-full h-64 object-cover"
          />
        </div>
      </div>

      <!-- Details -->
      <div class="prose max-w-none">
        <p v-html="breakLines(place.description)"></p>
      </div>

      <!-- Additional Info -->
      <div class="mt-6 space-y-2">
        <p>
          <strong>Chipta narxi:</strong>
          {{ place.ticketInfo || "Ma'lumot yo'q" }}
        </p>
        <p><strong>Ish vaqti:</strong> {{ place.hours || "Ma'lumot yo'q " }}</p>
      </div>

      <div class="py-10 ">
        <div class="flex items-center justify-between pr-20 pb-8">
          <h1 class="text-xl font-bold">
            Eng yaqin kutubxona:
            <NuxtLink
              class="font-medium hover:underline hover:text-[#e0903b] mr-20"
              >{{ lib?.name }}</NuxtLink
            >
          </h1>
          <NuxtLink
            :to="`/libs/${lib.id}`"
            class="mt-auto inline-block text-[#e0903b] hover:underline font-medium"
          >
            Batafsil →
          </NuxtLink>
        </div>
        <div class="map-wrapper">
          <iframe
            :src="location"
            width="100%"
            height="350"
            style="border: 0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { libs, places } from "~/constants/data";

const { locale } = useI18n();
const route = useRoute();
const router = useRouter();

const place = computed(() => {
  const id = parseInt(route.params.id);
  return places.find((p) => p.id === id);
});

const lib = libs[locale.value].find((lib) => lib.id == place.value.libId);

const location = lib?.location;

if (!place.value) {
  router.replace("/places");
}

// helper to preserve line breaks
function breakLines(text) {
  return text.replace(/\r?\n/g, "<br/>");
}
</script>
