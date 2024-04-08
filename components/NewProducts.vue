<script setup>
import ProductCard from './ProductCard.vue';

const route = useRoute()
const { category } = route.params
const props = defineProps({
  products: Array, // Specify the type of data expected
});
const { fetchCategory } = await useProducts()
const products = props.products
</script>
<template>
  <div>
    <v-container class="py-8">
      <div class="-tracking-wide flex font-bold justify-center text-5xl">
        <v-icon class="mr-2 text-5xl" icon="i-twemoji-fire"></v-icon>
        <span class="text-center text-primary"> منتوجات جديدة</span>

      </div>
      <section data-pg-name="Products" class="flex flex-wrap justify-center mt-8 gap-2">
        <ProductCard :products="products"></ProductCard>
      </section>
    </v-container>
  </div>
</template>
<style scoped></style>
