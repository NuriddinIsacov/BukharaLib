<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
document.title = "Bukhara Library";

const route = useRoute();

console.log(route);
</script>
