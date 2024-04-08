import { defineNuxtRouteMiddleware } from 'nuxt/app'
import { useFetchStore } from '~/stores/store'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const tenant = await useTenant()
  const fetchStore = useFetchStore()
  await fetchStore.getStoreData(tenant)
  console.log(fetchStore.storeData)
  // Check if user is already logged in (client-side)
  if (fetchStore.storeData) {
    fetchStore.getStoreProducts
    return // User is already authenticated, no need to redirect
  }

  // Attempt to fetch user data from Appwrite session on server-side

  // Redirect to login page if not authenticated
})
