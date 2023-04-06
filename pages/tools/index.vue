<template>

    <header class="bg-cover bg-center bg-no-repeat bg-[url('/img/dietary.jpg')] overflow-hidden relative">
        <section class="max-w-7xl mx-auto p-6 md:p-8 relative z-[2]">
            <div class="w-full lg:w-2/3 lg:pr-20 relative group">
                <div class="p-10 backdrop-blur-md bg-white text-black border-2 border-black">
                    <div class="flex flex-col gap-5">
                        <h1 class="opacity-80 text-xl">Fitness Tools</h1>
                        <div class="font-extrabold text-3xl xl:text-4xl tracking-tight">Ultimate Fitness Toolset: <br>Calculators for Every Fitness Goal</div>
                    </div>
                </div>
            </div>
        </section>
    </header>

    <div class="mt-20 mb-20 max-w-7xl mx-auto px-6 md:px-8">
        <div class="max-w-2xl flex flex-col gap-4">
            <p class="text-xl font-semibold">Welcome to the Ultimate Fitness Toolset – your one-stop shop for all the essential calculators designed to help you achieve your fitness goals!</p>
            <p>Whether you're looking to lose weight, gain muscle, or improve your overall health, these user-friendly tools will make it easy to track your progress, optimise your workouts, and fine-tune your nutrition.</p> 
            <p>Discover your ideal calorie intake, calculate your body fat percentage, or estimate your one-rep max – all at your fingertips. Dive in and let these calculators guide your journey towards a stronger, healthier, and more confident you!</p>
        </div>
    </div>

    <div class="mt-20 mb-20 max-w-7xl mx-auto px-6 md:px-8">

        <section class="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">


                <ContentList path="/tools" :query="{
                    only: ['title', 'description', '_path', 'img', 'label'],
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
                            <div class="relative z-[2] flex flex-col gap-4 bg-white shadow hover:shadow-lg h-full border-2 border-black">
                                <NuxtLink :to="article._path" class="w-full h-48">
                                    <img :src="`${article.img}`" class="object-cover w-full h-48" width="300px" height="300px" :alt="article.title" :title="article.title" loading="lazy" />
                                </NuxtLink>
                                <NuxtLink :to="article._path" class="flex flex-col gap-3 px-3 pb-3">
                                    <h2 class="text-xl text-slate-900 font-extrabold">{{ article.label }}</h2>
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
    definePageMeta({
        key: (route) => route.fullPath,
    });

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
 
