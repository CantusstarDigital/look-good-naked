<script setup>
// helper function to flatten tags array
const flatten = (tags, key) => {
  let _tags = tags
    .map((tag) => {
      let _tag = tag;
      if (tag[key]) {
        let flattened = flatten(tag[key]);
        _tag = flattened;
      }
      return _tag;
    })
    .flat(1);
  return _tags;
};

// get only tags data from `/dietary`
const { data } = await useAsyncData("tags", () => queryContent("dietary").only(["tags"]).find());

// generate array without duplicates from flattened array
const articleTags = [...new Set(flatten(data.value, "tags"))];
</script>

<template>
  <div class="space-x-2">
    <span v-for="(tag, n) in articleTags" :key="n">
      <NuxtLink :to="`/dietary/tags/${tag}`" class="group inline-flex items-center h-6 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500">{{ tag }}</NuxtLink>
    </span>
  </div>
</template>
