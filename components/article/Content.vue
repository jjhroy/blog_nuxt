<template>
  <section class="w-[890px]">
    <div class="rounded-xl bg-[#fff] dark:bg-black px-7 py-8 shadow-around">
      <!-- <NuxtImg
        :src="articleDetail?.articleCover"
        class="rounded-md w-full min-h-[390px] max-h-[420px]"
        quality="80" /> -->
      <MdEditor
        class="article-content"
        v-model="content"
        :theme="isLight ? 'light' : 'dark'"
        preview-only />
    </div>
  </section>
</template>

<script setup lang="ts">
import MdEditor from 'md-editor-v3';
import { useGlobalStore } from '~~/store/global';
import { useArticleStore } from '~~/store/article';

const { articleDetail } = useArticleStore();
const { isLight } = useGlobalStore();
const content = ref(articleDetail.value?.articleContent ?? '');
console.log('content: ' + content.value);
</script>

<style scoped></style>
