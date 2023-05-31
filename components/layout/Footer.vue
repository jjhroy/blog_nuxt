<template>
  <footer
    class="flex flex-col items-center pt-10 pb-6 justify-center text-sm text-[#555] text-opacity-50 gap-x-2 dark:bg-black dark:text-white">
    <div>
      <span>Copyright © 2021-PRESENT ROY</span>
      <a
        href="http://beian.miit.gov.cn/"
        target="_blank">
        闽ICP备2022016505号
      </a>
    </div>

    <div class="mt-2 flex items-center">
      <Icon
        name="vscode-icons:file-type-nuxt"
        size="20"></Icon>
      <a
        href="https://nuxt.com/"
        class="ml-1">
        Nuxt3
      </a>
      <span class="mx-1">and</span>
      <Icon
        name="vscode-icons:file-type-tailwind"
        size="20"></Icon>
      <a
        href="https://tailwindcss.com/"
        class="ml-1">
        Tailwind
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
