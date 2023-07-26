<template>
  <div
    class="fixed left-0 top-0 w-full h-screen z-[99999] flex justify-center items-center"
    style="background-color: rgba(0, 0, 0, 0.4)"
    @click.stop="test"></div>
  <div
    v-if="show"
    class="min-w-[300px] min-h-[140px] bg-white rounded-lg z-[999999] absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2"
    :class="show ? 'animate-open' : 'animate-close'">
    <slot :="props" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  onClose: () => void;
}>();
const show = ref(true);
const test = () => {
  console.log('test');
  show.value = false;
  props?.onClose();
};
onMounted(() => {
  console.log('1', props);
});
</script>
<style scoped lang="scss">
.animate-open {
  animation: open 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.animate-close {
  animation: close 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
}

@keyframes open {
  from {
    transform: scale(0.8);
    transform: translate(-100%, 100%);
  }
  to {
    transform: scale(1);
    transform: translate(-50%, -50%);
  }
}

@keyframes close {
  from {
    transform: scale(1);
    transform: translate(-50%, -50%);
  }
  to {
    transform: scale(0.8);
    transform: translate(-100%, 100%);
  }
}
</style>
