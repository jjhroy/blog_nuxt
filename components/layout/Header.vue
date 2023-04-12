<template>
  <header
    class="flex justify-between p-8 text-gray-500 dark:text-[#fff] dark:bg-black"
  >
    <div class="text-24px font-semibold">Roy Blog</div>
    <nav class="flex">
      <div class="flex gap-x-5 items-center font-sans">
        <NuxtLink
          to="/"
          class="text-20px left-4 font-semibold hover:text-[#1a1a1a] dark:hover:text-gray-500"
        >
          Blog
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="text-20px left-4 font-semibold hover:text-[#1a1a1a] dark:hover:text-gray-500"
        >
          About Me
        </NuxtLink>
        <!-- <NuxtLink
          to="/changelog"
          class="text-20px left-4 font-semibold hover:text-[#1a1a1a] dark:hover:text-gray-500"
        >
          Changelog
        </NuxtLink> -->
        <a target="_blank" href="https://github.com/jjhroy">
          <Icon
            name="mingcute:github-line"
            size="24"
            class="hover:text-[#1a1a1a] dark:hover:text-gray-500"
          ></Icon>
        </a>
        <span @click="isLight = !isLight">
          <Icon
            :name="isLight ? 'ph:sun-bold' : 'ph:moon-bold'"
            size="20"
            class="cursor-pointer hover:text-[#1a1a1a] dark:hover:text-gray-500"
          ></Icon>
        </span>
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { useGlobalStore } from "~~/store/global";
const { isLight } = useGlobalStore();
</script>
