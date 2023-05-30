<template>
  <div class="flex-grow">
    <div class="m-auto flex flex-col max-w-300 relative fadeInDown">
      <HomeArticleList class="mx-auto"></HomeArticleList>
    </div>
  </div>
</template>
<style scoped lang="scss">
.fadeInDown {
  animation: fadeInDown 0.7s;
}

@keyframes fadeInDown {
  0% {
    margin-top: -200px;
    opacity: 0;
  }

  100% {
    margin-top: 0px;
    opacity: 1;
  }
}
</style>
