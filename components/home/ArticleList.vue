<template>
  <!--文章列表-->
  <div class="flex flex-col">
    <div
      class="flex items-center gap-x-[6px] text-[18px] leading-6 mt-16 <notebook:mt-6 mb-4">
      <div class="text-[#3B82F6] font-semibold">文章</div>
      <div class="text-5xl font-extrabold ...">
        <span
          class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Articles
        </span>
      </div>
    </div>
    <main>
      <ContentList
        :sort="{ updated_at: -1 }"
        :query="query"
        v-slot="{ list }">
        <div
          v-for="article in handleList(list)"
          :key="article.id">
          <CommonArticleCard
            :article="article"
            ref="scrollComponent" />
        </div>
      </ContentList>
    </main>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import { articleList, articles, articleShowList } from '~/types/api/article';
import { archives, archiveShowList } from '~/types/api/blog';
import { useArticleStore, articleStore } from '~~/store/article';
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';

const query: QueryBuilderParams = { path: '/article' };

const handleList = (list: any) => {
  console.log(list);
  return list;
};
</script>
<style scoped>
.title-bg {
  background: linear-gradient(269.68deg, #4c72f9 0%, #4e89fb 99.89%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  opacity: 0.2;
}
</style>
