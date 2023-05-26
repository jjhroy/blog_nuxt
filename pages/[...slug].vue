<template>
  <div class="m-auto">
    <ContentDoc v-slot="{ doc }">
      <article class="dark:text-[#fff] prose prose-slate">
        <ContentDoc v-slot="{ doc }">
          <ContentRenderer :value="doc">
            <ContentRendererMarkdown :value="doc" />
          </ContentRenderer>
        </ContentDoc>
      </article>
    </ContentDoc>
    <!-- <ContentRenderer :value="data">
      <ContentRendererMarkdown :value="data" />
    </ContentRenderer> -->
  </div>
</template>

<script setup lang="ts">
// const { data } = await useAsyncData('page-data', () =>
//   queryContent('/talk/1').findOne(),
// );
</script>

<style scoped></style>
