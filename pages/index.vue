<template>
    <div>

        <section class="py-20 xl:py-40">
            <div class="max-w-5xl mx-auto px-6 md:px-8 flex flex-col gap-5 font-hand text-center text-4xl text-gray-950">
                <div>We believe that a more sustainable and equitable future starts with taking actionable steps to improve our <NuxtLink to="/dietary" class="text-red-500">health</NuxtLink>, <NuxtLink to="/fitness" class="text-red-500">fitness</NuxtLink>, and wellness- even in a world that's constantly changing and speeding up.</div>
            </div>
        </section>

        <section class="py-20">
            <div class="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-10">
                <div class="max-w-2xl flex flex-col gap-4">
                    <h2 class="text-3xl sm:text-4xl text-slate-900 font-hand">Dietary Preferences</h2>
                    <p class="font-bold">Discover Your Ideal Diet: A Comprehensive Guide to Popular Dietary Preferences.</p>
                </div>
                <div class="mx-auto grid max-w-2xl grid-cols-1 gap-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
                            <article v-for="article in list.slice(0, 3)" :key="article._path" class="card relative group flex flex-col gap-4">
                                <div class="relative z-[2] flex flex-col gap-4 bg-white shadow hover:shadow-lg h-full border-2 border-black rounded-lg">
                                    <NuxtLink :to="article._path" class="w-full h-48 rounded-t-lg">
                                        <img :src="`${article.img}`" class="object-cover w-full h-48" width="300px" height="300px" :alt="article.title" :title="article.title" loading="lazy" />
                                    </NuxtLink>
                                    <NuxtLink :to="article._path" class="group flex flex-col gap-3 px-3 pb-3">
                                        <h3 class="text-xl font-extrabold text-slate-900">{{ article.title }}</h3>
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
                </div>
                <div>
                    <NuxtLink to="/dietary" class="rounded-full font-hand inline-flex items-center gap-2 bg-gray-50 py-2 px-4 text-gray-900 hover:bg-gray-100">
                        All Dietary articles
                        <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <section class="py-20 xl:py-40">
            <div class="max-w-5xl mx-auto px-6 md:px-8 flex flex-col gap-5 font-hand text-center text-4xl text-gray-950">
                <div>Our mission is to provide you with the <NuxtLink to="/tools" class="text-red-500">tools you need</NuxtLink> to transform your lifestyle and design a future that prioritises your well-being. We're committed to learning and growing with you every step of the way.</div>
            </div>
        </section>

        <section class="py-20">
            <div class="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-10">
                <div class="max-w-2xl flex flex-col gap-4">
                    <h2 class="text-3xl sm:text-4xl text-slate-900 font-hand">Fitness Goals</h2>
                    <p class="font-bold">Unlock Your Potential: The Ultimate Guide to Achieving Your Fitness Goals</p>
                </div>
                <div class="mx-auto grid max-w-2xl grid-cols-1 gap-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
                            <article v-for="article in list.slice(0, 3)" :key="article._path" class="card relative group flex flex-col gap-4">
                                <div class="relative z-[2] flex flex-col gap-4 bg-white shadow hover:shadow-lg h-full border-2 border-black rounded-lg">
                                    <NuxtLink :to="article._path" class="w-full h-48 rounded-t-lg">
                                        <img :src="`${article.img}`" class="object-cover w-full h-48" width="300px" height="300px" :alt="article.title" :title="article.title" loading="lazy" />
                                    </NuxtLink>
                                    <NuxtLink :to="article._path" class="group flex flex-col gap-3 px-3 pb-3">
                                        <h3 class="text-xl font-extrabold text-slate-900">{{ article.title }}</h3>
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
                </div>
                <div>
                    <NuxtLink to="/fitness" class="rounded-full font-hand inline-flex items-center gap-2 bg-gray-50 py-2 px-4 text-gray-900 hover:bg-gray-100">
                        All Fitness articles
                        <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <section class="py-20">
            <div class="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-10">
                <div class="max-w-2xl flex flex-col gap-4">
                    <h2 class="text-3xl sm:text-4xl text-slate-900 font-hand">Fitness Tools</h2>
                    <p class="font-bold">Ultimate Fitness Toolset: Calculators for Every Fitness Goal</p>
                </div>
                <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <ContentList path="/tools" :query="{ 
                        only: ['title', 'description', '_path', 'img'],
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
                            <article v-for="article in list.slice(0, 4)" :key="article._path" class="card relative group flex flex-col gap-4">
                                <div class="relative z-[2] flex flex-col gap-4 bg-white shadow hover:shadow-lg h-full border-2 border-black rounded-lg">
                                    <NuxtLink :to="article._path" class="w-full h-48 rounded-t-lg">
                                        <img :src="`${article.img}`" class="object-cover w-full h-48" width="300px" height="300px" :alt="article.title" :title="article.title" loading="lazy" />
                                    </NuxtLink>
                                    <NuxtLink :to="article._path" class="group flex flex-col gap-3 px-3 pb-3">
                                        <h3 class="text-xl font-extrabold text-slate-900 line-clamp-1">{{ article.title }}</h3>
                                    </NuxtLink>
                                </div>
                            </article>
                        </template>
                        <!-- Not found slot to display message when no content us is found -->
                        <template #not-found>
                            <p>No articles found.</p>
                        </template>
                    </ContentList>
                </div>
                <div>
                    <NuxtLink to="/tools" class="rounded-full font-hand inline-flex items-center gap-2 bg-gray-50 py-2 px-4 text-gray-900 hover:bg-gray-100">
                        All Fitness tools
                        <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg>
                    </NuxtLink>
                </div>
            </div>
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

    const title = ref('The Ultimate Health & Wellness Guide')
    const description = ref('Discover the ultimate guide to health & wellness. Get actionable tips on fitness, nutrition, grooming, style, weight loss & more. Shop on Amazon too!')

    // set meta for page
    useHead({
        title,
        meta: [
            { name: "description", content: description },
            { hid: "og:title", property: "og:title", content: title },
            { hid: "og:description", property: "og:description", content: description },
        ],
    });
</script>