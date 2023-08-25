<template>
  <div class="w-[1248px] mx-auto">
    <div class="my-3 flex items-end px-3">
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

      <span class="text-[#999] text-[12px] ml-auto">
        免责声明：本站部分内容来源于网络，图片版权属于原作者，本站转载仅供大家交流学习，切勿用于任何商业用途
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

    <ul class="flex flex-wrap mt-[36px]">
      <li class="m-3" v-for="img in galleryList" :key="img.picture_id">
        <a
          class="w-[184px] flex flex-col transition-all ease-in-out hover:scale-105"
          :href="`https://www.vilipix.com/illust/${img.picture_id}`"
          target="_blank"
        >
          <common-custom-image
            :src="img.regular_url"
            :alt="img.title"
            :loading="'lazy'"
            class="bg-light-200 w-[184px] h-[184px] rounded-[4px]"
            image-class="w-full h-full rounded-[4px] cursor-pointer"
          />
          <!-- <NuxtImg
            class="w-full h-[184px] object-cover rounded-md flex-shrink-0"
            quality="80"
            :src="img.regular_url"
          /> -->
          <span
            class="text-[13px] leading-4 text-center font-semibold antialiased truncate mt-4"
          >
            {{ img.title }}
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useGalleryStore, galleryStore } from "~~/store/gallery";

const { galleryList, tagList } = useGalleryStore();
const { getGalleryList, getTagList } = galleryStore();
try {
  await Promise.allSettled([getTagList(), getGalleryList()]);
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
