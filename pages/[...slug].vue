<template>
  <div class="m-auto">
    <article class="dark:text-[#fff] prose prose-slate">
      <ContentRenderer :value="article">
        <h1>{{ article?.title }}</h1>
        <ContentRendererMarkdown :value="article!" />
      </ContentRenderer>
    </article>
  </div>
</template>

<script setup lang="ts">
import { ParsedContentMeta } from '@nuxt/content/dist/runtime/types';

const article = ref<ParsedContentMeta>();
const route = useRoute();
try {
  article.value = await queryContent(route.fullPath).findOne();
} catch (error) {
  redirectTo404Page();
}
</script>

<style scoped></style>
