<template>

    <header class="bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1595857997852-6cdae332b05b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] overflow-hidden relative">
        <section class="max-w-7xl mx-auto p-6 md:p-8 relative z-[2]">
            <div class="w-full lg:w-2/3 lg:pr-20 relative group">
                <div class="p-10 backdrop-blur-md bg-white/50 text-black border-2 border-black rounded-lg">
                    <div class="flex flex-col gap-5">
                        <h1 class="opacity-80 font-hand text-xl">Age Groups</h1>
                        <div class="font-extrabold text-3xl xl:text-4xl tracking-tight">...</div>
                        <div class="space-x-2">
                            <span v-for="(tag, n) in articleTags" :key="n">
                                <NuxtLink :to="`/age/tags/${tag}`" class="group font-hand inline-flex items-center h-6 rounded-full text-sm whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500">{{ tag }}</NuxtLink>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </header>

    <div class="pt-20 mb-20 max-w-7xl mx-auto px-6 md:px-8">

        <section class="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">


                <ContentList path="/age" :query="{
                    only: ['title', 'description', 'tags', '_path', 'img', 'created_At'],
                    where: {
                        tags: {
                            $contains: filter,
                        },
                    },
                    sort: {
                        created_At: 'desc' // changing the desc to asc
                    },
                    $sensitivity: 'base',
                }">
                    <!-- Default list slot -->
                    <template v-slot="{ list }">
                        <article v-for="article in list" :key="article._path" class="card relative flex flex-col gap-4">
                            <div class="absolute -inset-y-4 -inset-x-4 z-0 scale-95 bg-slate-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-4 rounded-xl"></div>
                            <div class="relative z-[2] flex flex-col gap-4 bg-white shadow hover:shadow-lg h-full border-2 border-black rounded-lg">
                                <NuxtLink :to="article._path" class="flex flex-col gap-3 px-3 pb-3">
                                    <img :src="`${article.img}`" class="w-full rounded" width="300px" height="300px" :alt="article.title" :title="article.title" loading="lazy" />
                                </NuxtLink>
                                <div class="font-semibold text-xs text-slate-500">{{ formatDate(article.created_At) }}</div>
                                <NuxtLink :to="article._path" class="flex flex-col gap-3 px-3 pb-3">
                                    <h2 class="text-xl text-slate-900 font-extrabold">{{ article.title }}</h2>
                                    <p class="mt-4 max-w-3xl space-y-6 line-clamp-4">{{ article.description }}</p>
                                </NuxtLink>
                                <div class="flex gap-1">
                                    <NuxtLink :to="`/age/tags/${tag}`" v-for="(tag, n) in article.tags" :key="n" class="group inline-flex items-center h-6 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500">{{ tag }}</NuxtLink>
                                </div>
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
    definePageMeta({
        key: (route) => route.fullPath,
    });

    // get tag query
    const {
        query: { tags },
    } = useRoute();
    const filter = ref(tags?.split(","));

    // function to format date
    const formatDate = (date) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = ("0" + (d.getMonth() + 1)).slice(-2);
        const day = ("0" + d.getDate()).slice(-2);
        return `${day}-${month}-${year}`;
    };

    // set meta for page
    const title = ref('Blog Page Title')
    const description = ref('Blog Page Description')

    useHead({
        title,
        meta: [
            { name: "description", content: description },
            { hid: "og:title", property: "og:title", content: title },
            { hid: "og:description", property: "og:description", content: description },
        ],
    });
</script>
 
