<template>
    <main class="main">
        <Banner />
        <div class="wrap-home">
            <div class="home">
                <GamesUpcoming />
                <GamesFeatured />
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import useGames from '@/composables/useGames'
import { useLanguageStore } from '@/stores/languageStore'
import { onMounted } from 'vue'

const { fetchGames } = useGames()
const { fetchNotices } = useNotices()
const languageStore = useLanguageStore()

onMounted(async () => {
    await languageStore.initLanguage()
    fetchGames()
    fetchNotices()
})
</script>
