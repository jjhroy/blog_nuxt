<template>
  <button :class="`${props.type}Style`">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: string;
    color?: string;
    rounded?: boolean;
    shadow?: boolean;
  }>(),
  {
    type: "default",
    color: "#fff",
    rounded: false,
    shadow: false,
  }
);
</script>

<style scoped lang="scss">
.primaryStyle {
  @apply bg-[#409EFF] text-[#fff]  py-2 px-4 text-[14px] shadow-around rounded-lg min-w-[64px];
}
.defaultStyle {
  @apply bg-[#fff] shadow-md py-2 px-4 text-[14px] rounded-lg min-w-[64px];
}
.circleStyle {
  @apply bg-[#fff] shadow-md py-2 px-2 text-[14px] rounded-[50%] w-[40px] h-[40px];
}
</style>
