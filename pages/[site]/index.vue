<script setup lang="ts">
import { heroImageUrl } from '@/utils/hero'
import { useFetchStore } from '~/stores/store'
definePageMeta({
  // layout: 'default',
  // name: 'index',
  // alias: 'index',
  title: 'Home',
  description: 'Style Up Your Life!',
  navOrder: 1,
  type: 'primary',
  icon: 'i-mdi-home',
  middleware: ["store"]
  // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
})
const fetchStore = useFetchStore()
const config = useRuntimeConfig()
const url = config.public.BACKEND_URL
const { optimizeImage } = useOptimizeImage()
const heroImageOptimized = {
  alt: `hero`,
  cover: true,
  ...optimizeImage(
    heroImageUrl,
    /* options */
    {
      /* If using local images instead of unsplash url, enable netlify provider */
      // provider:
      //     process.env.NODE_ENV === 'production'
      //       ? 'netlify'
      //       : null /* defaults to ipx or ipxStatic */,
      placeholder: false, // placeholder image before the actual image is fully loaded.
    },
    true /* return bgStyles */,
  ),
}
const heroImage = heroImageOptimized.src
const bgStyles = heroImageOptimized.bgStyles
const products = ref()
try {
  const productsFetch = await useFetch(url + '/products?store_id=' + fetchStore.storeData.id)
  console.log(productsFetch.data.value)
  products.value = productsFetch.data.value
} catch (err) {
  console.log(err)

}






</script>
<template>
  <div>
    <HeroSection />
    <div class="container mx-auto pt-8">
      <LaunchSale class="mt-8" />
      <NewProducts class="mt-8" :products="products" />
    </div>
    {{ products }}
  </div>
</template>
<style scoped></style>
