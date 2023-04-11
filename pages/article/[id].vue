<template>
  <div class="mx-auto mt-20">
    <!-- <article class="prose lg:prose-xl">
      <h1>Garlic bread with cheese: What the science tells us</h1>
      <p>
        For years parents have espoused the health benefits of eating garlic
        bread with cheese to their children, with the food earning such an
        iconic status in our culture that kids will often dress up as warm,
        cheesy loaf for Halloween.
      </p>
      <p>
        But a recent study shows that the celebrated appetizer may be linked to
        a series of rabies cases springing up around the country.
      </p>
    </article> -->
    <pre>
      <ContentRenderer :value="'ac'" />
    </pre>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
console.log("path", route.path.split("/content"));
// const { data: articleDetail, refresh } = getApi("/articles/136");
const { data } = await useAsyncData("/articles/136", () =>
  queryContent("/hello").findOne()
);
</script>

<style scoped></style>
