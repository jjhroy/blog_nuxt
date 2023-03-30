<template>
  <div class="p-4 bg-[#fff] shadow-xl rounded-lg flex flex-col">
    <div class="flex items-center text-[16px] font-semibold">
      <slot name="head"> </slot>
    </div>
    <slot name="body"></slot>
    <slot name="foot"></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
})
</script>
