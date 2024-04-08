<script setup>
definePageMeta({
  // layout: 'default',
  name: 'store',
  // alias: '[...slug]',
  title: 'Store',
  description: `Shop 'til You Drop: Your E-Commerce Haven!`,
  navOrder: '3',
  hidden: true,
  type: 'primary',
  icon: 'i-mdi-home',
  // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
})

const route = useRoute()
const { slug: productSlug } = route.params
const { product } = await useProduct(productSlug)

console.log(product)
useHead({
  title: product.value.name || '',
})

useServerSeoMeta({
  description: () => product.value.description || '',
})

const colors = [
  {
    id: 1,
    name: 'Gray',
  },
  {
    id: 2,
    name: 'Black',
  },
  {
    id: 3,
    name: 'White',
  },
  {
    id: 4,
    name: 'Blue',
  },
]

const selected = ref(colors[0])
</script>
<template>
  <section class="mx-4 my-16 product-details">
    <div class="flex justify-center max-h-96 xl:max-h-[600px]">
      <div class="-m-4 bg-white rounded-2xl w-full">
        <v-img v-if="product.photoUrl" :src="product.photoUrl" class="max-h-full " />
        <v-img v-else :src="image" class="max-h-full"></v-img>
      </div>
    </div>
    <div class="mt-8 md:mt-0 md:mx-8">
      <div class="relative">
        <v-chip v-if="product.badge" :text="badge" color="primary"></v-chip>
        <h3 class="mt-2">{{ product.name }}</h3>
      </div>
      <div class="flex items-center justify-between mt-2">
        <div class="flex items-center">
          <div>
            <v-rating class="mt-0.5" density="compact" :model-value="product.rate" size="small" color="secondary"
              half-increments></v-rating>
          </div>
          <div class="ml-4">
            <div class="text-sm">{{ product?.rating || '' }} reviews</div>
          </div>
        </div>
        <div class="md:mr-4">
          <span class="dark:text-primary-400 text-primary-500 text-xs">{{
            product.shipping
          }}</span>
        </div>
      </div>
      <div v-if="product.badge || product.shipping" class="flex items-center justify-between mt-4">
        <div>
          <span class="font-bold text-xl">${{ product.price }}</span>
        </div>
        <div class="md:mr-4"><span>Best Deals Inc.</span></div>
      </div>
      <div>
        <div v-if="product.variant" class="mt-4">
          <v-select v-model="selected" :items="product?.variant" item-title="name" item-value="id" variant="outlined">
          </v-select>
        </div>
        <div class="flex mt-4 w-full">
          <v-btn-square label="Add To Cart" class="" size="x-large" block>
            <span class="py-2 lg:text-lg">Add To Cart</span>
          </v-btn-square>
        </div>
      </div>
      <div class="mt-8">
        <span>{{ product.description }}</span>
      </div>
    </div>
  </section>
</template>
<style scoped>
.product-details {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  grid-template-areas: 'image' 'details';
}

@media (min-width: 768px) {
  .product-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'image details';
  }
}
</style>
