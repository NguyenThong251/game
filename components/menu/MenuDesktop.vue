<template>
  <ul class="nav">
    <li v-for="category in categories" :key="category.title" :title="category.title">
      <a :href="category.href" class="category"><span>{{ category.title }}</span></a>
      <div v-if="category.gameType" class="menu-con">
        <div class="inner single-brand">
          <a v-for="api in category.apis?.slice(0, 4)" :key="api.id" :href="api.href" class="box F-GAME">
            <div class="lo-left">
              <img :src="api.logo_url" class="lo">
            </div>
            <div class="lo-right">
              <p>{{ api.title }}</p>
            </div>
          </a>
          <a v-if="category.apis && category.apis.length > 4" :href="category.href" class="box F-GAME view-more">
            <div class="lo-right">
              <p>Xem thêm</p>
            </div>
          </a>
        </div>
      </div>
    </li>
  </ul>
  <div class="kf-box">
    <a class="kf-item promotions"><img src="/image/Desktop/header/khuyen-mai.png">
      <p>Khuyến mãi</p>
    </a>
    <a class="kf-item"><img src="/image/Desktop/header/ho-tro.png">
      <p>Hỗ Trợ</p>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import useGameTypeMenuApis from '~/composables/useGameTypeMenuApis'

const { fetchGameApis } = useGameTypeMenuApis()

interface Category {
  title: string;
  href: string;
  gameType: number;
  apis?: any[];
}

const categories = ref<Category[]>([
  { title: 'Thể Thao', href: '#/Sport', gameType: 5 },
  { title: 'Casino', href: '#/Live', gameType: 1 },
  { title: 'Nổ Hũ', href: '#/Game', gameType: 3 },
  { title: 'Game Bài', href: '#/Board', gameType: 6 },
  { title: 'Bắn Cá', href: '#/Fish', gameType: 2 },
  { title: 'Xổ Số', href: '#/Lottery', gameType: 4 },
])

onMounted(async () => {
  for (const category of categories.value) {
    if (category.gameType) {
      category.apis = await fetchGameApis(category.gameType)
    }
  }
})
</script>

<style scoped>
.view-more {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-weight: bold;
}
</style>
