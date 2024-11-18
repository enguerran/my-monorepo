<template>
  <div>
    <h1>Search Results</h1>
    <input v-model="query">
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <ul>
        <li v-for="item in results" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const query = computed(() => (route.query.q as string) ?? "");

const {
  data: results,
  error,
  status,
} = useFetch(`/api/search?q=${query.value}`);
const pending = computed(() => status.value === "pending");
</script>
