<template>
  <div v-if="languages" class="js-toggle dropdown-lang">
    <div class="js-toggle-link tg-link">
      <p class="icon" :class="currentLanguage === 'vi' ? 'icon--vi' : 'icon--en'"></p>
      <p class="text">
        <span>{{ getCurrentLanguageName }}</span>
        <span class="arrow"></span>
      </p>
    </div>
    <div class="js-toggle-content tg-content">
      <p v-for="(name, code) in languages" :key="code" @click="changeLanguage(code)">
        {{ name }}
      </p>
    </div>
  </div>
  <div v-else>Đang tải...</div>
</template>

<script setup lang="ts">
import { useAsyncData } from '#app'
import useApi from '~/composables/useApi'
import { ref, computed } from 'vue'

const { data: languages } = await useAsyncData('languages', async () => {
  try {
    const response = await useApi('languages')
    if (response.status === 'success') {
      return response.data
    }
    return {}
  } catch (error) {
    console.error('Error fetching languages:', error)
    return {}
  }
})

const currentLanguage = ref('vi')

const getCurrentLanguageName = computed(() => {
  return languages.value ? languages.value[currentLanguage.value] : ''
})

const changeLanguage = (lang: string) => {
  currentLanguage.value = lang
}
</script>
