
<template>

    <header class="overflow-hidden relative bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <section class="max-w-7xl mx-auto p-6 md:p-8 relative z-[2] text-white">
        <div class="w-full lg:w-2/3 relative group">
            <div class="flex flex-col gap-3">
              <h1 class="font-extrabold text-3xl xl:text-4xl tracking-tight">Insights on <span class="font-hand font-normal">{{ slug }}</span></h1>
            </div>
        </div>
      </section>
    </header>

    <div class="pt-20 mb-20 max-w-7xl mx-auto px-6 md:px-8">
    <section class="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

            <!-- Render list of all articles in ./content/dietary using `path` -->
            <!-- Provide only defined fieldsin the `:query` prop -->
            <ContentList
              path="/fitness"
              :query="{
                only: ['title', 'description', 'tags', '_path', 'img', 'created_At'],
                where: {
                  tags: {
                    $contains: filter,
                  },
                },
                $sensitivity: 'base',
              }"
            >
            <!-- Default list slot -->
            <template v-slot="{ list }">
                      <article v-for="article in list" :key="article._path" class="card relative flex flex-col gap-4">
                          <div class="relative z-[2] flex flex-col gap-4 bg-white shadow hover:shadow-lg h-full border-2 border-black rounded-lg">
                              <NuxtLink :to="article._path" class="w-full h-48 rounded-t-lg">
                                  <img :src="`${article.img}`" class="object-cover w-full h-48" width="300px" height="300px" :alt="article.title" :title="article.title" loading="lazy" />
                              </NuxtLink>
                              <NuxtLink :to="article._path" class="flex flex-col gap-3 px-3 pb-3">
                                  <h2 class="text-xl text-slate-900 font-extrabold">{{ article.title }}</h2>
                                  <div class="text-xs font-semibold flex gap-1 items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                      {{ formatDate(article.created_At) }}
                                  </div>
                                  <div class="line-clamp-2">{{ article.description }}</div>
                                  
                              </NuxtLink>
                          </div>
                      </article>
                  </template>

            <!-- Not found slot to display message when no content us is found -->
            <template #not-found>
              <p>No articles found.</p>
            </template>
          </ContentList>

    </section>
  </div>
</template>


<script setup>
// get current route
const {
params: { slug },
} = useRoute();
const filter = slug.split(",");

// function to format date
const formatDate = (date) => {
const d = new Date(date);
const year = d.getFullYear();
const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const month = monthNames[d.getMonth()];
const day = d.getDate();

return `${day} ${month} ${year}`;
};

// set meta for page
const title = ref(`Articles about ${slug}`)
const description = ref(`Articles about ${slug}`)

useHead({
title: title,
meta: [
  { name: "description", content: description },
  { hid: "og:title", property: "og:title", content: title },
  { hid: "og:description", property: "og:description", content: description },
],
});
</script>