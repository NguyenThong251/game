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
const { fetchGames } = useGames()
const { fetchNotices } = useNotices()

onMounted(() => {
    fetchGames()
    fetchNotices()
})
</script>
