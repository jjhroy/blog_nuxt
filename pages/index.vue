<template>
  <div class="flex-grow flex">
    <div class="m-auto flex flex-col">
      <HomeCodingCat class="mx-auto"></HomeCodingCat>
      <div class="text-[40px] leading-10 font-semibold text-[#2a2a2a] text-center h-[40px]">
        <div>{{ object.output }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import EasyTyper from 'easy-typer-js';

import { globalStore, useGlobalStore } from '~~/store/global';

const { getVisitorAddress, getVisitorIp } = globalStore();
const { visitorAddress } = useGlobalStore();

try {
  await Promise.allSettled([getVisitorIp(), getVisitorAddress()]);
} catch (error) {
  showMessage.error('获取地址失败');
}

const object = ref({
  output: '',
  isEnd: false,
  speed: 150,
  singleBack: false,
  sleep: 1,
  type: 'rollback',
  backSpeed: 140,
  sentencePause: false,
});

const callBack = async (instance: EasyTyper) => {
  const content = await useFetch('https://v1.hitokoto.cn/?c=i');
  //@ts-ignore
  instance.input = [content.data.value.hitokoto];
  instance.play();
};

useHead({
  meta: [
    {
      property: 'og:image',
      name: 'icon',
      content: 'https://img.amz123.com/upload/index/amz123_top_logo.svg',
    },
  ],
});

onMounted(() => {
  new EasyTyper(object.value, `欢迎你，来自${visitorAddress.value.split(' ')[0]}的朋友`, callBack, () => {});
});
</script>
