<template>
  <header class="flex items-center justify-between mobile:p-6 p-4 text-gray-500 dark:text-[#fff] dark:bg-black">
    <NuxtLink
      to="/"
      class="left-4 font-semibold hover:text-[#1a1a1a] dark:hover:text-gray-500 mobile:text-[16px] text-[14px]"
      :class="{ 'text-[#1a1a1a]': currentRoute === 0 }"
      @click="currentRoute = 0">
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
          to="/blog"
          class="left-4 font-semibold hover:text-[#1a1a1a] dark:hover:text-gray-500"
          :class="{ 'text-[#1a1a1a]': currentRoute === 1 }"
          @click="currentRoute = 1">
          Blog
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="left-4 font-semibold hover:text-[#1a1a1a] dark:hover:text-gray-500"
          :class="{ 'text-[#1a1a1a]': currentRoute === 2 }"
          @click="currentRoute = 2">
          About
        </NuxtLink>
        <NuxtLink
          to="/navigation"
          class="left-4 font-semibold hover:text-[#1a1a1a] dark:hover:text-gray-500"
          :class="{ 'text-[#1a1a1a]': currentRoute === 3 }"
          @click="currentRoute = 3">
          Navigation
        </NuxtLink>
        <NuxtLink
          to="/gallery"
          class="left-4 font-semibold hover:text-[#1a1a1a] dark:hover:text-gray-500"
          :class="{ 'text-[#1a1a1a]': currentRoute === 4 }"
          @click="currentRoute = 4">
          Gallery
        </NuxtLink>
        <a
          target="_blank"
          href="https://github.com/jjhroy">
          <Icon
            name="mingcute:github-line"
            size="24"
            class="hover:text-[#1a1a1a] dark:hover:text-gray-500"></Icon>
        </a>
        <span @click="changeTheme">
          <Icon
            :name="isLight ? 'ph:sun-bold' : 'ph:moon-bold'"
            size="20"
            class="cursor-pointer hover:text-[#1a1a1a] dark:hover:text-gray-500 hover:animate-spin"></Icon>
        </span>
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { useGlobalStore, globalStore } from '~~/store/global';
import SearchForm from '../common/SearchForm.vue';

const { isLight } = useGlobalStore();
const { changeTheme, showSearchModal } = globalStore();
const currentRoute = ref(0);

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
