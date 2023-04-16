<template>
  <div :class="isLight ? '' : 'dark'">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
    <MongoUiBacktop class="fixed bottom-20 right-20"></MongoUiBacktop>
  </div>
</template>
<script setup lang="ts">
import { useGlobalStore } from "~~/store/global";
const { isLight } = useGlobalStore();

useHead({
  title: "Mongo Blog",
});
</script>
