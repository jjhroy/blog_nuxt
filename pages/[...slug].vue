<template>
  <div class="m-auto flex">
    <article class="dark:text-[#fff] prose prose-slate">
      <ContentRenderer :value="article">
        <h1>{{ article?.title }}</h1>
        <ContentRendererMarkdown
          v-if="article"
          class="article-content"
          :value="article" />
      </ContentRenderer>
    </article>
    <ClientOnly>
      <ArticleCatalogCard />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ParsedContentMeta } from "@nuxt/content/dist/runtime/types";

const article = ref<ParsedContentMeta>();
const route = useRoute();
try {
  article.value = await queryContent(route.fullPath).findOne();
} catch (error) {
  redirectTo404Page();
}
</script>
