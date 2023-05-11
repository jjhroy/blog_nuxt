<template>
  <div class="relative flex justify-between flex-grow">
    <ArticleList class="mx-auto"></ArticleList>
  </div>
</template>

<script setup lang="ts">
import ArticleList from '~~/pages/article/index.vue';

onMounted(() => {
  console.log('device', getDeviceInfo());
});
</script>

<style scoped></style>
