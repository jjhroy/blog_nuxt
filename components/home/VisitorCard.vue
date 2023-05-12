<template>
  <div>
    <p>{{ object.output }}</p>
    <p class="flex items-center gap-x-1">
      <span>{{ visitorInfo.os.name }}</span>
      <Icon :name="visitorInfo.os.icon"></Icon>
    </p>
    <p class="flex items-center gap-x-1">
      <span>{{ visitorInfo.browser.name }}</span>
      <Icon :name="visitorInfo.browser.icon"></Icon>
    </p>
  </div>
</template>

<script setup lang="ts">
import EasyTyper from 'easy-typer-js';

const object = ref({
  output: '',
  isEnd: false,
  speed: 50,
  singleBack: false,
  sleep: 1,
  type: 'custom',
  backSpeed: 140,
  sentencePause: false,
});

const visitorInfo = getDeviceInfo();

const callBack = async (instance: EasyTyper) => {
  //   const content = await useFetch('https://v1.hitokoto.cn/?c=i');
  //   //@ts-ignore
  instance.input = ['OS: MacOS\n'];
  instance.close();
};

onMounted(() => {
  const typed = new EasyTyper(
    object.value,
    `Hello traveler,welcome to my blog`,
    callBack,
    () => {},
  );
});
</script>
