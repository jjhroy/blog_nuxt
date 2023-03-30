<template>
  <div :style="`width: ${size ?? 80}px;height: ${size ?? 80}px`">
    <img :src="src" class="w-full h-full" :class="{ 'rounded-[50%]': round }" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  /**
   * 图片路径
   */
  src: string;
  /**
   * 图片大小
   */
  size?: number;
  /**
   * 圆角
   */
  round?: boolean;
}>();
</script>
