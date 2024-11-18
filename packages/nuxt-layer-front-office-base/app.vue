<template>
  <UContainer>
    <h1 class="text-3xl font-bold">{{ $t("welcome") }} Demo site</h1>
    <div class="grid grid-cols-3 gap-4">
      <ProductCard
        v-for="product in products"
        :key="product.name"
        :product="{
          name: product.name,
          price: product.price,
          image: product.image + '?random=' + product.id,
        }"
      />
    </div>
  </UContainer>
</template>
<script setup lang="ts">
const { data: products } = await useProducts();
</script>
