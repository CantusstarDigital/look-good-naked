<template>


    <header v-if="data.article" class="max-w-7xl mx-auto px-6 md:px-8 py-20">
        <div class="max-w-4xl flex flex-col gap-3">
          <div class="text-xs font-semibold flex gap-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {{ formatDate(data.article.created_At) }}
          </div> 
          <h1 class="text-slate-900 font-extrabold text-4xl sm:text-5xl tracking-tight">{{ data.article.title }}</h1>
          <p class="text-xl text-slate-500 font-bold">{{ data.article.description }}</p>
          <div class="space-x-2">
            <NuxtLink :to="`/dietary/tags/${tag}`" v-for="(tag, n) in data.article.tags" :key="n" class="group inline-flex items-center h-6 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500">{{ tag }}</NuxtLink>
          </div>
        </div>
    </header>

    <div class="max-w-7xl mx-auto px-6 md:px-8">
      <div class="flex flex-col gap-4">
        <picture>
          <source :srcset="`${data.article.img}`" type="image/jpeg">
          <img :src="`${data.article.img}`" :alt="data.article.title" :title="data.article.title" width="300px"
            height="300px" class="mx-auto rounded-lg w-full" loading="eager" />
        </picture>
        <div class="grid grid-cols-2 gap-5">
          <div>
            <h2 class="text-xs font-semibold italic text-left">{{ data.article.alt }}</h2>
          </div>
          <div>
            <div class="text-xs font-semibold italic text-right">Photo by <a :href="`${data.article.creditlink}`" target="_blank">{{ data.article.credit }}</a></div>
          </div>
        </div>
      </div>
    </div>


    <div class="relative mx-auto flex max-w-7xl justify-center px-6 md:px-8">

      <div class="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">

        <nav class="flex" aria-label="Breadcrumb">
          <ol role="list" class="flex items-center space-x-1">
            <li>
              <div>
                <NuxtLink to="/">
                  <picture>
                    <img src="/img/logo.svg" class="h-10 w-10" width="56px" height="56px" alt="Look Good Nood" title="Look Good Nood" loading="eager" />
                  </picture>
                </NuxtLink>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>
                <NuxtLink to="/dietary" class="ml-1 text-sm font-bold text-gray-500 hover:text-black">Dietary</NuxtLink>
              </div>
            </li>
          </ol>
        </nav>

          <article class="prose prose-a:no-underline prose-h2:font-hand">
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

      <div class="hidden lg:relative lg:block lg:flex-none h-full">
          <div class="h-full overflow-y-auto overflow-x-hidden py-16">
              <div class="w-64 pr-8 xl:w-72 xl:pr-16 bg-slate-50">
                  <!-- Toc Component 
                  <Toc :links="data.article.body.toc.links" />
                  -->
                  
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
});

// destrucure `prev` and `next` value from data
const [prev, next] = data.value.surround;

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

