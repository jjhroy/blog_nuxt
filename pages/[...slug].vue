<template>
  <div class="m-auto">
    <ContentDoc v-slot="{ doc }">
      <article class="prose dark:text-[#fff]">
        <h1>{{ doc.title }}</h1>
        <h3>{{ doc.description }}</h3>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
