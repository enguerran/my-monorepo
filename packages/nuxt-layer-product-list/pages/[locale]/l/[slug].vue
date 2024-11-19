<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Products in {{ slug }}</h1>

    <div class="product-list grid gap-4 lg:grid-cols-3">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        class="product-card border p-4 rounded-lg"
        :product="{
          name: product.name,
          price: product.price,
          image: product.image + '?random=' + product.id,
          description: product.description,
        }"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();
const slug = route.params.slug;
const { data: products } = await useFetch(`/api/products?category=${slug}`);

definePageMeta({
  validate: (route) => {
    return route.params.slug === "foo";
  },
  name: "product-list",
});
</script>

<style scoped>
/* No additional styles needed as Tailwind CSS is used */
</style>
