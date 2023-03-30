<template>
  <div class="relative flex justify-between">
    <ArticleList></ArticleList>
    <CommonInfoCard class="sticky top-20 right-10"> </CommonInfoCard>
  </div>

  <!-- <NuxtLink to="/about"> About </NuxtLink>
  <NuxtLink to="/article"> Article </NuxtLink> -->
</template>

<script setup lang="ts">
import ArticleList from "~~/pages/article/index.vue";
</script>

<style scoped></style>
