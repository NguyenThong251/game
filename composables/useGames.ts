import { ref, onMounted } from 'vue'
import type { Game, ApiResponse } from '~/types/game'
import { getMockGames, getUpcomingGames, getFeaturedGames } from '~/mocks/games'

export default function useGames() {

  const upcomingGames = ref<Game[]>([])
  const featuredGames = ref<Game[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  // const config = useRuntimeConfig();

  const fetchGames = async () => {
    loading.value = true
    error.value = null

    try {
      // Sử dụng mock data
      const mockData = getMockGames()

      if (mockData.status === 'success') {
        upcomingGames.value = getUpcomingGames()
        featuredGames.value = getFeaturedGames()
      } else {
        throw new Error('Không thể tải dữ liệu trò chơi')
      }

      /*
      const { data } = await useFetch<ApiResponse>(`${config.public.apiBase}/games/hotmain`)

      if (data.value && data.value.status === 'success') {
        const gameCategories = data.value.data

        const upcomingCategory = gameCategories.find(cat => cat.tags === 'mothuong')
        const featuredCategory = gameCategories.find(cat => cat.tags === 'noibat')

        upcomingGames.value = upcomingCategory ? upcomingCategory.list : []
        featuredGames.value = featuredCategory ? featuredCategory.list : []
      } else {
        throw new Error('Không thể tải dữ liệu trò chơi')
      }
      */
    } catch (err) {
      error.value = 'Đã xảy ra lỗi khi tải dữ liệu trò chơi'
      console.error(error.value, err)
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    fetchGames()
  })

  return {
    upcomingGames,
    featuredGames,
    loading,
    error,
    fetchGames
  }
}