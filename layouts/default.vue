<template>
  <div style="display: flex; flex-direction: column; min-height: 100vh">
    <LayoutHeader />
    <main class="flex flex-col flex-grow dark:bg-black">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>
