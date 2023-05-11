<template>
  <div class="bg-[#edf2f7] dark:bg-black">
    <div class="text-center my-20">
      <span class="font-semibold text-[28px]">{{ articleDetail?.articleTitle }}</span>
    </div>
    <div class="w-[1200px] mx-auto pb-10 flex justify-between">
      <div class="flex-[3/4]">
        <Content></Content>
      </div>
      <div class="flex-[1/4] flex flex-col gap-y-5">
        <ArticleInfo></ArticleInfo>
        <Sidebar></Sidebar>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './Sidebar.vue';
import Content from './Content.vue';
import { useArticleStore, articleStore } from '~~/store/article';

const route = useRoute();
const { getArticleById } = articleStore();
const { articleDetail } = useArticleStore();
try {
  await Promise.allSettled([getArticleById(Number(route.params.id))]);
} catch (error) {
  redirectTo404Page();
}
useHead({
  title: articleDetail.value?.articleTitle,
});
</script>

<style scoped></style>
