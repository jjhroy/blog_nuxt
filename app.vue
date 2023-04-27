<template>
  <div :class="isLight ? '' : 'dark'">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
      <MongoUiBacktop class="fixed bottom-[130px] right-20" />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { useGlobalStore } from '~~/store/global';

const { isLight } = useGlobalStore();
</script>
