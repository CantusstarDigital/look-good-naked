<template>

    <header class="bg-cover bg-center bg-no-repeat bg-[url('/img/fitness.jpg')] overflow-hidden relative">
        <section class="max-w-7xl mx-auto p-6 md:p-8 relative z-[2]">
            <div class="w-full lg:w-2/3 lg:pr-20 relative group">
                <div class="p-10 backdrop-blur-md bg-white text-black border-2 border-black rounded-lg">
                    <div class="flex flex-col gap-5">
                        <h1 class="opacity-80 font-hand text-xl">Your Fitness Goals</h1>
                        <div class="font-extrabold text-3xl xl:text-4xl tracking-tight">Unlock Your Potential: <br>The Ultimate Guide to Achieving Your Fitness Goals</div>
                        <div class="space-x-2">
                            <span v-for="(tag, n) in articleTags" :key="n">
                                <NuxtLink :to="`/fitness/tags/${tag}`" class="group font-hand inline-flex items-center h-6 rounded-full text-sm whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500">{{ tag }}</NuxtLink>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </header>


    <div class="mt-20 mb-20 max-w-7xl mx-auto px-6 md:px-8">
        <div class="max-w-2xl flex flex-col gap-4">
            <p class="text-xl font-semibold">Welcome to our Fitness Goals hub, where we empower you to unlock your potential and achieve your health and wellness aspirations.</p>
            <p>This comprehensive resource provides expert guidance on goal setting, workout routines, and strategies tailored to various fitness levels, all designed to help you stay motivated and on track.</p> 
            <p>Whether you aim to lose weight, build muscle, enhance your athletic performance, or improve your overall well-being, our articles and tips will provide the support and inspiration you need to conquer your fitness goals.</p> 
            <p>So, let's embark on this transformative journey together and discover the power of commitment, perseverance, and a healthy lifestyle.</p>
        </div>
    </div>

    <div class="mt-20 mb-20 max-w-7xl mx-auto px-6 md:px-8">

        <section class="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">


                <ContentList path="/fitness" :query="{
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
                            <div class="relative z-[2] flex flex-col gap-4 bg-white shadow hover:shadow-lg h-full border-2 border-black rounded-lg">
                                <NuxtLink :to="`/fitness/tags/${tag}`" v-for="(tag, n) in article.tags" :key="n" class="absolute right-0 top-4 bg-black text-white px-2 py-1 uppercase font-bold text-xs rounded-l-lg">{{ tag }}</NuxtLink>
                                <NuxtLink :to="article._path" class="w-full h-48 rounded-t-lg">
                                    <img :src="`${article.img}`" class="object-cover w-full h-48" width="300px" height="300px" :alt="article.title" :title="article.title" loading="lazy" />
                                </NuxtLink>
                                <NuxtLink :to="article._path" class="flex flex-col gap-3 px-3 pb-3">
                                    <h2 class="text-xl text-slate-900 font-extrabold">{{ article.title }}</h2>
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

    // get only tags data from `/fitness`
    const { data } = await useAsyncData("tags", () => queryContent("fitness").only(["tags"]).find());

    // generate array without duplicates from flattened array
    const articleTags = [...new Set(flatten(data.value, "tags"))];


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