<template>
  <div class="flex-grow">
    <div class="m-auto flex max-w-300">
      <HomeVisitorCard></HomeVisitorCard>
      <HomeArticleList class="mx-auto"></HomeArticleList>
    </div>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  console.log('device', getDeviceInfo());
});
</script>

<style scoped></style>
