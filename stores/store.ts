import { defineStore } from 'pinia'

export const useFetchStore = defineStore('store', {
  // 1. State (ref, reactive, etc) / getters (computed)

  // 2. Actions (functions)
  state: () => ({
    storeData: null,
    storeProducts: null,
  }),
  actions: {
    async getStoreData(tenant) {
      console.log(tenant)
      const config = useRuntimeConfig()
      const url = config.public.BACKEND_URL
      try {
        const siteFetch = await useFetch(url + '/stores/' + tenant + '?by=slug')
        console.log(siteFetch.data.value)
        this.storeData = siteFetch.data.value
      } catch (err) {
        console.log(err)
        this.storeData = null
      }
    },
    async getStoreProducts() {},
  },
})
