<template>
  <div
    class="relative"
    ref="popoverref"
    @focus="getfocus"
    @blur="losefocus">
    <!--    冒泡插槽-->
    <div
      v-if="visible"
      id="amz-popover"
      ref="contentref"
      class="absolute transform inline-block bg-white rounded-[4px] py-2 px-[14px] shadow-lg text-[14px] -mt-1 transition-all"
      style="z-index: 2000"
      :class="{
        '-translate-y-full': thisposition === 'top',
        '-translate-x-full': thisposition === 'left',
      }">
      <div :style="{ 'font-size': '12px' }">
        <slot name="content"></slot>
      </div>

      <!--      那个三角形-->
      <div
        ref="sanjiaoxingref"
        class="absolute transform block bg-white w-2 h-2 transition-all"
        :class="{
          '-top-1 left-1/2 -translate-x-1/2 rotate-45':
            thisposition === 'bottom',
          '-bottom-1 left-1/2 -translate-x-1/2 rotate-45':
            thisposition === 'top',
          'top-1/2 -translate-y-1/2 -right-1 rotate-45':
            thisposition === 'left',
          '-left-1 top-1/2 -translate-y-1/2 -rotate-45':
            thisposition === 'right',
        }"></div>
      <!-- <div class="bg-[#fff] h-2 w-2 transform rotate-45 mx-auto translate-y-2 arrow block"></div> -->
    </div>
    <!--    默认插槽-->
    <span
      class="inline-block"
      ref="triggerref"
      @click="thisonClick()">
      <slot name="default"></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
//@ts-nocheck
const props = defineProps<{
  trigger: string;
  position: string;
  forceClose?: boolean;
  fontSize: string;
}>();

// 三个ref
const popoverref = ref();
const contentref = ref();
const triggerref = ref();
// 增加一个三角形的ref
const sanjiaoxingref = ref();
// 是否显示冒泡卡片
const visible = ref(false);
// 定位
const thisposition = ref(props.position);
// 最重要的函数，为pop进行定位
const positionContent = () => {
  document.body.appendChild(contentref.value);
  const { width, height, top, left } =
    triggerref.value.children[0].getBoundingClientRect();
  const width2 = contentref.value.offsetWidth;
  const height2 = contentref.value.offsetHeight;
  let dingwei = {
    top: {
      top: top + window.scrollY - 5,
      left: left + window.scrollX + width / 2 - width2 / 2,
    },
    bottom: {
      top: top + height + window.scrollY + 5,
      left: left + window.scrollX + width / 2 - width2 / 2,
    },
    left: {
      top: top + window.scrollY + height / 2 - height2 / 2,
      left: left + window.scrollX - 5,
    },
    right: {
      top: top + window.scrollY + height / 2 - height2 / 2,
      left: left + width + window.scrollX + 5,
    },
  };
  contentref.value.style.left = `${dingwei[props.position].left}px`;
  contentref.value.style.top = `${dingwei[props.position].top}px`;
};

// 点击方法
const thisonClick = () => {
  // if (props.trigger === 'click') {
  //   if (visible.value === true) {
  //     closepop();
  //   } else {
  //     showpop();
  //   }
  // }
  visible.value = false;
};
// 获取焦点方法
const getfocus = () => {
  if (props.trigger === 'focus') {
    showpop();
  }
};
// 失去焦点方法
const losefocus = () => {
  if (props.trigger === 'focus') {
    closepop();
  }
};
// 显示
const showpop = () => {
  // 必须先显示，然后才能获取ref，如果反过来，就获取不到ref
  visible.value = true;
  nextTick(() => {
    positionContent();
  });
};
// 隐藏
const closepop = () => {
  let status = false;
  contentref?.value?.addEventListener('mouseenter', () => {
    status = true;
  });
  contentref?.value?.addEventListener('mouseleave', () => {
    visible.value = false;
  });
  setTimeout(() => {
    if (!status) {
      visible.value = false;
    }
  }, 100);
};
// 生命周期
onMounted(() => {
  // 初始化时，根据触发方式，绑定方法
  if (props.trigger === 'hold') {
    popoverref.value.addEventListener('mousedown', showpop);
    popoverref.value.addEventListener('mouseup', closepop);
  } else if (props.trigger === 'hover') {
    popoverref.value.addEventListener('mouseenter', showpop);
    popoverref.value.addEventListener('mouseleave', closepop);
  }
  // 滚动时，不显示pop
  window.addEventListener('scroll', closepop);
  // 窗口大小变化时，不显示pop
  window.addEventListener('resize', closepop);
});
onUnmounted(() => {
  // 销毁前，移除监听
  if (props.trigger === 'hold') {
    popoverref?.value?.removeEventListener('mousedown', showpop);
    popoverref?.value?.removeEventListener('mouseup', closepop);
  } else if (props.trigger === 'hover') {
    popoverref?.value?.removeEventListener('mouseenter', showpop);
    popoverref?.value?.removeEventListener('mouseleave', closepop);
  }
  // 所有监听移除
  window.removeEventListener('scroll', closepop);
  window.removeEventListener('resize', closepop);
});
watch(
  () => props.forceClose,
  () => {
    visible.value = !props.forceClose;
    console.log('forceCLose', props.forceClose);
  },
);
</script>
