<template>
  <figure
    class="bg-[#fff] dark:bg-[#1a1a1a] p-4 w-[400px] h-[300px] rounded-lg shadow-around">
    <div class="flex">
      <MongoUiAvatar
        class="-mt-10"
        round
        :size="80"
        src="https://upload.linkstarted.top/config/0918a38bb59fd3ee1cd1a141838c4e37.jpeg" />
      <div class="m-2 flex items-center gap-x-2">
        <span
          class="text-base text-slate-900 font-semibold dark:text-slate-300">
          JunHong Jiang
        </span>
        <span class="text-xs text-gray-500"> john roy </span>
      </div>
    </div>

    <!-- <div class="">Amoy</div> -->
    <div class="indent-3 my-3">
      <article class="prose lg:prose-sm dark:text-[#fff]">
        <!-- <h3>Super Goal!!</h3> -->
        <p class="text-[16px]">
          Chinese
          <Icon name="noto-v1:flag-for-flag-china" class="mr-2"></Icon>Live in
          Amoy.
        </p>
        <p class="text-[16px]">Studying English and Japanese now.</p>
        <p class="text-[16px]">
          This site is my first nuxt project,it might be a little bit simple,i
          will make it special in the future.
        </p>
        <p class="text-center text-[14px] text-gray-500">
          长风破浪会有时,直挂云帆济沧海
        </p>
      </article>
    </div>
    <!-- <ul>
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
    </ul> -->
  </figure>
</template>

<script setup lang="ts"></script>

<style scoped></style>
