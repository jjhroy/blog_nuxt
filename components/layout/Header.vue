<template>
  <header
    class="flex items-center justify-between mobile:p-6 p-6 text-gray-500 dark:text-[#fff] dark:bg-black">
    <NuxtLink
      to="/"
      class="left-4 font-semibold hover:text-[#1a1a1a] dark:hover:text-gray-500">
      Welcome!
    </NuxtLink>
    <nav class="flex mobile:text-[16px] text-[15px]">
      <div class="flex mobile:gap-x-5 gap-x-3 items-center font-sans">
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
        <NuxtLink
          to="/blog"
          class="left-4 font-semibold hover:text-[#1a1a1a] dark:hover:text-gray-500">
          Blog
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="left-4 font-semibold hover:text-[#1a1a1a] dark:hover:text-gray-500">
          About
        </NuxtLink>
        <NuxtLink
          to="/navigation"
          class="left-4 font-semibold hover:text-[#1a1a1a] dark:hover:text-gray-500">
          Navigation
        </NuxtLink>
        <NuxtLink
          to="/gallery"
          class="left-4 font-semibold hover:text-[#1a1a1a] dark:hover:text-gray-500">
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

const { isLight } = useGlobalStore();
const { changeTheme } = globalStore();
</script>
