<template>
  <div class="w-full h-full flex">
    <ul>
      <li
        v-for="i in 50"
        :key="i"></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { data: tagList, refresh } = await useAsyncData('juejin-tag-list', () =>
  $fetch(`https://api.juejin.cn/tag_api/v1/query_tag_list`, {
    method: 'POST',
    params: {
      cursor: '10',
      key_word: '',
      limit: 10,
      sort_type: 1,
    },
  }),
);
console.log('tagList', tagList.value.data);
tagList.value.data.forEach((item) => {
  console.log(item.tag.tag_name);
});
</script>

<style scoped lang="scss">
$count: 50;
@function randomNum($max, $min: 0, $u: 1) {
  @return ($min + random($max)) * $u;
}
@function randomColor() {
  @return rgb(randomNum(255), randomNum(255), randomNum(255));
}
// body,
// html {
//     width: 100%;
//     height: 100%;
//     display: flex;
//     // background: #383838;
// }
ul {
  position: relative;
  margin: auto;
  display: flex;
  gap: 4px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 660px;
  height: 420px;
  cursor: pointer;
}
li {
  flex-shrink: 0;
  height: 30px;
  border-radius: 30px;
}

@for $i from 1 to $count {
  li:nth-child(#{$i}) {
    width: #{randomNum(110, 90)}px;
    background: randomColor();
  }
}

ul:hover {
  li {
    opacity: 0;
  }
  @for $i from 1 to $count {
    li:nth-child(#{$i}) {
      animation: falldown
        0.3s
        cubic-bezier(0.43, 0.02, 0.64, 1.5)
        #{50 *
        ($count - $i) +
        (random(150) - random(300))}ms
        forwards;
    }
  }
}
@keyframes falldown {
  0% {
    transform: translateY(-180px) scaleX(0.1) scaleY(0.3);
    opacity: 1;
  }
  20% {
    transform: translateY(-200px) scaleX(0.6) scaleY(0.3);
  }
  75% {
    transform: translateY(0) scaleX(0.6) scaleY(0.3);
  }
  100% {
    transform: translateY(0) scaleX(1) scaleY(1);
    opacity: 1;
  }
}
</style>
