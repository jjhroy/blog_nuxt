<template>
  <!--文章列表-->
  <div class="flex flex-col">
    <!-- <div
      class="flex items-center gap-x-[6px] text-[18px] leading-6 mt-16 <notebook:mt-6 mb-4">
      <div class="text-[#3B82F6] font-semibold">文章</div>
      <div class="text-5xl font-extrabold ...">
        <span
          class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Articles
        </span>
      </div>
    </div> -->
    <div
      v-for="(item, index) in newestArticleList"
      :key="index">
      {{ item.year }}
      <CommonArticleCard
        v-for="(article, _index) in item.recordList"
        :key="_index"
        :article="article"
        ref="scrollComponent"
        class="mt-4" />
    </div>

    <div v-show="!isEnd">
      <div
        v-if="!isLoading"
        @click="loadMore"
        class="my-10 cursor-pointer text-[#1a1a1a] text-[14px] text-opacity-60 font-semibold hover:text-opacity-90">
        加载更多
      </div>
      <CommonLoadMore
        class="my-10"
        v-else></CommonLoadMore>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import { articleList, articles, articleShowList } from '~/types/api/article';
import { archives, archiveShowList } from '~/types/api/blog';
import { useArticleStore, articleStore } from '~~/store/article';

const isLoading = ref(false);
const { getArticleList } = articleStore();
const { isEnd, articleList, currentPage } = useArticleStore();

try {
  currentPage.value = 1;
  await Promise.allSettled([getArticleList([])]);
} catch {
  showMessage.error('获取文章失败');
}

const articleListBack = ref<articles[]>();

// 初始化文章数据
const newestArticleList = computed(() => {
  if (articleList.value.length === 0) return [];
  // 定义空数组，用于存储新组装的数据
  const newArr = [] as articleShowList[];
  const _articleList = articleList.value ?? [];
  articleListBack.value = articleList.value ?? [];
  // 遍历数组
  _articleList.forEach((item, i) => {
    // 默认当前操作的数据下标 -1
    let index = -1;
    // 判断数组中是否已经存在当前遍历数据的时间
    const isExists = newArr.some((newItem, j) => {
      if (parseInt(dayjs(item.createTime).year().toString()) === newItem.year) {
        // 存在就保存当前数据下标  用于插入数据
        index = j;
        return true;
      }
    });
    // 如果没有就存储一条新对象数据
    if (!isExists) {
      newArr.push({
        year: parseInt(dayjs(item.createTime).year().toString()),
        recordList: [item],
      });
    } else {
      // 如果有就插入到已存在的对象中
      newArr[index].recordList.push(item);
    }
  });
  return newArr;
});

const loadMore = async () => {
  isLoading.value = true;
  setTimeout(() => {
    currentPage.value += 1;
    getArticleList(articleListBack.value ?? []);
    isLoading.value = false;
  }, 500);
};
</script>
<style scoped>
.title-bg {
  background: linear-gradient(269.68deg, #4c72f9 0%, #4e89fb 99.89%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  opacity: 0.2;
}
</style>
