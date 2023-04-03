<template>
  <header class="flex justify-between p-8">
    <div class="text-24px font-semibold">Roy Blog</div>
    <nav class="flex">
      <div class="flex gap-x-5 items-center font-sans">
        <NuxtLink
          to="/"
          class="text-20px left-4 font-semibold text-gray-500 hover:text-black"
        >
          Blog
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="text-20px left-4 font-semibold text-gray-500 hover:text-black"
        >
          About Me
        </NuxtLink>
        <NuxtLink
          to="/changelog"
          class="text-20px left-4 font-semibold text-gray-500 hover:text-black"
        >
          Changelog
        </NuxtLink>
        <a target="_blank" href="https://github.com/jjhroy">
          <Icon
            name="mingcute:github-line"
            size="24"
            class="text-gray-500"
          ></Icon>
        </a>
      </div>
    </nav>
  </header>
</template>
