<template>
  <div
    :class="{ dark: !isLight, 'main-move': isSearch }"
    class="transition-all">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
      <MongoUiBacktop class="fixed bottom-[130px] right-4" />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { useGlobalStore } from "~~/store/global";
import { GLOBAL_ROUTE_NAME_MAP } from "./configs/const";

const { isLight, isSearch } = useGlobalStore();
// 初次加载
const route = useRoute();
useSeoMeta({
  title: GLOBAL_ROUTE_NAME_MAP[String(route.path)],
});
// 路由发生变化
const router = useRouter();
router.beforeEach((to, from) => {
  watchEffect(() => {
    // 全局的seo title替换
    useSeoMeta({
      title: GLOBAL_ROUTE_NAME_MAP[String(to.path)],
    });
  });
});
</script>
