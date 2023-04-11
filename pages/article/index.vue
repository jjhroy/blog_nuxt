<template>
  <!--文章列表-->
  <div class="flex flex-col">
    <CommonArticleCard
      v-for="(item, index) in articleList?.data"
      :key="item.id"
      :article="item"
      ref="scrollComponent"
      class="mt-4"
    />
  </div>
</template>

<script setup lang="ts">
import { articles } from "~~/types/api/article";

const { data: articleList, refresh } = getApi<articles[]>("/articles", {
  params: {
    current: 1,
    type: 1,
  },
});
</script>

<style scoped lang="scss">
.infinite-list {
  height: 100vh;
  padding: 0;
  margin: 0;
  list-style: none;
}

.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
}

.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>
