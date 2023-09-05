<template>
  <component
    :is="href ? 'a' : 'div'"
    ref="container"
    class="flex flex-col justify-center items-center"
  >
    <NuxtImg
      v-if="(imageSrc || !isLazy) && !isError"
      :src="imageSrc || src"
      :alt="alt"
      :class="imageClass"
      :style="imageStyle"
      :loading="loading"
      @load="handleLoad"
      @error="handleError"
    />
    <div
      v-if="isLazy && isLoading && !imageSrc && !isError"
      class="flex justify-center items-center"
      :class="imageClass"
    >
      <Icon name="line-md:loading-twotone-loop" class="w-8 h-8" />
    </div>
    <div
      v-if="isError"
      class="flex flex-col justify-center items-center text-[#a8abb2]"
      :class="imageClass"
    >
      <Icon name="icon-park-outline:error-picture" class="w-8 h-8" />
      <p class="mt-3 text-[14px]">抱歉,加载失败了</p>
    </div>
  </component>
</template>

<script setup lang="ts">
import { CSSProperties } from "vue";

const props = withDefaults(
  defineProps<{
    src: string;
    alt?: string;
    title?: string;
    href?: string;
    target?: string;
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
const isError = ref(false);
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

const handleError = () => {
  isError.value = true;
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
