<template>
  <main>
    <ContentDoc path="/">
      <template v-slot="{ doc }">
        <h1>{{ doc.title }}</h1>
        {{ doc }}
        <ContentRenderer :value="doc" />
      </template>
      <template #not-found>
        <h1>Document not found</h1>
      </template>
    </ContentDoc>
    <!-- <ContentRenderer :value="articleDetail?.articleContent" /> -->
  </main>
</template>
<script setup lang="ts">
const route = useRoute();
console.log("path", route.path.split("/content"));
// const { data: articleDetail, refresh } = getApi("/articles/136");
</script>
