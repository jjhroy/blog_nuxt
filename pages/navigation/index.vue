<template>
  <div class="flex flex-col mx-auto gap-x-6">
    <div class="flex items-center gap-x-4">
      <Icon
        name="tabler:category"
        size="24"></Icon>
      <div
        v-for="({ type }, index) in navigationList"
        :key="index"
        class="flex rounded-md px-4 py-2 cursor-pointer text-[16px] leading-[21px]"
        :class="{
          'text-[#3B82F6] bg-[#F0F5FF]': index === currentType,
          'text-[#7A7A7A] bg-[#F6F6F7]': index !== currentType,
        }"
        @click="selectCategory(index, type)">
        <span class="m-auto">{{ type }}</span>
      </div>
    </div>
    <div
      class="flex flex-col flex-wrap"
      v-for="{ type, itemList } in navigationList">
      <div
        :id="type"
        class="my-3 font-semibold text-[#333333] dark:text-[#fff] text-[20px] antialiased">
        {{ type }}
      </div>
      <div
        class="mobile:w-[640px] tablet:w-[860px] notebook:w-[1080px] w-[340px] flex flex-wrap gap-4">
        <a
          v-for="({ name, url, description, icon, color }, index) in itemList"
          :key="index"
          class="mobile:h-[100px] mobile:w-[200px] w-[160px] h-[90px] bg-[#fff] dark:bg-[#1a1a1a] dark:text-[#fff] px-4 py-3 rounded-md card-shadow cursor-pointer"
          target="_blank"
          :href="url">
          <div class="flex items-center mb-2">
            <Icon
              :name="icon === '' ? 'mdi:web' : icon"
              size="20"
              :style="{ color: color }"></Icon>
            <span
              class="mobile:text-[16px] text-[14px] ml-2 font-semibold truncate">
              {{ name }}
            </span>
          </div>
          <div
            class="mobile:text-[13px] mobile:leading-5 text-[12px] leading-4 text-gray-600 text-opacity-90 line-clamp-2">
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
    type: '搜索工具',
    itemList: [
      {
        name: 'Google',
        url: 'https://www.google.com',
        description: '大家都在用的搜索引擎',
        icon: 'logos:google-icon',
      },
      {
        name: 'Bing',
        url: 'https://www.bing.com',
        description: '必应',
        icon: 'logos:bing',
      },
      {
        name: 'Baidu',
        url: 'https://www.baidu.com',
        description: '百度一下,你就知道',
        icon: 'simple-icons:baidu',
        color: '#2932e1',
      },
      {
        name: 'Yandex',
        url: 'https://yandex.com/',
        description: '来自俄罗斯的搜索引擎,你懂的 😏',
        icon: 'vscode-icons:file-type-yandex',
      },
    ],
  },
  {
    type: '个人推荐',
    itemList: [
      {
        name: '空投',
        url: 'https://airportal.cn/',
        description: '临时云盘,不限速,无需登录',
        icon: 'zondicons:cloud-upload',
      },
      {
        name: '在线图片背景消除',
        url: 'https://www.remove.bg/zh',
        description: '方便快速去除图片背景',
        icon: '',
      },
      {
        name: 'Vercel',
        url: 'https://vercel.com/',
        description: '没有服务器也可以快速部署自己的前端项目',
        icon: 'logos:vercel-icon',
      },
    ],
  },
  {
    type: '图片资源',
    itemList: [
      {
        name: 'WallHaven',
        url: 'https://wallhaven.cc/',
        description: '高质量壁纸网站',
        icon: 'logos:realm',
      },
      {
        name: 'Pixivel',
        url: 'https://pixivel.moe/',
        description: '国内也能上p站',
        icon: 'logos:realm',
      },
      {
        name: 'Vilipix',
        url: 'https://www.vilipix.com/',
        description: '国内也能上p站',
        icon: 'logos:realm',
      },
      {
        name: 'WALLPAPER ABYSS',
        url: 'https://wall.alphacoders.com/?lang=Chinese',
        description: '高质量壁纸网站',
        icon: 'logos:realm',
      },
      {
        name: 'Artstation',
        url: 'https://www.artstation.com/?sort_by=community&dimension=all',
        description: '知名素材库',
        icon: 'logos:realm',
      },
    ],
  },
  {
    type: '前端学习',
    itemList: [
      {
        name: 'Vue3中文',
        url: 'https://cn.vuejs.org/',
        description: 'Vue3文档的中文版',
        icon: 'vscode-icons:file-type-vue',
      },
      {
        name: 'Vue3英文',
        url: 'https://vuejs.org/',
        description: 'Vue3官方文档',
        icon: 'vscode-icons:file-type-vue',
      },
      {
        name: 'VueRouter',
        url: 'https://router.vuejs.org/zh/',
        description: 'VueRouter文档的中文版',
        icon: 'vscode-icons:file-type-vue',
      },
      {
        name: 'Pinia',
        url: 'https://pinia.vuejs.org/zh/',
        description: '符合直觉的Vue.js状态管理库,个人觉得比vuex好用',
        icon: 'logos:pinia',
      },
      {
        name: 'Vite',
        url: 'https://cn.vitejs.dev/',
        description: '下一代的前端工具链,为开发提供极速响应',
        icon: 'vscode-icons:file-type-vite',
      },
      {
        name: 'Nuxt3中文',
        url: 'https://nuxt.com.cn',
        description: 'Nuxt3文档的中文版',
        icon: 'vscode-icons:file-type-nuxt',
      },
      {
        name: 'Nuxt3英文',
        url: 'https://nuxt.com',
        description: 'Nuxt3官方文档',
        icon: 'vscode-icons:file-type-nuxt',
      },
      {
        name: 'Tailwind中文',
        url: 'https://www.tailwindcss.cn',
        description: 'Tailwind的中文文档,但是版本比较老了',
        icon: 'vscode-icons:file-type-tailwind',
      },
      {
        name: 'Tailwind',
        url: 'https://tailwindcss.com',
        description: 'Tailwind英文官方文档',
        icon: 'vscode-icons:file-type-tailwind',
      },
      {
        name: 'Sass中文网',
        url: 'https://www.sass.hk/docs/',
        description: 'Sass的中文教程',
        icon: 'logos:sass',
      },
      {
        name: 'MDN中文',
        url: 'https://developer.mozilla.org/zh-CN/',
        description: '超全的HTML、JS、CSS文档,强烈推荐',
        icon: 'logos:mdn',
      },
      {
        name: '爱哔哩',
        url: 'https://www.ibilibili.com',
        description: '哔哩哔哩视频解析和UI学习网站导航',
        icon: '',
      },
    ],
  },
  {
    type: 'UI框架',
    itemList: [
      {
        name: 'Element',
        url: 'https://element-plus.gitee.io/zh-CN/',
        description: 'Element官方文档',
        icon: 'logos:element',
      },
      {
        name: 'NaiveUI',
        url: 'https://www.naiveui.com/zh-CN',
        description: 'NaiveUI官方文档',
        icon: 'logos:naiveui',
      },
      {
        name: 'AntDesignVue',
        url: 'https://antdv.com/docs/vue/introduce-cn',
        description: 'AntDesignVue官方文档',
        icon: 'logos:ant-design',
      },
    ],
  },
  {
    type: '图标库',
    itemList: [
      {
        name: 'NuxtIcon',
        url: 'https://www.naiveui.com/zh-CN',
        description: 'Nuxt项目首推的图标库,就是国内App的图标较少',
        icon: '',
      },
      {
        name: 'Fontawesome',
        url: 'https://fontawesome.com',
        description: '超多图标库支持',
        icon: 'logos:font-awesome',
      },
      {
        name: 'IconFont',
        url: 'https://www.iconfont.cn/',
        description: '阿里出品,国内最全的图标库,就是使用相对繁琐',
        icon: 'ant-design:alibaba-outlined',
      },
    ],
  },
  {
    type: '前端工具库',
    itemList: [
      {
        name: 'Lodash',
        url: 'https://www.lodashjs.com/',
        description: '非常实用的JS库,提升开发效率',
        icon: 'logos:lodash',
      },
      {
        name: 'VueUse',
        url: 'https://vueuse.org/',
        description: 'Vue官方团队提供的工具库',
        icon: 'logos:vueuse',
      },
    ],
  },
  {
    type: 'ACG相关',
    itemList: [
      {
        name: '哔哩哔哩',
        url: 'https://www.bilibili.com/',
        description: '蜀黍我啊',
        icon: 'simple-icons:bilibili',
        color: '#00a1d6',
      },
      {
        name: '趣动漫',
        url: 'https://qdmsh.com/',
        description: '无广告的在线动漫网,资源算比较齐,缺点速度慢一点',
        icon: 'twemoji:blue-book',
      },
      {
        name: '樱花动漫',
        url: 'https://www.yhpdm.net/',
        description: '知名粉色二次元动漫网',
        icon: 'ic:round-laptop-windows',
      },
      {
        name: '漫画大全',
        url: 'https://www.mangabz.com/manga-list/',
        description: '无广告的在线漫画网,更新速度稍慢',
        icon: 'twemoji:blue-book',
      },
      // {
      //   name: 'Switch520',
      //   url: 'https://xxxxx525.com/',
      //   description: '低调,超全学习版软件(bushi',
      //   icon: 'icon-park:switch-nintendo',
      // },
      {
        name: 'NavAcg',
        url: 'https://www.navacg.net/',
        description: '品类超全的ACG导航站',
        icon: 'ic:round-laptop-windows',
      },
    ],
  },
];
const selectCategory = (index: number, type: string) => {
  currentType.value = index;
  document.querySelector(`#${type}`)?.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
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
