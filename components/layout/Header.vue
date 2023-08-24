<template>
  <header
    class="flex items-center justify-between mobile:p-6 p-4 text-[#999] dark:bg-[#1a1a1a]"
  >
    <NuxtLink
      to="/"
      class="left-4 font-semibold hover:text-[#1a1a1a] dark:hover:text-[#42b883] mobile:text-[16px] text-[14px]"
      :class="{ 'text-[#1a1a1a] dark:text-[#42b883]': currentRoute === '/' }"
      @click="currentRoute = '/'"
    >
      Bochi
    </NuxtLink>
    <nav class="flex mobile:text-[16px] text-[14px]">
      <div class="flex mobile:gap-x-5 gap-x-2 items-center font-sans">
        <!-- <div
          class="border-b border-[#1a1a1a] h-6 group flex items-center justify-start hover:w-[180px] transition-all duration-500 relative">
          <Icon
            name="iconamoon:search-bold"
            size="18"
            class="mr-2"></Icon>
          <input
            class="outline-none bg-transparent w-[120px] h-5 text-[14px] opacity-0 transition-all duration-500 group-hover:opacity-100"
            placeholder="请输入关键词" />
        </div> -->
        <!-- <div @click="searchModal">
          <Icon
            name="iconamoon:search-bold"
            size="24"
            class="cursor-pointer"></Icon>
        </div> -->
        <NuxtLink
          v-for="{ name, path } in navigationList"
          :key="`${path}${name}`"
          :to="path"
          class="left-4 font-semibold hover:text-[#1a1a1a] dark:hover:text-[#42b883]"
          :class="{
            'text-[#1a1a1a] dark:text-[#42b883]': currentRoute === path,
          }"
          @click="currentRoute = path"
        >
          {{ name }}
        </NuxtLink>
        <a target="_blank" href="https://github.com/jjhroy">
          <Icon
            name="mingcute:github-line"
            size="24"
            class="hover:text-[#1a1a1a] dark:hover:text-gray-500"
          ></Icon>
        </a>
        <span @click="changeTheme">
          <Icon
            :name="isLight ? 'ph:sun-bold' : 'ph:moon-bold'"
            size="20"
            class="cursor-pointer hover:text-[#1a1a1a] dark:hover:text-gray-500 hover:animate-spin"
          ></Icon>
        </span>
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { useGlobalStore, globalStore } from "~~/store/global";
import SearchForm from "../common/SearchForm.vue";

const { isLight } = useGlobalStore();
const { changeTheme, showSearchModal } = globalStore();
const route = useRoute();
const currentRoute = ref(String(route.path));

const navigationList = [
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Navigation",
    path: "/navigation",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "About",
    path: "/about",
  },
];

const searchModal = () => {
  return useModal({
    wrapperComponent: SearchForm,
    props: {
      maskClose: true,
      onRemove: () => {
        showSearchModal();
      },
    },
  });
};
</script>
