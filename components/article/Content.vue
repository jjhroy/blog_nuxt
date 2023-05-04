<template>
  <section class="w-[890px]">
    <div class="rounded-xl bg-[#fff] dark:bg-black p-10 shadow-around">
      <MdEditor
        class="article-content"
        v-model="articleContent"
        :theme="isLight ? 'light' : 'dark'"
        preview-only />
    </div>
  </section>
</template>

<script setup lang="ts">
import MdEditor from 'md-editor-v3';
import { useGlobalStore } from '~~/store/global';

const props = defineProps<{ content: string }>();
const articleContent = ref(props.content);
const { isLight } = useGlobalStore();
</script>

<style scoped></style>
