<template>
  <div :class="isLight ? '' : 'dark'">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
      <MongoUiBacktop class="fixed bottom-20 right-20" />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { useGlobalStore } from "~~/store/global";

const { isLight } = useGlobalStore();

useHead({
  title: "Mongo Blog",
  meta: [
    {
      "http-equiv": "Content-Security-Policy",
      content: "upgrade-insecure-requests",
    },
  ],
});
</script>
