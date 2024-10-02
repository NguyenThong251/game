<template>
  <div v-if="!languageStore.isLoading" class="js-toggle dropdown-lang">
    <div class="js-toggle-link tg-link">
      <p class="icon" :class="languageStore.currentLanguage === 'vi' ? 'icon--vi' : 'icon--en'"></p>
      <p class="text">
        <span>{{ languageStore.getCurrentLanguageName }}</span>
        <span class="arrow"></span>
      </p>
    </div>
    <div class="js-toggle-content tg-content">
      <p v-for="(name, code) in languageStore.languages" :key="code" @click="changeLanguage(code)">
        {{ name }}
      </p>
    </div>
  </div>
  <div v-else>Đang tải...</div>
</template>

<script setup lang="ts">
import { useLanguageStore } from '@/stores/languageStore'

const languageStore = useLanguageStore()

const changeLanguage = (lang: string) => {
  languageStore.setLanguage(lang)
}
</script>
