<template>
  <div class="feature-game-wp">
    <div class="section-title">{{ title }}</div>
    <div class="section-content">
      <div v-if="loading">Đang tải...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else class="third-party-wp">
        <div class="swiper-game-list">
          <div
            class="swiper-container swiper swiper-container-initialized swiper-container-horizontal swiper-container-multirow swiper-container-multirow-column swiper-container-ios">
            <div class="swiper-wrapper">
              <div v-for="game in featuredGames" :key="game.id" class="swiper-slide">
                <div class="game">
                  <div class="el-image">
                    <img :src="game.img_url" :alt="game.name" class="el-image__inner">
                  </div>
                  <div class="btn-enterGame">
                    <button type="button" class="el-button el-button--default">
                      <span>Vào trò chơi</span>
                    </button>
                  </div>
                  <div class="gameName">{{ game.name }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-button-prev swiper-button-disabled"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const { featuredGames, loading, error } = useGames()
const title = ref('Game nổi bật')

</script>