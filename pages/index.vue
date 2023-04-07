<template>
  <div class="relative flex justify-between">
    <ArticleList></ArticleList>
    <CommonInfoCard class="sticky top-40 right-10 mt-20"> </CommonInfoCard>
  </div>

  <!-- <NuxtLink to="/about"> About </NuxtLink>
  <NuxtLink to="/article"> Article </NuxtLink> -->
</template>

<script setup lang="ts">
import ArticleList from "~~/pages/article/index.vue";

// const { data } = await getArticleList;
// console.log(data.value, "data");
</script>

<style scoped></style>
