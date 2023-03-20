
<template>

    <header class="container mx-auto px-6 md:px-8 py-20">
      <div class="font-semibold text-slate-500">Topic specific</div>
      <h1 class="mt-4 text-slate-900 font-extrabold text-4xl sm:text-5xl tracking-tight">Insights on {{ slug }}</h1>
    </header>

    <div class="pt-20 mb-20 container mx-auto px-6 md:px-8">
      <section class="mb-20 grid grid-cols-3 gap-20 sm:mb-32 sm:gap-32 md:mb-40 md:gap-40">

              <!-- Render list of all articles in ./content/dietary using `path` -->
              <!-- Provide only defined fieldsin the `:query` prop -->
              <ContentList
                path="/dietary"
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
                <article v-for="article in list" :key="article._path" class="group relative flex flex-col gap-4">
                    <div class="absolute -inset-y-4 -inset-x-4 z-0 scale-95 bg-slate-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-4 rounded-xl"></div>
                    <div class="relative z-[2] flex flex-col gap-4">
                        <NuxtLink :to="article._path" class="w-full h-48">
                            <img :src="`${article.img}`" class="rounded object-cover w-full h-48" width="300px" height="300px" :alt="article.title" :title="article.title" loading="lazy" />
                        </NuxtLink>
                        <NuxtLink :to="article._path">
                            <h2 class="text-xl sm:text-2xl text-slate-900 font-extrabold tracking-tight">{{ article.title }}</h2>
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
console.log({ filter });

// function to format date
const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = ("0" + (d.getMonth() + 1)).slice(-2);
    const day = ("0" + d.getDate()).slice(-2);
    return `${day}-${month}-${year}`;
};

// set meta for page
const title = ref(`Dotslash articles about ${slug}`)
const description = ref(`Dotslash articles about ${slug}`)

useHead({
  title: title,
  meta: [
    { name: "description", content: description },
    { hid: "og:title", property: "og:title", content: title },
    { hid: "og:description", property: "og:description", content: description },
  ],
});
</script>