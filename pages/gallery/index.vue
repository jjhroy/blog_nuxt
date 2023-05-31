<template>
  <div class="w-[1204px] mx-auto">
    <div class="my-3 flex items-end">
      <span
        class="text-[13px] mr-2 cursor-pointer"
        @click="refresh()">
        数据来源:
      </span>
      <a
        href="https://www.vilipix.com/"
        class="hover:text-[#3B82F6]">
        vilipix
      </a>
      <span class="text-[#999] text-[12px] ml-auto">
        免责声明：本站部分内容来源于网络，图片版权属于原作者，本站转载仅供大家交流学习，切勿用于任何商业用途
      </span>
    </div>
    <ul class="flex flex-wrap gap-x-5">
      <li
        v-for="img in imgList?.data.rows"
        :key="img.picture_id">
        <a
          class="w-[184px] flex flex-col transition-all ease-linear hover:scale-105"
          :href="`https://www.vilipix.com/illust/${img.picture_id}`"
          target="_blank">
          <NuxtImg
            class="w-full h-[184px] object-cover rounded-md flex-shrink-0"
            quality="80"
            :src="img.regular_url" />
          <span
            class="text-[13px] leading-4 text-center font-semibold antialiased truncate my-4">
            {{ img.title }}
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { IVilipixImgList } from '~~/interface/gallery/index';

const limit = ref(_random(10, 20));

const { data: imgList, refresh } = await useAsyncData<IVilipixImgList>(
  'gallery',
  () =>
    $fetch(`https://www.vilipix.com/api/v1/picture/recommand`, {
      query: {
        limit: limit.value,
        offset: 1,
      },
    }),
);
</script>
