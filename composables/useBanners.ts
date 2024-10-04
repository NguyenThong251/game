import { ref, onMounted, useSSRContext } from 'vue'
import useApi from './useApi'

export default function useBanners() {
  const banners = ref([])
  const isMobile = ref(false)

  const checkDevice = () => {
    if (process.client) {
      isMobile.value = window.innerWidth < 1024
    } else {
      const ssrContext = useSSRContext()
      isMobile.value = ssrContext?.event.headers['user-agent']?.toLowerCase().includes('mobile') ?? false
    }
    console.log('Device check:', isMobile.value ? 'Mobile' : 'Desktop')
  }

  const fetchBanners = async () => {
    const group = isMobile.value ? 'mobile1' : 'new1'
    const endpoint = `/banners?group=${group}&lang=vi`
    console.log('Fetching banners for:', endpoint)

    try {
      const response = await useApi(endpoint)
      console.log('Banner API response:', response)
      if (response.status === 'success' && Array.isArray(response.data)) {
        banners.value = response.data
        console.log('Banners updated:', banners.value.length)
      }
    } catch (error) {
      console.error('Error fetching banners:', error)
    }
  }

  onMounted(() => {
    checkDevice()
    fetchBanners()
    window.addEventListener('resize', () => {
      const wasMobile = isMobile.value
      checkDevice()
      if (wasMobile !== isMobile.value) {
        fetchBanners()
      }
    })
  })

  return {
    banners,
    isMobile,
    fetchBanners,
    checkDevice
  }
}