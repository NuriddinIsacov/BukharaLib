<template>
  <section class="bg-white py-32">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-3xl font-semibold text-center text-gray-800 mb-8">
        Biz bilan bog'laning
      </h2>
      <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        <!-- Kontakt Formasi -->
        <div class="space-y-6">
          <form @submit.prevent="submitForm" class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700"
                >Ismingiz</label
              >
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700"
                >Elektron pochta</label
              >
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                for="message"
                class="block text-sm font-medium text-gray-700"
                >Xabar</label
              >
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="4"
                class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>
            <div>
              <UButton
                type="submit"
                class="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Xabarni yuborish
              </UButton>
            </div>
          </form>
        </div>
        <!-- Kontakt Ma'lumotlari -->
        <div class="mt-8 lg:mt-0">
          <div class="space-y-6">
            <div class="flex items-center space-x-4">
              <PhoneIcon class="h-6 w-6 text-indigo-600" />
              <span class="text-lg font-medium text-gray-800"
                >+998 71 123 45 67</span
              >
            </div>
            <div class="flex items-center space-x-4">
              <MailIcon class="h-6 w-6 text-indigo-600" />
              <span class="text-lg font-medium text-gray-800"
                >info@kutubxona.uz</span
              >
            </div>
            <div class="flex items-center space-x-4">
              <LocationMarkerIcon class="h-6 w-6 text-indigo-600" />
              <span class="text-lg font-medium text-gray-800"
                >Buxoro, Ibn Sino MFY, Yangi Hayot ko‘chasi, 100-uy</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const {t} = useI18n()
const toast = useToast()
const form = ref({
  name: "",
  email: "",
  message: "",
});

const submitForm = () => {
  showToast()
};

function showToast() {
  toast.add({
    title: 'The message was sent successfully!',
    icon: 'i-lucide-check',
    close: {
      color: 'primary',
      variant: 'outline',
      class: 'rounded-full'
    }
  })
}
</script>

<style scoped></style>
