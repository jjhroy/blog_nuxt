<template>
  <div class="max-w-[1248px] mx-auto">
    <div class="my-3 flex max-[1248px]:flex-col px-3">
      <section class="flex items-center font-semibold">
        <span class="text-[13px] mr-2 cursor-pointer"> 数据来源: </span>
        <a
          href="https://www.vilipix.com/"
          target="_blank"
          class="hover:text-[#3B82F6] text-[24px]"
        >
          vilipix
        </a>
      </section>

      <span class="text-[#999] text-[12px] min-[1248px]:ml-auto">
        免责声明：本站部分内容来源于网络，图片版权属于原作者，本站转载仅供大家交流学习，切勿用于任何商业用途。
      </span>
    </div>

    <div class="relative overflow-hidden h-[54px]">
      <ul
        ref="tagListRef"
        class="absolute left-3 inline-flex items-center gap-x-2 w-full overflow-x-scroll transition-all"
      >
        <li
          v-for="{ zh, title } in tagList"
          class="rounded-md"
          :style="{ background: randomBackgroundColor() }"
        >
          <a
            class="flex items-center max-w-[200px] text-center px-6 text-[#fff] min-h-[54px]"
            :href="`https://www.vilipix.com/tags/${zh}/illusts`"
            target="_blank"
          >
            <div class="truncate">
              <p class="w-full truncate text-[14px] leading-[22px] font-bold">
                {{ title }}
              </p>
              <p class="w-full truncate text-[12px] leading-5">{{ zh }}</p>
            </div>
          </a>
        </li>
      </ul>

      <div
        class="absolute right-0 top-[50%] transform translate-y-[-50%] z-222 cursor-pointer"
        @click="leftSlide"
      >
        <Icon class="w-12 h-12" name="ph:caret-circle-right-fill"></Icon>
      </div>
    </div>

    <ul class="flex flex-wrap max-[1248px]:mt-3 mt-[36px]">
      <li
        class="gallery-img max-[1248px]:m-[3vw] m-3 flex-shrink-0"
        v-for="img in galleryList"
        :key="img.picture_id"
      >
        <common-custom-image
          :href="`https://www.vilipix.com/illust/${img.picture_id}`"
          target="_blank"
          class="w-full h-full"
          image-class="w-full h-full rounded-[4px] cursor-pointer transition-all ease-in-out hover:scale-105"
          :src="img.regular_url"
          :title="img.title"
          :alt="img.title"
          :loading="'lazy'"
        />
        <!-- <p
          class="text-[13px] leading-4 text-center font-semibold antialiased truncate mt-4"
        >
          {{ img.title }}
        </p> -->
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useGalleryStore, galleryStore } from "~~/store/gallery";

const { galleryList, tagList } = useGalleryStore();
const { getGalleryList, getTagList } = galleryStore();
try {
  const limit = _random(10, 20);
  await Promise.allSettled([getTagList(), getGalleryList(limit)]);
} catch (error) {
  console.log("获取数据失败", error);
}
const tagListRef = ref();

const leftSlide = () => {
  tagListRef.value.scrollLeft += 1200;
  console.log("ref", tagListRef.value.scrollLeft);
};

const randomBackgroundColor = () =>
  `hsla(${Math.floor(Math.random() * 10)}${Math.floor(
    Math.random() * 10
  )}${Math.floor(Math.random() * 10)},80%,50%,1)`;
</script>

<style scoped lang="scss">
.gallery-img {
  width: 184px;
  height: 184px;
  border-radius: 4px;
  @media (max-width: 640px) {
    width: 44vw;
    height: 44vw;
  }
  @media (max-width: 1024px) {
    width: 27.3333333333333333333vw;
    height: 27.3333333333333333333vw;
  }
  @media (max-width: 1248px) {
    width: 19vw;
    height: 19vw;
  }
}
</style>
