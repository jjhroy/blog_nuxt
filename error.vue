<template>
  <div class="flex flex-grow h-[100vh]">
    <div
      class="m-auto text-[26px] font-semibold text-[#1a1a1a] flex flex-col gap-y-4">
      <div class="text-center">404Page</div>
      <div>{{ object.output }}</div>
      <div class="text-center">
        <button
          class="bg-[#1a1a1a] hover:bg-[#1a1a1a] text-[#fff] font-semibold py-2 px-4 rounded text-[12px]"
          @click="$router.push('/')">
          Go Back
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import TypeIt from "typeit";
import EasyTyper from 'easy-typer-js';

const object = ref({
  output: '',
  isEnd: false,
  speed: 200,
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

onMounted(() => {
  const typed = new EasyTyper(
    object.value,
    `嘿！你小可爱的还真是个人才`,
    callBack,
    () => {},
  );
});
</script>
