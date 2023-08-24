<template>
  <div ref="container" class="flex justify-center items-center">
    <img
      v-if="imageSrc || !isLazy"
      :src="imageSrc || src"
      :alt="alt"
      :class="imageClass"
      :style="imageStyle"
      :loading="loading"
      @load="handleLoad"
    />
    <div v-if="isLazy && isLoading && !imageSrc">
      <slot name="placeholder">
        <div class="flex justify-center items-center" :class="imageClass">
          <Icon name="line-md:loading-twotone-loop" class="w-8 h-8" />
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CSSProperties } from "vue";

const props = withDefaults(
  defineProps<{
    src: string;
    alt?: string;
    loading?: "lazy" | "eager";
    imgContainer?: boolean;
    imageClass?: string;
    imageStyle?: CSSProperties;
  }>(),
  {
    src: "",
    alt: "",
    loading: "eager",
    imageClass: "",
    imgContainer: false,
    imageStyle: (): CSSProperties => ({}),
  }
);

const imageSrc = ref<string | undefined>();
const isLoading = ref(true);
const container = ref<HTMLElement>();

let stopScrollListener: (() => void) | undefined;

const isLazy = computed(() => props.loading === "lazy");

const loadImage = () => {
  if (process.client) {
    // reset status
    isLoading.value = true;
    imageSrc.value = props.src;
  }
};

const handleLoad = () => {
  isLoading.value = false;
};

const isInContainer = (el?: Element): boolean => {
  if (!process.client || !el || !container) return false;

  const elRect = el.getBoundingClientRect();
  const containerRect = {
    top: 0,
    right: window.innerWidth,
    bottom: window.innerHeight + window.scrollY,
    left: 0,
  };

  return (
    elRect.top < containerRect.bottom &&
    elRect.bottom > containerRect.top &&
    elRect.right > containerRect.left &&
    elRect.left < containerRect.right
  );
};

const handleLazyLoad = () => {
  let imgContainerDiv;
  if (props.imgContainer) {
    imgContainerDiv = document.getElementById("img-container") as HTMLElement;
  } else {
    imgContainerDiv = container.value;
  }

  if (isInContainer(imgContainerDiv)) {
    loadImage();
    removeLazyLoadListener();
  }
};

const lazyLoadHandler = useThrottleFn(handleLazyLoad, 200, true);

const addLazyLoadListener = async () => {
  if (process.client) {
    await nextTick();

    if (window) {
      stopScrollListener = useEventListener(window, "scroll", lazyLoadHandler);
      setTimeout(() => handleLazyLoad(), 100);
    }
  }
};

const removeLazyLoadListener = () => {
  if (!process.client || !lazyLoadHandler) return;
  stopScrollListener?.();
};

onMounted(() => {
  if (isLazy.value) {
    addLazyLoadListener();
  } else {
    loadImage();
  }
});
</script>

<style scoped></style>
