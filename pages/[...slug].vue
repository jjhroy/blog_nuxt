<template>
  <div class="mx-auto mt-20">
    <article class="prose lg:prose-xl">
      <ContentDoc :path="route.path.split('/content')[1]">
        <template v-slot="{ doc }">
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </template>
        <template #not-found>
          <h1>Document not found</h1>
        </template>
      </ContentDoc>
    </article>
  </div>
  <main>
    <!-- <ContentRenderer :value="articleDetail?.articleContent" /> -->
  </main>
</template>
<script setup lang="ts">
const route = useRoute();
console.log("path", route.path.split("/content"));
// const { data: articleDetail, refresh } = getApi("/articles/136");
</script>
