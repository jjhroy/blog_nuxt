<template>
  <div class="flex flex-grow h-[100vh]">
    <div class="m-auto text-[26px] font-semibold text-[#1a1a1a]">
      404Page
      <!-- <TypeIt
        :values="['Mongo Blog']"
        :cursor="false"
        :speed="150"
        class="text-[#ffffff] text-5xl font-semibold absolute"
      /> -->
      <div>{{ object.output }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import TypeIt from "typeit";
import EasyTyper from "easy-typer-js";

const object = ref({
  output: "",
  isEnd: false,
  speed: 200,
  singleBack: false,
  sleep: 1,
  type: "rollback",
  backSpeed: 140,
  sentencePause: false,
});

const callBack = (instance: EasyTyper) => {
  instance.input = [`天不生我彭小呆，万古长青一生狂！`];
  instance.play();
};

onMounted(() => {
  const typed = new EasyTyper(
    object.value,
    `我将要被打字机输出`,
    callBack,
    () => {}
  );
});
</script>

<style scoped></style>
