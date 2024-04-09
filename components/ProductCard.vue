<script setup>

const props = defineProps({
  products: Array, // Specify the type of data expected
});
const products = props.products

</script> 
<template> 
    <div v-for="product in products" :key="product">
        <v-card border variant="" class="md:h-full  max-w-xs rounded-lg">
            <NuxtLink :to="'/product/' + product.slug">
                <div class="h-64  ">
                    <div class="-m-4 bg-white ">
                        <img :src="product.photoUrl" class=""/>
                    </div>
                </div>
            </NuxtLink>
            <v-card-text class=" ">
                <div class=" grid grid-cols-4  ">
                    <div class=" col-span-3  "> <span class="text-base font-medium">{{ product.name }} </span> <br> <span class="font-bold text-base">${{ product.price }}</span>
                        <div class="text-xs truncate">
                            {{ product.description }}
</div>
                    </div>
                    <div class=" col-span-1  items-center flex justify-center">
                        <button class="bg-primary h-12 rounded-circle text-white w-12">></button>
                    </div>
                </div>
            </v-card-text>
            <button class="bg-primary p-1 text-white w-full">شراء الأن</button>
        </v-card>
    </div>
</template> 
<style scoped></style>
