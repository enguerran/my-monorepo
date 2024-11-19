<template>
  <div>
    <h1 class="text-2xl">A product list page</h1>
    <NuxtLink :to="'/en-us/p/iphone-12'"
      >plain old url to product page</NuxtLink
    >
    <br />
    <NuxtLink
      :to="{
        name: PRODUCT_ROUTES.PRODUCT,
        params: { locale: 'en-us', slug: 'iphone-12' },
      }"
      >named route to product page</NuxtLink
    >
    <br />
    <NuxtLink :to="'/search'">Unvalid Search page</NuxtLink>
    <br />
    <NuxtLink :to="'/search?q=iphone'">Search page</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ROUTES } from "~/layers/product-list/ROUTES";
import { ROUTES as PRODUCT_ROUTES } from "~/layers/product/ROUTES";

definePageMeta({
  name: ROUTES["product-list"],
});
</script>
