<template>
  <div class="rounded-xl bg-[#fff] dark:bg-gray-900 py-4 px-6 shadow-around flex flex-col gap-y-3">
    <div class="flex justify-between text-[15px]">
      <div class="text-gray-400 flex items-center gap-x-1">
        <Icon name="icon-park-outline:calendar"></Icon>
        发布时间
      </div>
      <div class="text-[#1a1a1a] dark:text-[#fff]">
        {{ formatDate(articleDetail?.createTime ?? new Date(), 'YYYY-MM-DD') }}
      </div>
    </div>
    <div class="flex justify-between text-[15px]">
      <div class="text-gray-400 flex items-center gap-x-1">
        <Icon name="icon-park-outline:calendar"></Icon>
        最近更新
      </div>
      <div class="text-[#1a1a1a] dark:text-[#fff]">
        {{ formatDate(articleDetail?.updateTime ?? new Date(), 'YYYY-MM-DD') }}
      </div>
    </div>
    <div class="flex justify-between text-[15px]">
      <div class="text-gray-400 flex items-center gap-x-1">
        <Icon name="bx:bxs-category"></Icon>
        分类
      </div>
      <div class="text-[#1a1a1a] dark:text-[#fff]">
        {{ articleDetail?.categoryName }}
      </div>
    </div>
    <div class="flex justify-between text-[15px]">
      <div class="text-gray-400 flex items-center gap-x-1">
        <Icon name="bx:bxs-purchase-tag"></Icon>
        标签
      </div>
      <div class="flex gap-x-2">
        <span
          class="text-[#1a1a1a] dark:text-[#fff] bg-[#F0F5FF] text-[13px] leading-4 rounded-md px-2 py-[2px] cursor-pointer"
          v-for="{ tagName, id } in articleDetail?.tagDTOList"
          :key="id">
          {{ tagName }}
        </span>
      </div>
    </div>
    <div class="flex justify-between text-[15px]">
      <div class="text-gray-400 flex items-center gap-x-1">
        <Icon name="iconamoon:eye-fill"></Icon>
        浏览量
      </div>
      <div class="text-[#1a1a1a] dark:text-[#fff]">
        {{ articleDetail?.viewsCount }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useArticleStore } from '~~/store/article';
import { formatDate } from '~~/composables/index';

const { articleDetail } = useArticleStore();
</script>
<style scoped></style>
