<template>
  <div class="js-toggle dropdown">
    <div class="js-toggle-link tg-link">
      <p class="icon" :class="currentLanguage === 'vi' ? 'icon--vi' : 'icon--en'"></p>
      <p class="text">
        <span>{{ currentLanguage === 'vi' ? 'Việt Nam' : 'English' }}</span>
        <span class="arrow"></span>
      </p>
    </div>
    <div class="js-toggle-content tg-content">
      <p @click="changeLanguage('vi')">Việt Nam</p>
      <p @click="changeLanguage('en')">English</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentLanguage = ref('vi')

const changeLanguage = (lang: string) => {
  currentLanguage.value = lang
}
</script>

<style></style>