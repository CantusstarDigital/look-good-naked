<template>
    <div>

        <section class="py-20">
            <div class="container mx-auto px-6 md:px-8">
                <div class="max-w-2xl flex flex-col gap-4">
                    <h2 class="text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">Fitness Goals</h2>
                    <p>Discover Your Ideal Diet: A Comprehensive Guide to Popular Dietary Preferences.</p>
                </div>
                <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
                            <article v-for="article in list.slice(0, 3)" :key="article._path" class="relative group flex flex-col gap-4">
                                <div class="absolute -inset-y-5 -inset-x-5 z-0 rounded-lg border-2 border-black scale-95 bg-slate-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"></div>
                                <div class="relative z-[2] flex flex-col gap-4">
                                    <NuxtLink :to="article._path" class="w-full h-48 rounded-lg">
                                        <img :src="`${article.img}`" class="object-cover w-full h-48 rounded-lg" width="300px" height="300px" :alt="article.title" :title="article.title" loading="lazy" />
                                    </NuxtLink>
                                    <NuxtLink :to="article._path" class="group flex flex-col gap-2">
                                        <h3 class="text-xl sm:text-2xl text-slate-900 font-extrabold tracking-tight">{{ article.title }}</h3>
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
            </div>
        </section>

        <section class="py-20 bg-slate-50">
            <div class="container mx-auto px-6 md:px-8">
                <div class="max-w-2xl flex flex-col gap-4">
                    <h2 class="text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">Dietary Preferences</h2>
                    <p>Discover Your Ideal Diet: A Comprehensive Guide to Popular Dietary Preferences.</p>
                </div>
                <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
                            <article v-for="article in list.slice(0, 3)" :key="article._path" class="relative group flex flex-col gap-4">
                                <div class="absolute -inset-y-5 -inset-x-5 z-0 rounded-lg border-2 border-black scale-95 bg-slate-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"></div>
                                <div class="relative z-[2] flex flex-col gap-4">
                                    <NuxtLink :to="article._path" class="w-full h-48 rounded-lg">
                                        <img :src="`${article.img}`" class="object-cover w-full h-48 rounded-lg" width="300px" height="300px" :alt="article.title" :title="article.title" loading="lazy" />
                                    </NuxtLink>
                                    <NuxtLink :to="article._path" class="group flex flex-col gap-2">
                                        <h3 class="text-xl sm:text-2xl text-slate-900 font-extrabold tracking-tight">{{ article.title }}</h3>
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
            </div>
        </section>

        <section class="py-20">
            <div class="container mx-auto px-6 md:px-8">
                <div class="max-w-2xl flex flex-col gap-4">
                    <h2 class="text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">Lifestyle Factors</h2>
                    <p>Discover Your Ideal Diet: A Comprehensive Guide to Popular Dietary Preferences.</p>
                </div>
                <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
                            <article v-for="article in list.slice(0, 3)" :key="article._path" class="relative group flex flex-col gap-4">
                                <div class="absolute -inset-y-5 -inset-x-5 z-0 rounded-lg border-2 border-black scale-95 bg-slate-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"></div>
                                <div class="relative z-[2] flex flex-col gap-4">
                                    <NuxtLink :to="article._path" class="w-full h-48 rounded-lg">
                                        <img :src="`${article.img}`" class="object-cover w-full h-48 rounded-lg" width="300px" height="300px" :alt="article.title" :title="article.title" loading="lazy" />
                                    </NuxtLink>
                                    <NuxtLink :to="article._path" class="group flex flex-col gap-2">
                                        <h3 class="text-xl sm:text-2xl text-slate-900 font-extrabold tracking-tight">{{ article.title }}</h3>
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
            </div>
        </section>

        <section class="py-20 bg-slate-50">
            <div class="container mx-auto px-6 md:px-8">
                <div class="max-w-2xl flex flex-col gap-4">
                    <h2 class="text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">Age Groups</h2>
                    <p>Discover Your Ideal Diet: A Comprehensive Guide to Popular Dietary Preferences.</p>
                </div>
                <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
                            <article v-for="article in list.slice(0, 3)" :key="article._path" class="relative group flex flex-col gap-4">
                                <div class="absolute -inset-y-5 -inset-x-5 z-0 rounded-lg border-2 border-black scale-95 bg-slate-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"></div>
                                <div class="relative z-[2] flex flex-col gap-4">
                                    <NuxtLink :to="article._path" class="w-full h-48 rounded-lg">
                                        <img :src="`${article.img}`" class="object-cover w-full h-48 rounded-lg" width="300px" height="300px" :alt="article.title" :title="article.title" loading="lazy" />
                                    </NuxtLink>
                                    <NuxtLink :to="article._path" class="group flex flex-col gap-2">
                                        <h3 class="text-xl sm:text-2xl text-slate-900 font-extrabold tracking-tight">{{ article.title }}</h3>
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
            </div>
        </section>

        <section class="py-20">
            <div class="container mx-auto px-6 md:px-8">
                <div class="max-w-2xl flex flex-col gap-4">
                    <h2 class="text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">Health Conditions</h2>
                    <p>Discover Your Ideal Diet: A Comprehensive Guide to Popular Dietary Preferences.</p>
                </div>
                <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
                            <article v-for="article in list.slice(0, 3)" :key="article._path" class="relative group flex flex-col gap-4">
                                <div class="absolute -inset-y-5 -inset-x-5 z-0 rounded-lg border-2 border-black scale-95 bg-slate-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"></div>
                                <div class="relative z-[2] flex flex-col gap-4">
                                    <NuxtLink :to="article._path" class="w-full h-48 rounded-lg">
                                        <img :src="`${article.img}`" class="object-cover w-full h-48 rounded-lg" width="300px" height="300px" :alt="article.title" :title="article.title" loading="lazy" />
                                    </NuxtLink>
                                    <NuxtLink :to="article._path" class="group flex flex-col gap-2">
                                        <h3 class="text-xl sm:text-2xl text-slate-900 font-extrabold tracking-tight">{{ article.title }}</h3>
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