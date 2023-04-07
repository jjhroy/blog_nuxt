<template>
  <div :class="isLight ? '' : 'dark'">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { useGlobalStore } from "~~/store/global";
const { isLight } = useGlobalStore();
</script>
