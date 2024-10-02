import { ref } from 'vue'

interface Notice {
  title: string
  content: string
  url: string | null
}

export const useNotices = () => {
  const notices = ref<Notice[]>([])
  const config = useRuntimeConfig();
  const fetchNotices = async () => {
    const { data } = await useFetch<{ data: Notice[] }>(`${config.public.apiBase}/system/notices`, {
      params: { lang: 'vi' }
    })

    if (data.value && data.value.data) {
      notices.value = data.value.data
    }
  }

  return {
    notices,
    fetchNotices
  }
}