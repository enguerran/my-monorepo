<template>
  <UCard>
    <template #header>
      <img class="mx-auto" :src="product.image" :alt="product.name" />
    </template>

    <h2 class="text-2xl font-bold">{{ product.name }}</h2>
    <p class="text-lg" v-if="product.description">{{ product.description }}</p>

    <template #footer>
      <p>{{ $price(product.price) }}</p>
    </template>
  </UCard>
</template>

<script setup lang="ts">
const { $price } = useNuxtApp();

interface Product {
  image: string;
  name: string;
  price: Price;
  description?: string;
}

defineProps<{ product: Product }>();
</script>
