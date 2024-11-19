<template>
  <div>
    <h1>Search</h1>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  validate: (route) => {
    console.log("par ici");
    return route.query.q !== undefined;
  },
});
</script>
