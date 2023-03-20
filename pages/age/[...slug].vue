<template>


    <header v-if="data.article" class="container mx-auto px-6 md:px-8 py-20">
        <div class="max-w-4xl">
          <div class="font-semibold text-xs text-slate-500">{{ formatDate(data.article.created_At) }}</div> 
          <h1 class="mt-4 text-slate-900 font-extrabold text-4xl sm:text-5xl tracking-tight">{{ data.article.title }}</h1>
          <p class="mt-6 text-lg text-slate-600 dark:text-slate-400">{{ data.article.description }}</p>
          <div class="mt-4 space-x-2">
            <NuxtLink :to="`/age/tags/${tag}`" v-for="(tag, n) in data.article.tags" :key="n" class="group inline-flex items-center h-6 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500">{{ tag }}</NuxtLink>
          </div>
        </div>
    </header>

    <div class="relative mx-auto flex container justify-center sm:px-2 lg:px-8 xl:px-12">

      <div class="hidden lg:relative lg:block lg:flex-none">
          <div class="absolute inset-y-0 right-0 w-[50vw] bg-slate-50"></div>
          <div class="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto overflow-x-hidden py-16 pl-0.5">
              <div class="text-base lg:text-sm w-64 pr-8 xl:w-72 xl:pr-16">
                  <!-- Toc Component -->
                  <Toc :links="data.article.body.toc.links" />
              </div>
          </div>
      </div>

      <div class="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">

          <div class="flex flex-col gap-1">
            <picture>
              <source :srcset="`${data.article.img}`" type="image/jpeg">
              <img :src="`${data.article.img}`" :alt="data.article.title" :title="data.article.title" width="300px"
                height="300px" class="mx-auto rounded-lg w-full" loading="eager" />
            </picture>
            <h2 class="text-xs font-semibold italic mt-3 text-center">{{ data.article.title }}</h2>
          </div>

          <article class="prose prose-headings:no-underline">
            <!-- render document coming from query -->
            <ContentRenderer :value="data.article">

              <!-- render rich text from document 
              <MarkdownRenderer :value="data.article" />
              -->

              <!-- display if document content is empty -->
              <template #empty>
                <p>No content found.</p>
              </template>

            </ContentRenderer>
          </article>

        <!-- PrevNext Component -->
        <PrevNext :prev="prev" :next="next" />

      </div>

    </div>

</template>


<script setup>
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {
  // fetch document where the document path matches with the cuurent route
  let article = queryContent().where({ _path: path }).findOne();
  // get the surround information,
  // which is an array of documeents that come before and after the current document
  let surround = queryContent().only(["_path", "title", "description", "created_At"]).sort({ date: 1 }).findSurround(path);
  return {
    article: await article,
    surround: await surround,
  };
});

// destrucure `prev` and `next` value from data
const [prev, next] = data.value.surround;
console.log({ data, prev, next });

// function to format date
const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = ("0" + (d.getMonth() + 1)).slice(-2);
    const day = ("0" + d.getDate()).slice(-2);
    return `${day}-${month}-${year}`;
};

// set the meta
useHead({
  title: data.value.article.title,
  meta: [
    { name: "description", content: data.value.article.description },
    { hid: "og:title", property: "og:title", content: data.value.article.title },
    { hid: "og:description", property: "og:description", content: data.value.article.description },
  ],
});
</script>

