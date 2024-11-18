<template>
  <div>
    <div v-if="status === 'pending'">Loading...</div>
    <div v-else-if="status === 'error'">Error</div>
    <div v-else-if="status === 'success' && products">
      <UCarousel v-slot="{ item: product }" :items="products" arrows>
        <ProductCard
          class="mx-4 my-2"
          :product="{
            name: product.name,
            price: product.price,
            image: product.image + '?random=' + product.id,
          }"
        />
      </UCarousel>
    </div>
  </div>
</template>
<script setup lang="ts">
const { data: products, status } = await useProducts();
</script>
