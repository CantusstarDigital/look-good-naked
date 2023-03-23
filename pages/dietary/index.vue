<template>

    <header class="bg-cover bg-center bg-no-repeat bg-[url('/img/dietary.jpg')] overflow-hidden relative">
        <section class="container mx-auto px-6 md:px-8 py-20 md:py-40 relative z-[2]">
            <div class="w-full lg:w-1/2 lg:pr-20 relative group">
                <div class="flex flex-col gap-6">
                    <h1 class="font-bold text-white opacity-70">Dietary Preferences</h1>
                    <div class="font-extrabold text-4xl sm:text-5xl tracking-tight text-white">Discover Your Ideal Diet: <br>A Comprehensive Guide to Popular Dietary Preferences.</div>
                    <div class="space-x-2">
                        <span v-for="(tag, n) in articleTags" :key="n">
                            <NuxtLink :to="`/dietary/tags/${tag}`" class="group inline-flex items-center h-6 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500">{{ tag }}</NuxtLink>
                        </span>
                    </div>
                </div>
            </div>
        </section>
        <div class="absolute top-0 left-0 w-full lg:w-1/2 h-full z-[1] backdrop-blur-xl bg-slate-900/60 shadow-2xl border-r border-slate-50/[0.06]"></div>
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
                            <div class="absolute -inset-y-4 -inset-x-4 z-0 rounded-lg border-2 border-black scale-95 bg-slate-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-4"></div>
                            <div class="relative z-[2] flex flex-col gap-4">
                                <NuxtLink :to="article._path" class="w-full h-48">
                                    <img :src="`${article.img}`" class="object-cover w-full h-48 rounded-lg" width="300px" height="300px" :alt="article.title" :title="article.title" loading="lazy" />
                                </NuxtLink>
                                <NuxtLink :to="article._path">
                                    <h2 class="text-xl sm:text-2xl text-slate-900 font-extrabold tracking-tight">{{ article.title }}</h2>
                                    <div class="line-clamp-2 mt-4">{{ article.description }}</div>
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
 
