<template>
  <div class="library-card">
    <img :src="library.image" alt="Library image" class="library-image" />

    <div class="library-info">
      <h2 class="library-name">{{ library.name }}</h2>
      <p><strong>Manzil:</strong> {{ library.address }}</p>
      <p><strong>Ish vaqti:</strong> {{ library.working_hours }}</p>
      <p>
        <strong>Dam olish kunlari:</strong>
        <span v-for="(day, index) in library.days_off" :key="index">{{ day }}</span>
      </p>
    </div>

    <div class="map-wrapper">
      <iframe
        :src="library.location"
        width="100%"
        height="350"
        style="border:0;"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  library: {
    id: number
    name: string
    address: string
    working_hours: string
    days_off: string[]
    image: string
    location: string
  }
}>()
</script>

<style scoped>
.library-card {
  max-width: 900px;
  margin: auto;
  margin-top: 100px;
  padding: 20px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.library-image {
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
  max-height: 300px;
}
.library-info {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.library-name {
  font-size: 1.5rem;
  font-weight: bold;
}
.map-wrapper {
  border-radius: 12px;
  overflow: hidden;
}
</style>
