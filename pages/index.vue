<template>
  <div>
    <section class="relative w-full h-screen">
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
          @click="() => router.push('/libs')"
        >
          Kutubxonalar
          <UIcon
            name="i-lucide-arrow-right"
            class="size-5 ml-2 transform transition-transform duration-400 group-hover:translate-x-1"
          />
        </UButton>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
</script>

<style scoped></style>
