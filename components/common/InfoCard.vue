<template>
  <figure class="bg-[#fff] dark:bg-[#1a1a1a] p-4 w-[800px] rounded-lg shadow-around">
    <div class="flex">
      <MongoUiAvatar
        class="-mt-10"
        round
        :size="80"
        src="https://upload.linkstarted.top/config/0918a38bb59fd3ee1cd1a141838c4e37.jpeg" />
      <div class="m-2 flex items-center gap-x-2">
        <span class="text-base text-slate-900 font-semibold dark:text-slate-300">JunHong Jiang</span>
        <span class="text-xs text-gray-500">roy</span>
      </div>
    </div>
    <div class="my-3">
      <article class="prose dark:text-[#fff]">
        <h3>关于我</h3>

        <p>
          99年生人，毕业于国内不知名本科，毕业后目前在厦门工作
          <span class="line-through">太菜了不配卷考研</span>
        </p>
        <p>前端工程师，其实就是前端小白。</p>
        <p>写代码以外的时间会打打篮球和健身，当然也会打游戏(~批 uid:100836108)</p>
        <p>高中比较喜欢二次元，工作后就很少看了，最喜欢的番是冰菓和fate</p>

        <h3>关于本站</h3>

        <p>
          基于我的
          <a href="https://www.linkstarted.top/">毕业设计</a>
          用Nuxt3重写，不过目前线上已经是用Vue3重写后的了，毕业设计设计是Vue2。工作须要使用Nuxt，就当做学习后的实践重写了，虽然非常的粗糙。
        </p>

        <h3>未来更新计划</h3>
        <p class="line-through">尽量保证更新速度</p>
        <ul class="list-outside list-disc">
          <li>彻底舍弃管理后台~~当时单纯为了毕业设计看起来内容丰富~~</li>
          <li>发布功能移动到前台来</li>
          <li>增加一些实用的工具功能，目前还在构思</li>
          <li>迁移留言板块</li>
          <li>还在想..</li>
        </ul>
        <h3>Find Me At</h3>
        <ul class="flex items-center gap-x-3 not-prose">
          <li class="flex items-center gap-x-2">
            <Icon
              name="skill-icons:github-dark"
              size="20"></Icon>
            <NuxtLink
              class="hover:text-[#3B82F6]"
              to="https://github.com/jjhroy"
              target="_blank">
              Github
            </NuxtLink>
          </li>
          <li class="flex items-center gap-x-2">
            <Icon
              name="skill-icons:twitter"
              size="20"></Icon>
            <NuxtLink
              class="hover:text-[#3B82F6]"
              to="https://twitter.com/JunhongRoy"
              target="_blank">
              Twitter
            </NuxtLink>
          </li>
          <li class="flex items-center gap-x-2">
            <Icon
              name="ri:bilibili-line"
              class="text-[#3B82F6]"
              size="20"></Icon>
            <NuxtLink
              class="hover:text-[#3B82F6]"
              to="https://space.bilibili.com/12052294 "
              target="_blank">
              Bilibili
            </NuxtLink>
          </li>
        </ul>
      </article>
    </div>
  </figure>
</template>

<script setup lang="ts">
const aboutContent = ref('');
</script>

<style scoped></style>
