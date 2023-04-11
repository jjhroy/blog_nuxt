<template>
  <div class="flex flex-col max-w-[740px]">
    <!-- 文章标题 -->
    <nuxt-link
      :to="`/article/${article.id}`"
      class="font-semibold text-[#000000] opacity-60 text-xl hover:opacity-100 flex"
    >
      <span>
        {{ article.articleTitle }}
      </span>
      <span class="text-[#888] text-[12px] leading-5 ml-1">
        {{ article.tagDTOList[0].tagName }}
      </span>
    </nuxt-link>
    <span class="flex items-center text-[#888] text-[12px] leading-5">
      {{ formatDate(article.createTime) }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { articles } from "~~/types/api/article";

const props = defineProps<{
  article: articles;
}>();
</script>

<style scoped></style>
