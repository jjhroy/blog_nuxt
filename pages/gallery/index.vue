<template>
  <div class="w-[1204px] mx-auto">
    <div class="my-3 flex items-end">
      <span class="text-[13px] mr-2 cursor-pointer"> 数据来源: </span>
      <a href="https://www.vilipix.com/" class="hover:text-[#3B82F6]">
        vilipix
      </a>
      <span class="text-[#999] text-[12px] ml-auto">
        免责声明：本站部分内容来源于网络，图片版权属于原作者，本站转载仅供大家交流学习，切勿用于任何商业用途
      </span>
    </div>

    <div class="relative overflow-hidden h-[54px]">
      <ul class="inline-flex items-center gap-x-2 w-full overflow-x-scroll">
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
    </div>

    <ul class="flex flex-wrap gap-x-5 mt-[45px]">
      <li v-for="img in galleryList" :key="img.picture_id">
        <a
          class="w-[184px] flex flex-col transition-all ease-linear hover:scale-105"
          :href="`https://www.vilipix.com/illust/${img.picture_id}`"
          target="_blank"
        >
          <common-custom-image
            :src="img.regular_url"
            :alt="img.title"
            :loading="'lazy'"
            class="bg-light-200"
            image-class="w-full h-full rounded-sm cursor-pointer"
          />
          <!-- <NuxtImg
            class="w-full h-[184px] object-cover rounded-md flex-shrink-0"
            quality="80"
            :src="img.regular_url"
          /> -->
          <span
            class="text-[13px] leading-4 text-center font-semibold antialiased truncate my-4"
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
const randomBackgroundColor = () =>
  `hsla(${Math.floor(Math.random() * 10)}${Math.floor(
    Math.random() * 10
  )}${Math.floor(Math.random() * 10)},80%,50%,1)`;

try {
  await Promise.allSettled([getTagList(), getGalleryList()]);
} catch (error) {
  console.log("获取数据失败", error);
}
</script>
