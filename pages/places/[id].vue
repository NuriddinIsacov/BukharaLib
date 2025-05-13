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
    </div>
  </section>
</template>

<script setup>
import { places } from "~/constants/data";

const route = useRoute();
const router = useRouter();

const place = computed(() => {
  const id = parseInt(route.params.id);
  return places.find((p) => p.id === id);
});

if (!place.value) {
  router.replace("/places");
}

// helper to preserve line breaks
function breakLines(text) {
  return text.replace(/\r?\n/g, "<br/>");
}
</script>
