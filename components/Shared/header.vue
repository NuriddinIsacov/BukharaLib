<template>
  <div
    class="fixed top-0 left-0 h-[10%] bg-transparent w-full flex items-center justify-between px-35 z-50"
  >
    <NuxtLink to="/">
      <h4 class="font-bold text-3xl capitalize">Bukhara library</h4>
    </NuxtLink>

    <div>
      <ul class="flex items-center gap-6">
        <li
          class="transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.2)]"
         
        >
          <NuxtLink to="/news">Yangiliklar</NuxtLink>
        </li>
        <li
          class="transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.2)]"
        >
          <NuxtLink to="/libs">Kutubxonalar</NuxtLink>
        </li>
        <li
          class="transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.2)]"
        >
          <NuxtLink to="/places">Qadamjolar</NuxtLink>
        </li>
        <li
          class="transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.2)]"
        >
          <NuxtLink to="/celebrities">Mashhur shaxslar</NuxtLink>
        </li>
        <li
          class="transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.2)]"
        >
          <NuxtLink to="/facts">Qiziqarli faktlar</NuxtLink>
        </li>
        <li
          class="transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.2)]"
        >
          <NuxtLink to="/contact">Bog'lanish</NuxtLink>
        </li>
      </ul>
    </div>
    <!-- <SharedColoreMode /> -->
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
console.log(route);

</script>

<style scoped></style>
