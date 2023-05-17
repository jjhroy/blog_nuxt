<template>
  <div
    v-highlight
    class="w-[1200px] mx-auto relative">
    <MongoUiPopover
      font-size="12"
      trigger="hover"
      position="left">
      <template #content>复制内容</template>
      <template #default>
        <Icon
          name="material-symbols:content-copy-outline-rounded"
          size="20"
          class="copy cursor-pointer hover:text-[#3B82F6] absolute top-[68px] right-2"
          data-clipboard-text="复制内容"
          @click="copy"></Icon>
      </template>
    </MongoUiPopover>

    <pre>
      <code>{{ props.code }}</code>
    </pre>
  </div>
</template>
<script setup lang="ts">
import 'highlight.js/styles/default.css';
import Clipboard from 'clipboard';

const props = defineProps(['code']);

const copy = () => {
  let clipboard = new Clipboard('.copy');
  clipboard.on('success', (e) => {
    showMessage.success('复制成功');
    // 释放内存
    clipboard.destroy();
  });
  clipboard.on('error', (e) => {
    // 不支持复制
    showMessage.success('复制失败');
    // 释放内存
    clipboard.destroy();
  });
};
</script>
