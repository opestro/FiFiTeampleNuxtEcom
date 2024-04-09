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
      <div class="-tracking-wide flex font-bold justify-center text-3xl">
        <v-icon class="mx-2 text-3xl" icon="i-twemoji-fire"> </v-icon> <span class="text-center text-primary">منتوجات
          جديدة </span>
        <v-icon class="mx-2 text-3xl" icon="i-twemoji-fire"></v-icon>
      </div>
      <section data-pg-name="Products" class="flex flex-wrap justify-center mt-8 gap-2">
        <ProductCard :products="products"></ProductCard>
      </section>
    </v-container>
  </div>
</template>
<style scoped></style>
