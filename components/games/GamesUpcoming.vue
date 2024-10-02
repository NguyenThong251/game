<template>
  <div class="immediatelyTheLottery-newTheme">
    <div class="section-title">Sắp mở thưởng</div>
    <div class="section-content">
      <div v-if="loading">Đang tải...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else class="popularBettingNewTheme">
        <div v-for="game in upcomingGames" :key="game.id" class="popularBetting">
          <div class="countdown-wp">
            <div class="iconfont icon-icon_clock"></div>
            <div class="_timeDown countdown">
              <div class="vue-count-time">
                <div class="time">
                  <span>{{ countdown.minutes[0] }}</span>
                  <span>{{ countdown.minutes[1] }}</span>
                  <i>:</i>
                  <span>{{ countdown.seconds[0] }}</span>
                  <span>{{ countdown.seconds[1] }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="popularBetting-inner">
            <div class="image-wrapper">
              <img :src="game.img_url" :alt="game.name">
            </div>
            <div class="lottery-info-wp">
              <div class="lottery-name">{{ game.name }}</div>
              <div class="play-info-wp">
                <div v-for="(tag, index) in game.tags.split(',')" :key="index">{{ tag }}</div>
              </div>
            </div>
          </div>
          <div class="popularBetting-inner">
            <div class="open-numbers">
            </div>
            <div class="betting">
              <i class="fa-solid fa-bolt-lightning"></i>
              <span>Đặt cược</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const { upcomingGames, loading, error } = useGames()

const countdown = ref({
  minutes: ['0', '0'],
  seconds: ['0', '0']
})

</script>