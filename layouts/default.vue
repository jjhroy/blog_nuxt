<template>
  <div style="display: flex; flex-direction: column; min-height: 100vh">
    <LayoutHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>
