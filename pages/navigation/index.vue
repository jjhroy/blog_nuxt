<template>
  <div class="flex flex-col mx-auto gap-x-6">
    <div class="flex items-center gap-x-4">
      <Icon name="tabler:category" size="24"></Icon>
      <div
        v-for="({ type }, index) in navigationList"
        :key="index"
        class="flex rounded-md px-4 py-2 cursor-pointer text-[16px] leading-[21px]"
        :class="{
          'text-[#3B82F6] bg-[#F0F5FF]': index === currentType,
          'text-[#7A7A7A] bg-[#F6F6F7]': index !== currentType,
        }"
        @click="selectCategory(index, type)"
      >
        <span class="m-auto">{{ type }}</span>
      </div>
    </div>
    <div
      class="flex flex-col flex-wrap"
      v-for="{ type, itemList } in navigationList"
    >
      <div
        :id="type"
        class="my-3 font-semibold text-[#333333] dark:text-[#fff] text-[20px] antialiased"
      >
        {{ type }}
      </div>
      <div
        class="mobile:w-[640px] tablet:w-[860px] notebook:w-[1080px] w-[340px] flex flex-wrap gap-4"
      >
        <a
          v-for="({ name, url, description, icon }, index) in itemList"
          :key="index"
          class="mobile:h-[100px] mobile:w-[200px] w-[160px] h-[90px] bg-[#fff] dark:bg-[#1a1a1a] dark:text-[#fff] px-4 py-3 rounded-md card-shadow cursor-pointer"
          target="_blank"
          :href="url"
        >
          <div class="flex items-center mb-2">
            <Icon :name="icon === '' ? 'mdi:web' : icon" size="20"></Icon>
            <span class="mobile:text-[16px] text-[14px] ml-2 font-semibold">{{
              name
            }}</span>
          </div>
          <div
            class="mobile:text-[14px] mobile:leading-5 text-[12px] leading-4 text-opacity-70 line-clamp-2"
          >
            {{ description }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const currentType = ref(-1);
const navigationList = [
  {
    type: "搜索工具",
    itemList: [
      {
        name: "Google",
        url: "https://www.google.com",
        description: "大家都在用的搜索引擎",
        icon: "",
      },
      {
        name: "Bing",
        url: "https://www.bing.com",
        description: "必应",
        icon: "",
      },
      {
        name: "Baidu",
        url: "https://www.baidu.com",
        description: "百度一下,你就知道",
        icon: "",
      },
      {
        name: "Yandex",
        url: "https://yandex.com/",
        description: "来自俄罗斯的搜索引擎,你懂的 😏",
        icon: "",
      },
    ],
  },
  {
    type: "学习文档",
    itemList: [
      {
        name: "Nuxt3中文",
        url: "https://nuxt.com.cn",
        description: "Nuxt3文档的中文版",
        icon: "",
      },
      {
        name: "Nuxt3",
        url: "https://nuxt.com",
        description: "Nuxt3官方文档",
        icon: "",
      },
      {
        name: "Tailwind中文",
        url: "https://www.tailwindcss.cn",
        description: "Tailwind的中文文档,但是版本比较老了",
        icon: "",
      },
      {
        name: "Tailwind",
        url: "https://tailwindcss.com",
        description: "Tailwind英文官方文档",
        icon: "",
      },
      {
        name: "Sass中文网",
        url: "https://www.sass.hk/docs/",
        description: "Sass的中文教程",
        icon: "",
      },
      {
        name: "MDN中文",
        url: "https://developer.mozilla.org/zh-CN/",
        description: "超全的HTML、JS、CSS文档,强烈推荐",
        icon: "",
      },
    ],
  },
  {
    type: "UI框架",
    itemList: [
      {
        name: "Element",
        url: "https://element-plus.gitee.io/zh-CN/",
        description: "Element官方文档",
        icon: "",
      },
      {
        name: "NaiveUI",
        url: "https://www.naiveui.com/zh-CN",
        description: "NaiveUI官方文档",
        icon: "",
      },
      {
        name: "AntDesignVue",
        url: "https://antdv.com/docs/vue/introduce-cn",
        description: "AntDesignVue官方文档",
        icon: "",
      },
    ],
  },
  {
    type: "图标库",
    itemList: [
      {
        name: "NuxtIcon",
        url: "https://www.naiveui.com/zh-CN",
        description: "Nuxt项目首推的图标库,就是国内App的图标较少",
        icon: "",
      },
      {
        name: "Fontawesome",
        url: "https://fontawesome.com",
        description: "超多图标库支持",
        icon: "",
      },
      {
        name: "IconFont",
        url: "https://www.iconfont.cn/",
        description: "应该是国内最全的图标库了,就是使用相对繁琐",
        icon: "",
      },
    ],
  },
  {
    type: "工具库",
    itemList: [
      {
        name: "Lodash",
        url: "https://www.lodashjs.com/",
        description: "非常实用的JS库,提升开发效率",
        icon: "",
      },
      {
        name: "VueUse",
        url: "https://vueuse.org/",
        description: "Vue官方团队提供的工具库",
        icon: "",
      },
    ],
  },
];
const selectCategory = (index: number, type: string) => {
  currentType.value = index;
  document.querySelector(`#${type}`)?.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};
</script>

<style scoped lang="scss">
.card-shadow {
  box-shadow: 0px 2px 16px rgba(1, 28, 67, 0.08);
  @apply transform transition-all ease-linear hover:translate-y-[-3px];
  &:hover {
    box-shadow: 0 0 7px 0 rgb(0 0 0 / 15%);
  }
}
</style>
