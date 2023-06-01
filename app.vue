<template>
  <div
    :class="{ dark: !isLight, 'main-move': isSearch }"
    class="transition-all">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
      <MongoUiBacktop class="fixed bottom-[130px] right-20" />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { useGlobalStore } from '~~/store/global';

const { isLight, isSearch } = useGlobalStore();
</script>
