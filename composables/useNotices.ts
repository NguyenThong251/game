import { ref, computed } from 'vue'
import { $fetch } from 'ofetch'
import { useLanguageStore } from '@/stores/languageStore'

interface Notice {
  title: string
  content: string
  url: string | null
}

interface ApiResponse {
  status: string
  code: number
  message: string
  data: Notice[]
  alert: any[]
}

export const useNotices = () => {
  const notices = ref<Notice[]>([])
  const config = useRuntimeConfig()
  const languageStore = useLanguageStore()

  const currentLang = computed(() => languageStore.currentLanguage)

  const fetchNotices = async () => {
    try {
      const response = await $fetch<ApiResponse>(`${config.public.apiBase}/system/notices`, {
        params: { lang: currentLang.value }
      })

      if (response.status === 'success' && Array.isArray(response.data)) {
        notices.value = response.data
        console.log('Notices fetched:', notices.value)
      } else {
        console.error('Unexpected API response:', response)
      }
    } catch (error) {
      console.error('Lỗi khi fetch thông báo:', error)
    }
  }

  return {
    notices,
    fetchNotices
  }
}