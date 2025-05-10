<template>
  <div class="page-wrapper pt-20 bg-gradient-to-b from-[#b6997a] to-white">
    <LibraryCard :library="library" />
  </div>
</template>

<script setup lang="ts">
import { libs } from '~/constants/data'
import LibraryCard from './components/LibraryCard.vue'
// Mock data - bu joyda siz API orqali ham olib kelishingiz mumkin
const route = useRoute()
const id = Number(route.params.id)
const {locale} = useI18n()


const library = libs[locale.value].find((lib) => lib.id === id)

if (!library) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Kutubxona topilmadi',
  })
}
</script>

<style scoped>
.page-wrapper {
  padding: 24px;
}
</style>
