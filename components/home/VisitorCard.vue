<template>
  <ClientOnly>
    <div class="absolute top-4 left-4 border-1 border py-4 px-6 rounded-md">
      <p class="flex items-center gap-x-1 my-2">
        <Icon name="icon-park-outline:database-network-point"></Icon>
        {{ visitorIp }}
      </p>
      <p class="flex items-center gap-x-1 my-2">
        <Icon name="material-symbols:location-on-rounded"></Icon>
        {{ visitorAddress }}
      </p>
      <p class="flex items-center gap-x-1 my-2">
        OS：
        <!-- <span>{{ visitorInfo.os.name }}</span> -->
        <!-- <Icon :name="visitorInfo.os.icon"></Icon> -->
      </p>
      <p class="flex items-center gap-x-1">
        浏览器：
        <!-- <span>{{ visitorInfo.browser.name }}</span> -->
        <!-- <Icon :name="visitorInfo.browser.icon"></Icon> -->
      </p>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { globalStore, useGlobalStore } from '~~/store/global';

const { getVisitorAddress, getVisitorIp } = globalStore();
const { visitorAddress, visitorIp } = useGlobalStore();

try {
  await Promise.allSettled([getVisitorAddress(), getVisitorIp()]);
} catch (error) {
  showMessage.error('获取地址失败');
}
</script>
