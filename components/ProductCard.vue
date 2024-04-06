<script setup>
const props = defineProps({
  products: Array, // Specify the type of data expected
});
let products = props.products

</script>
<template>
  <div v-for="product in products" :key="product">

    <v-card border variant="outlined" class="md:h-full  max-w-xs ">
      <div class="h-64 relative">
        <div class="-m-4 bg-white rounded-lg">

          <v-img :src="product.photoUrl" class="w-full"></v-img>

        </div>
      </div>
      <v-card-text class="mt-14 ">
        <div>
          <span class="text-base">{{ product.name }}</span> <br>
          <span class=" text-sm">{{ product.description }}</span>
          <div class="flex font-medium items-center justify-between mt-4">
            <span class="font-bold text-base">${{ product.price }}</span>
            <v-chip v-if="shipping" class="dark:text-primary-400 text-primary-500 text-xs" size="small"
              color="primary">{{ product.shipping }}</v-chip>
          </div>
        </div>
      </v-card-text>
    </v-card>

  </div>

</template>
<style scoped></style>
