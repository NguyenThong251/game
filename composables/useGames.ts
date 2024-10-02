import { ref } from 'vue'

interface Game {
  id: number;
  api_name: string;
  name: string;
  en_name: string;
  game_type: number;
  game_code: string;
  img_url: string;
  client_type: string;
  platform: string | null;
  param_remark: string;
  is_open: string;
  weight: string;
  tags: string;
  created_at: string;
  updated_at: string;
}

interface GameCategory {
  api_title: string;
  api_name: string;
  tags: string;
  list: Game[];
}

interface ApiResponse {
  status: string;
  code: number;
  message: string;
  data: GameCategory[];
}

export default function useGames() {
  const upcomingGames = ref<Game[]>([])
  const featuredGames = ref<Game[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  const config = useRuntimeConfig();

  const fetchGames = async () => {
    loading.value = true
    error.value = null

    try {
      const { data } = await useFetch<ApiResponse>(`${config.public.apiBase}/games/hotmain`)

      console.log(`Fetch url: ${config.public.apiBase}/games/hotmain`)
      console.log('Data', data.value)

      if (data.value && data.value.status === 'success') {
        const gameCategories = data.value.data

        const upcomingCategory = gameCategories.find(cat => cat.tags === 'mothuong')
        const featuredCategory = gameCategories.find(cat => cat.tags === 'noibat')

        upcomingGames.value = upcomingCategory ? upcomingCategory.list : []
        featuredGames.value = featuredCategory ? featuredCategory.list : []
      } else {
        throw new Error('Không thể tải dữ liệu trò chơi')
      }
    } catch (err) {
      error.value = 'Đã xảy ra lỗi khi tải dữ liệu trò chơi'
      console.error(error.value, err)
    } finally {
      loading.value = false
    }
  }

  return {
    upcomingGames,
    featuredGames,
    loading,
    error,
    fetchGames
  }
}