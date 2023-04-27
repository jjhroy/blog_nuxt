<template>
  <!--文章列表-->
  <div class="flex flex-col">
    <CommonArticleCard
      v-for="item in newestArticleList"
      :key="item.id"
      :article="item"
      ref="scrollComponent"
      class="mt-4" />
    <div v-show="!isEnd">
      <div
        v-if="!isLoading"
        @click="loadMore"
        class="my-10 cursor-pointer text-[#1a1a1a] text-[14px] text-opacity-60 font-semibold hover:text-opacity-90">
        加载更多
      </div>
      <CommonLoadMore class="my-10" v-else></CommonLoadMore>
    </div>
  </div>
</template>

<script setup lang="ts">
import { articles } from '~/types/api/article';
import { useArticleStore, articleStore } from '~~/store/article';

const isLoading = ref(false);
const { getArticleList } = articleStore();
const { isEnd, articleList, currentPage } = useArticleStore();

try {
  currentPage.value = 1;
  await Promise.allSettled([getArticleList([])]);
} catch {}

// 初始化文章数据
const newestArticleList = computed(() => {
  if (articleList.value.length === 0) return [];
  const _articleList = articleList.value ?? [];
  return _articleList as articles[];
});

const loadMore = async () => {
  isLoading.value = true;
  setTimeout(() => {
    currentPage.value += 1;
    getArticleList(newestArticleList.value ?? []);
    isLoading.value = false;
  }, 500);
};
</script>
