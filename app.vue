<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
document.title = "Bukhara Library";

onMounted(() => {
  window.history.scrollRestoration = "manual";
});
</script>
