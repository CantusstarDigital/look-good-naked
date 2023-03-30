<template>

    <header class="bg-cover bg-center bg-no-repeat bg-[url('/img/dietary.jpg')] overflow-hidden relative">
        <section class="max-w-7xl mx-auto p-6 md:p-8 relative z-[2]">
            <div class="w-full lg:w-2/3 lg:pr-20 relative group">
                <div class="p-10 backdrop-blur-md bg-black/50 text-white shadow-xl rounded-lg">
                    <div class="flex flex-col gap-6">
                        <h1 class="font-bold opacity-70">Your Dietary Preferences</h1>
                        <div class="font-extrabold text-3xl xl:text-4xl tracking-tight">Discover Your Ideal Diet: <br>A Comprehensive Guide to Popular Dietary Preferences.</div>
                        <div class="space-x-2">
                            <span v-for="(tag, n) in articleTags" :key="n">
                                <NuxtLink :to="`/dietary/tags/${tag}`" class="group inline-flex items-center h-6 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500">{{ tag }}</NuxtLink>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </header>

    <div class="mt-20 mb-20 max-w-7xl mx-auto px-6 md:px-8">
        <div class="max-w-2xl flex flex-col gap-4">
            <p class="text-xl font-semibold">Welcome to your Dietary Preferences hub, where we delve into the world of popular diets and help you navigate your unique nutritional needs.</p>
            <p>Here, you'll find comprehensive guides to <span v-for="(tag, n) in articleTags" :key="n"><NuxtLink :to="`/dietary/tags/${tag}`" class="font-semibold">{{ tag }}, </NuxtLink></span> and gluten-free lifestyles, expert advice on meal planning, shopping tips, and delicious recipes tailored just for you.</p> 
            <p>Whether exploring new dietary options or seeking inspiration to maintain your current preferences, our resources will empower you to make informed choices and enjoy a fulfilling, nutritious journey.</p> 
            <p>We aim to simplify discovering and embracing the ideal diet to support your health and wellness objectives. So, dive in and uncover the secrets to unlocking your potential through the power of personalised nutrition. </p>
        </div>
    </div>

    <div class="mt-20 mb-20 max-w-7xl mx-auto px-6 md:px-8">

        <section class="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">


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
                        <article v-for="article in list" :key="article._path" class="card relative flex flex-col gap-4">
                            <div class="relative z-[2] flex flex-col gap-4 bg-white shadow hover:shadow-lg h-full">
                                <NuxtLink :to="`/dietary/tags/${tag}`" v-for="(tag, n) in article.tags" :key="n" class="absolute right-0 top-4 bg-black text-white px-2 py-1 uppercase font-bold text-xs rounded-l-lg">{{ tag }}</NuxtLink>
                                <NuxtLink :to="article._path" class="w-full h-48">
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

    // get only tags data from `/dietary`
    const { data } = await useAsyncData("tags", () => queryContent("dietary").only(["tags"]).find());

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
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const month = monthNames[d.getMonth()];
    const day = d.getDate();

    return `${day} ${month} ${year}`;
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
 
