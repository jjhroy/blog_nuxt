<template>
  <section class="w-[890px]">
    <div class="rounded-xl bg-[#fff] dark:bg-black px-7 py-8 shadow-around">
      <NuxtImg
        :src="articleDetail?.articleCover ?? DEFAULT_ARTICLE_IMG"
        class="rounded-md w-full min-h-[390px] max-h-[420px]"
        quality="80" />
      <MdPreview
        class="article-content"
        show-code-row-number
        :theme="isLight ? 'light' : 'dark'"
        code-theme="github"
        :editorId="id"
        :modelValue="content" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useGlobalStore } from '~~/store/global';
import { useArticleStore } from '~~/store/article';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';
import { DEFAULT_ARTICLE_IMG } from '~~/configs/const';

const id = 'preview-only';
const { articleDetail } = useArticleStore();
const { isLight } = useGlobalStore();
const content = ref(articleDetail.value?.articleContent ?? '');
</script>
