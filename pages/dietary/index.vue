<template>

    <header class="bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80')] overflow-hidden relative">
        <section class="container mx-auto px-6 md:px-8 py-20 md:py-30 relative z-[2]">
            <div class="w-full lg:w-1/2 lg:pr-20 relative group">
                <div class="flex flex-col gap-4">
                    <div class="font-semibold text-blue-700">Dietary Preferences</div>
                    <h1 class="font-extrabold text-4xl sm:text-5xl tracking-tight text-slate-900">Discover Your Ideal Diet <span class="text-2xl sm:text-3xl block opacity-60 mt-3">A Comprehensive Guide to Popular Dietary Preferences.</span></h1>
                    <div class="space-x-2">
                        <span v-for="(tag, n) in articleTags" :key="n">
                        <NuxtLink :to="`/dietary/tags/${tag}`" class="group inline-flex items-center h-6 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500">{{ tag }}</NuxtLink>
                        </span>
                    </div>
                </div>
            </div>
        </section>
        <div class="absolute top-0 left-0 w-full lg:w-1/2 h-full z-[1] backdrop-blur-xl bg-white/40"></div>
    </header>

    <div class="pt-20 mb-20 container mx-auto px-6 md:px-8">

        <section class="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">


                <ContentList path="/dietary" :query="{
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
                        <article v-for="article in list" :key="article._path" class="group relative flex flex-col gap-4">
                            <div class="absolute -inset-y-4 -inset-x-4 z-0 scale-95 bg-slate-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-4 rounded-xl"></div>
                            <div class="relative z-[2] flex flex-col gap-4">
                                <NuxtLink :to="article._path" class="w-full h-48">
                                    <img :src="`${article.img}`" class="rounded object-cover w-full h-48" width="300px" height="300px" :alt="article.title" :title="article.title" loading="lazy" />
                                </NuxtLink>
                                <NuxtLink :to="article._path">
                                    <h2 class="text-xl sm:text-2xl text-slate-900 font-extrabold tracking-tight">{{ article.title }}</h2>
                                </NuxtLink>
                                <div class="flex gap-1">
                                    <NuxtLink :to="`/dietary/tags/${tag}`" v-for="(tag, n) in article.tags" :key="n" class="group inline-flex items-center h-6 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500">{{ tag }}</NuxtLink>
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
    // helper function to flatten tags array
    const flatten = (tags, key) => {
    console.log(tags);
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
    console.log({ _tags });
    return _tags;
    };

    // get only tags data from `/dietary`
    const { data } = await useAsyncData("tags", () => queryContent("dietary").only(["tags"]).find());

    // generate array without duplicates from flattened array
    const articleTags = [...new Set(flatten(data.value, "tags"))];
    console.log({ articleTags });


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
    const title = ref('A Comprehensive Guide to Popular Dietary Preferences')
    const description = ref('Discover popular dietary preferences like keto, vegan, paleo, and gluten-free. Expert tips, tailored meal plans, and tasty recipes to achieve your health goals.')

    useHead({
        title,
        meta: [
            { name: "description", content: description },
            { hid: "og:title", property: "og:title", content: title },
            { hid: "og:description", property: "og:description", content: description },
        ],
    });
</script>
 
