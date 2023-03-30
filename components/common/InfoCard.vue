<template>
  <figure class="bg-slate-50 p-4 w-[400px] h-[300px] rounded-lg shadow-md">
    <div class="flex">
      <MongoUiAvatar
        class="-mt-10"
        round
        :size="80"
        src="https://upload.linkstarted.top/config/0918a38bb59fd3ee1cd1a141838c4e37.jpeg"
      />
      <div class="m-2 flex items-center gap-x-2">
        <span
          class="text-base text-slate-900 font-semibold dark:text-slate-300"
        >
          JunHong Jiang
        </span>
        <span class="text-xs text-gray-500"> john roy </span>
      </div>
    </div>

    <!-- <div class="">Amoy</div> -->
    <div class="indent-3 my-3">A Little Rookie Now.</div>
    <ul>
      <li class="mb-1 flex items-center">
        <Icon name="skill-icons:github-dark" size="20"></Icon>
        <a class="underline ml-2" href="https://github.com/jjhroy">Github</a>
      </li>
      <li class="mb-1 flex items-center">
        <Icon name="skill-icons:instagram" size="20"></Icon>
        <a class="underline ml-2" href="https://www.instagram.com/johnroyjjh/"
          >Instagram</a
        >
      </li>
      <li class="mb-1 flex items-center">
        <Icon name="skill-icons:twitter" size="20"></Icon>
        <a class="underline ml-2" href="https://twitter.com/JunhongRoy"
          >Twitter</a
        >
      </li>
      <li class="mb-1 flex items-center">
        <Icon name="ri:bilibili-line" size="20"></Icon>
        <a class="underline ml-2" href="https://space.bilibili.com/12052294"
          >Bilibili</a
        >
      </li>
      <li class="mb-1 flex items-center"></li>
      <li class="mb-1 flex items-center"></li>
    </ul>
    <div>
      power by --- <Icon name="vscode-icons:file-type-nuxt" size="20"></Icon>
      <a href="https://nuxt.com/" class="ml-1">Nuxt3</a>
      <span class="mx-1">and</span>
      <Icon name="vscode-icons:file-type-tailwind" size="20"></Icon>
      <a href="https://tailwindcss.com/" class="ml-1">Tailwind</a>
    </div>
  </figure>
</template>

<script setup lang="ts"></script>

<style scoped></style>
