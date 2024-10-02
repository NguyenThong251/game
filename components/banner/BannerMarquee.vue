<template>
  <div class="marquee-wrapper marquee current">
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

const { notices, fetchNotices } = useNotices()

onMounted(() => {
  fetchNotices()
})
</script>

<style scoped>
.separator {
  margin: 0 10px;
}
</style>