<template>
  <!--文章列表-->
  <div class="flex flex-col">
    <CommonArticleCard
      v-for="item in articleList"
      :key="item.id"
      :article="item"
      ref="scrollComponent"
      class="mt-4"
    />
    <div
      v-if="!isLoading"
      @click="loadMore"
      class="my-10 cursor-pointer text-[#1a1a1a] text-[14px] text-opacity-60 font-semibold hover:text-opacity-90"
    >
      加载更多
    </div>
    <CommonLoadMore class="my-10" v-else></CommonLoadMore>
  </div>
</template>

<script setup lang="ts">
import { articles } from "~~/types/api/article";

const currentPage = ref(1);
const articleList = ref<articles[]>([]);
const isLoading = ref(false);
const body = computed(() => ({
  current: currentPage.value,
}));

const loadMore = async () => {
  isLoading.value = true;
  currentPage.value++;
  // await refresh();
  const { data: list } = await getArticleList(currentPage.value, 1);
  setTimeout(() => {
    articleList.value.push(...(list.value ?? []));
    isLoading.value = false;
  }, 500);
};

// const { data, refresh } = getApi<articles[]>("/articles", {
//   params: {
//     current: currentPage.value,
//     type: 1,
//   },
// });

const { data } = await getArticleList(currentPage.value, 1);

onMounted(() => {
  articleList.value = data.value ?? [];
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
