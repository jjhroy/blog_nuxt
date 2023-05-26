<template>
  <main>
    <ContentList
      path="/talk"
      v-slot="{ list }">
      <div
        v-for="article in list"
        :key="article._path">
        <CommonArticleCard
          :article="article"
          ref="scrollComponent" />
      </div>
    </ContentList>
  </main>
</template>
