<template>
  <footer class="bg-[#e9c6a0]/90 shadow-md z-40 backdrop-blur-sm">
    <div class="container mx-auto px-4 py-8">
      <div class="flex items-center justify-between">
        <!-- Logo and About -->
        <div class="space-y-4">
          <h3 class="text-xl font-bold text-gray-800">Bukhara Library</h3>
          <p class="text-sm text-gray-600">
            {{ t('subtitle-footer') }}
          </p>
          <div class="flex space-x-4">
            <UButton
              icon="i-lucide-facebook"
              color="info"
              variant="ghost"
              aria-label="Facebook"
            />
            <UButton
              icon="i-lucide-instagram"
              color="error"
              variant="ghost"
              aria-label="Instagram"
            />
            <UButton
              icon="i-lucide-twitter"
              color="secondary"
              variant="ghost"
              aria-label="Twitter"
            />
            <UButton
              icon="i-lucide-youtube"
              color="error"
              variant="ghost"
              aria-label="YouTube"
            />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-8">
          <!-- Quick Links -->
          <div class="space-y-4">
            <h4 class="font-medium text-gray-800">{{ t('quick-links') }}</h4>
            <ul class="space-y-2">
              <li>
                <NuxtLink
                  to="/news"
                  class="text-sm text-gray-600 hover:text-gray-900"
                >
                  {{ t('news') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/libs"
                  class="text-sm text-gray-600 hover:text-gray-900"
                >
                  {{ t('libs') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/places"
                  class="text-sm text-gray-600 hover:text-gray-900"
                >
                  {{ t('places') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/celebrities"
                  class="text-sm text-gray-600 hover:text-gray-900"
                >
                  {{ t('celebrities') }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="space-y-4">
            <h4 class="font-medium text-gray-800">{{ t('contact') }}</h4>
            <div class="space-y-2">
              <p class="flex items-center text-sm text-gray-600">
                <UIcon name="i-lucide-map-pin" class="mr-2 h-4 w-4" />
                {{ t('location') }}
              </p>
              <p class="flex items-center text-sm text-gray-600">
                <UIcon name="i-lucide-phone" class="mr-2 h-4 w-4" />
                +998 XX XXX XX XX
              </p>
              <p class="flex items-center text-sm text-gray-600">
                <UIcon name="i-lucide-mail" class="mr-2 h-4 w-4" />
                info@bukhara-lib.uz
              </p>
            </div>
            <div class="flex space-x-2">
              <UButton
                to="/contact"
                size="sm"
                variant="soft"
                class="bg-[#e0903b] text-white hover:bg-[#e0903b]/60"
              >
                {{ t('contact') }}
              </UButton>
            </div>
          </div>
        </div>
      </div>

      <!-- Language Selector -->
      <div
        class="mt-8 flex flex-wrap items-center justify-between border-t border-[#b1a9a2] pt-6"
      >
        <p class="mt-4 text-xs text-gray-500 md:mt-0">
          &copy; {{ new Date().getFullYear() }} {{ t('liciense') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { button } from '#build/ui';

const {t} = useI18n()
</script>
