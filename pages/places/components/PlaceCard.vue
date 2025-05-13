<template>
  <div class="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
    <NuxtImg
      :src="place.images[0]"
      alt="place.name"
      class="h-48 w-full object-cover"
    />
    <div class="p-4 flex-1 flex flex-col">
      <h2 class="text-xl font-semibold mb-2">{{ place.name }}</h2>
      <p class="text-gray-600 flex-1 line-clamp-3">{{ place.description }}</p>
      <NuxtLink
        :to="`/places/${place.id}`"
        class="mt-4 inline-block text-[#e0903b] hover:underline self-start"
      >
        {{t('more')}} →
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// props
const props = defineProps({
  place: {
    type: Object,
    required: true,
  },
});

const {t} = useI18n()
</script>
