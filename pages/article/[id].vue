<template>
  <div class="mx-auto mt-20 flex gap-x-10">
    <!-- <ClientOnly>
      <ArticleCatalogCard
        class="sticky top-5 min-w-[200px]"
      ></ArticleCatalogCard>
    </ClientOnly> -->
    <div class="w-[800px]">
      <MdEditor class="article-content" v-model="articleContent" preview-only />
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
});
</script>

<style scoped></style>
