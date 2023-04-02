<template>
  <header v-if="data.article" class="overflow-hidden relative">
    <section class="max-w-7xl mx-auto p-6 md:p-8 relative z-[2]">
      <div class="w-full lg:w-2/3 lg:pr-20 relative group">
        <div class="p-10 backdrop-blur-md bg-white/50 text-black shadow-xl">
          <div class="flex flex-col gap-5">
            <h1 class="font-extrabold text-4xl sm:text-5xl tracking-tight">{{ data.article.title }}</h1>
          </div>
        </div>
      </div>
    </section>
    <img class="absolute z-0 w-full inset-0 object-fit" :src="`${data.article.img}`" :alt="data.article.title" :title="data.article.title" />
  </header>

  <div class="mt-20 mb-20 max-w-7xl mx-auto px-6 md:px-8">
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-10">
      <article class="prose prose-a:no-underline prose-h2:font-hand first-of-type:prose-h2:mt-0">
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
      <div>
        <div class="xl:sticky top-24">
          Component
        </div>
      </div>
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
})

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

