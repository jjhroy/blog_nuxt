<template>
  <main>
    <ContentList
      path="/talk"
      v-slot="{ list }">
      <div
        v-for="article in list"
        :key="article._path">
        <h2>{{ article.title }}</h2>
        <!-- <p>{{ article.description }}</p> -->
      </div>
    </ContentList>
  </main>
</template>
