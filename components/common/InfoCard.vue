<template>
  <figure
    class="bg-[#fff] dark:bg-[#1a1a1a] p-4 rounded-lg shadow-around mt-4 mobile:w-auto w-[360px]">
    <div class="flex">
      <MongoUiAvatar
        class="-mt-10"
        round
        :size="80"
        src="https://upload.linkstarted.top/config/0918a38bb59fd3ee1cd1a141838c4e37.jpeg" />
      <div class="m-2 flex items-center gap-x-2">
        <span class="text-base text-slate-900 font-semibold dark:text-slate-300"
          >JunHong Jiang</span
        >
        <span class="text-xs text-gray-500">roy</span>
      </div>
    </div>
    <div class="my-3">
      <article class="prose dark:text-[#fff] text-[12px] mobile:text-[14px]">
        <h3>关于我</h3>
        <h4>work</h4>
        <p>目前{{ age }}岁，毕业于普通本科，目前已有一年半的前端工作经验。</p>
        <p>
          这是我工作时的核心产品
          <a href="https://www.amz123.com" target="_blank">AMZ123</a>
          我在项目中负责了多个模块的开发。
        </p>
        <p>
          目前待业中，有任何工作岗位
          <a href="mailto:17350331630@163.com" target="_blank">@请联系我</a>
        </p>
        <p>目前的主要用vue3进行开发。对了react有基础的了解。</p>
        <h4>after work</h4>
        <p>写代码以外的时间会打打篮球和健身，当然也会打游戏。</p>
        <p>最喜欢的番是冰菓和fate</p>
        <h3>关于博客</h3>
        <p>
          想把博客作为一个自我展示的平台，我会把工作和学习中的想法放到这里来。
          如果你有任何的好的想法欢迎私信我。
        </p>
        <p>
          目前支持
          <ul>
            <li>各客户端的响应式支持。</li>
            <li>明暗两种主题切换。</li>
            <li>不需要依赖后端接口进行文章的发布。</li>
            <li>全站采用自己的维护的 vue 组件。</li>
          </ul>
        </p>

        <h3>可以在这里找到我</h3>
        <ul class="flex items-center gap-x-3 not-prose">
          <li class="flex items-center gap-x-2">
            <Icon name="skill-icons:github-dark" size="20"></Icon>
            <NuxtLink
              class="hover:text-[#3B82F6]"
              to="https://github.com/jjhroy"
              target="_blank">
              Github
            </NuxtLink>
          </li>
          <li class="flex items-center gap-x-2">
            <Icon name="skill-icons:twitter" size="20"></Icon>
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
const aboutContent = ref("");

const age = ref(new Date().getFullYear() - 1999);
</script>
