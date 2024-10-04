<template>
  <div v-if="notices && notices.length > 0" class="marquee-wrapper marquee current">
    <div class="context inner">
      <img src="/image/Desktop/home/icon01.png" width="18px" height="18px" alt="" class="marquee-icon">
      <marquee>
        <span v-for="(notice, index) in notices" :key="index">
          {{ notice.content }}
          <span v-if="index < notices.length - 1" class="separator"> | </span>
        </span>
      </marquee>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAsyncData } from '#app'
import useApi  from '~/composables/useApi'

const { data: notices } = await useAsyncData('notices', async () => {
  try {
    const response = await useApi('notices')
    if (response.status === 'success') {
      return response.data
    }
    return []
  } catch (error) {
    console.error('Error fetching notices:', error)
    return []
  }
})
</script>
