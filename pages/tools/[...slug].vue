<template>

  <header v-if="data.article" class="overflow-hidden relative bg-gradient-to-r from-gray-700 via-gray-900 to-black">
    <section class="max-w-7xl mx-auto p-6 md:p-8 relative z-[2] text-white">
      <div class="w-full lg:w-2/3 relative group">
          <div class="flex flex-col gap-3">
            <h1 class="opacity-80 font-hand text-xl">Fitness Tools</h1>
            <h1 class="font-extrabold text-3xl xl:text-4xl tracking-tight">{{ data.article.title }}</h1>
          </div>
      </div>
    </section>
  </header>

  <div class="mt-20 mb-20 max-w-7xl mx-auto px-6 md:px-8">
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-10">
      <article class="prose prose-a:no-underline prose-h2:font-hand first-of-type:prose-h2:mt-0">
        <ContentRenderer :value="data.article">
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </article>
      <div>
        <div class="xl:sticky top-24">
          <component :is="articleComponent" v-if="articleComponent" :article="data.article" />
        </div>
      </div>
    </div>
  </div>

</template>


<script setup>
import { ref, shallowRef } from 'vue';

const loadComponent = async (slug) => {
  let component;
  switch (slug) {
    case 'bmi-calculator':
      component = await import('~/components/BmiCalculator.vue');
      break;
    case 'calorie-calculator':
      component = await import('~/components/CalorieCalculator.vue');
      break;
    default:
      throw new Error('Component not found');
  }
  return component.default;
};

const articleComponent = shallowRef(null);

const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {
  let article = queryContent().where({ _path: path }).findOne();
  let surround = queryContent().only(["_path", "title", "description", "created_At"]).sort({ date: 1 }).findSurround(path);

  // Load the appropriate component based on the content article
  articleComponent.value = await loadComponent(path.split('/').pop());

  return {
    article: await article,
    surround: await surround,
  };
});

useHead({
  title: data.value.article.title,
  meta: [
    { name: "description", content: data.value.article.description },
    { hid: "og:title", property: "og:title", content: data.value.article.title },
    { hid: "og:description", property: "og:description", content: data.value.article.description },
  ],
});
</script>