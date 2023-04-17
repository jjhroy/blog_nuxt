<template>
  <div class="mx-auto mt-20">
    <div class="w-[1280px] flex gap-x-6">
      <div class="flex-[0.8]">
        <div class="text-center">
          <span class="font-semibold text-[26px]">{{
            articleDetail?.articleTitle
          }}</span>
        </div>
        <MdEditor
          class="article-content"
          v-model="articleContent"
          preview-only
        />
      </div>
      <div class="flex-[0.2]">
        <ClientOnly>
          <ArticleCatalogCard
            class="sticky top-5 right-0 min-w-[200px]"
          ></ArticleCatalogCard>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { articleDetails } from "~/types/api/article";

const route = useRoute();
const { data: articleDetail } = getApi<articleDetails>(
  `/articles/${route.params.id}`
);
const articleContent = ref("");
// const articleDetail = ref<articleDetails>({})
onMounted(() => {
  articleContent.value = articleDetail.value?.articleContent ?? "";
  useHead({
    title: articleDetail.value?.articleTitle,
  });
});
</script>

<style scoped></style>
