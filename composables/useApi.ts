export default async function useApi(endpoint: string, options: any = {}) {
  const config = useRuntimeConfig();
  const apiBase = config.public.apiBase
  const fullUrl = `${apiBase}/${endpoint}`

  console.log('Full API URL:', fullUrl)
  return await $fetch(`${config.public.apiBase}/${endpoint}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${options.token || ""}`,
      ...options.headers,
    },
  });

}
