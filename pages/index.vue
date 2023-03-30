<template>
    <div>

        <section class="py-20">
            <div class="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-10">
                <div class="max-w-2xl flex flex-col gap-4">
                    <h2 class="text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">Fitness Goals</h2>
                    <p>Welcome to our Fitness Goals hub, where we empower you to unlock your potential and achieve your health and wellness aspirations.</p>
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
                                <div class="relative z-[2] flex flex-col gap-4 bg-white shadow hover:shadow-lg h-full">
                                    <NuxtLink :to="article._path" class="w-full h-48">
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
                    <NuxtLink to="/fitness" class="rounded-full inline-flex items-center gap-2 bg-white py-2 px-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        View all articles
                        <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <section class="py-20 bg-slate-50">
            <div class="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-10">
                <div class="max-w-2xl flex flex-col gap-4">
                    <h2 class="text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">Dietary Preferences</h2>
                    <p>Welcome to your Dietary Preferences hub, where we delve into the world of popular diets and help you navigate your unique nutritional needs.</p>
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
                                <div class="relative z-[2] flex flex-col gap-4 bg-white shadow hover:shadow-lg h-full">
                                    <NuxtLink :to="article._path" class="w-full h-48">
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
                    <NuxtLink to="/dietary" class="rounded-full inline-flex items-center gap-2 bg-white py-2 px-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        View all articles
                        <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <section class="py-20">
            <div class="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-10">
                <div class="max-w-2xl flex flex-col gap-4">
                    <h2 class="text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">Lifestyle Factors</h2>
                    <p>Discover Your Ideal Diet: A Comprehensive Guide to Popular Dietary Preferences.</p>
                </div>
                <div class="mx-auto grid max-w-2xl grid-cols-1 gap-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <ContentList path="/lifestyle" :query="{
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
                                <div class="relative z-[2] flex flex-col gap-4 bg-white shadow hover:shadow-lg h-full">
                                    <NuxtLink :to="article._path" class="w-full h-48">
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
                    <NuxtLink to="/lifestyle" class="rounded-full inline-flex items-center gap-2 bg-white py-2 px-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        View all articles
                        <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <section class="py-20 bg-slate-50">
            <div class="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-10">
                <div class="max-w-2xl flex flex-col gap-4">
                    <h2 class="text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">Age Groups</h2>
                    <p>Discover Your Ideal Diet: A Comprehensive Guide to Popular Dietary Preferences.</p>
                </div>
                <div class="mx-auto grid max-w-2xl grid-cols-1 gap-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
                            <article v-for="article in list.slice(0, 3)" :key="article._path" class="card relative group flex flex-col gap-4">
                                <div class="relative z-[2] flex flex-col gap-4 bg-white shadow hover:shadow-lg h-full">
                                    <NuxtLink :to="article._path" class="w-full h-48">
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
                    <NuxtLink to="/age" class="rounded-full inline-flex items-center gap-2 bg-white py-2 px-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        View all articles
                        <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <section class="py-20">
            <div class="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-10">
                <div class="max-w-2xl flex flex-col gap-4">
                    <h2 class="text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">Health Conditions</h2>
                    <p>Discover Your Ideal Diet: A Comprehensive Guide to Popular Dietary Preferences.</p>
                </div>
                <div class="mx-auto grid max-w-2xl grid-cols-1 gap-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <ContentList path="/health" :query="{
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
                                <div class="relative z-[2] flex flex-col gap-4 bg-white shadow hover:shadow-lg h-full">
                                    <NuxtLink :to="article._path" class="w-full h-48">
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
                    <NuxtLink to="/health" class="rounded-full inline-flex items-center gap-2 bg-white py-2 px-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        View all articles
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

    const title = ref('Homepage Title')
    const description = ref('Homepage Description')

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