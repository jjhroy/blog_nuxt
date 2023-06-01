<template>
  <div
    class="fixed left-0 top-0 w-full h-screen z-[99999] flex justify-center items-center"
    style="background-color: rgba(0, 0, 0, 0.4)">
    <div
      v-if="show"
      :class="show ? 'animate-open' : 'animate-close'">
      <slot :="props" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ onClose: () => void }>();
const show = ref(true);

watch([show], () => {
  if (show.value === false) {
    props?.onClose();
  }
});

provide('_use_modal_show_', show);
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
  }
  to {
    transform: scale(1);
  }
}

@keyframes close {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.8);
  }
}
</style>
