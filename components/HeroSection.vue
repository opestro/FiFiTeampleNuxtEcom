<script setup lang="ts">
import { heroImageUrl } from '@/utils/hero'

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
</script>
<template>
  <section>
    <v-img :src="heroImageOptimized.src" :srcset="heroImageOptimized.srcset" :sizes="heroImageOptimized.sizes"
      :max-height="400" cover>
      <!-- <v-img :src="heroImageUrl" :max-height="800" cover> -->
      <div class="container flex flex-col h-full justify-center mx-auto">
        <div class="flex flex-col items-center pb-8 px-4 w-full md:pb-20">
          <h2 class="capitalize  leading-tight mb-2 md:w-96 text-black text-center w-60 xl:w-full">
            منتوجات عصرية
          </h2>
          <v-btn text="تسوق الأن" variant="elevated" size="large" class="mt-4 bg-primary-500 text-white"
            to="/women"></v-btn>
        </div>
      </div>
    </v-img>
  </section>
</template>
<style scoped></style>
