<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
document.title = "Travel to Bukhara";

onMounted(() => {
  window.history.scrollRestoration = "manual";
});
</script>
