<template>

    <header class="bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80')] overflow-hidden relative"> 
        <section class="container mx-auto px-6 md:px-8 py-20 relative z-[2]">
            <div class="w-full lg:w-1/2 lg:pr-20 relative group">
                <div class="flex flex-col gap-6">
                    <h1 class="font-bold text-white opacity-70">Fitness Calculators</h1>
                    <div class="font-extrabold text-4xl sm:text-5xl tracking-tight text-white">Ultimate Fitness Toolset: <br>Calculators for Every Fitness Goal</div>
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

    <div class="mt-20 mb-20 container mx-auto px-6 md:px-8">
        <div class="max-w-2xl flex flex-col gap-4">
            <p class="text-xl font-semibold">Welcome to the Ultimate Fitness Toolset – your one-stop shop for all the essential calculators designed to help you achieve your fitness goals!</p>
            <p>Whether you're looking to lose weight, gain muscle, or improve your overall health, these user-friendly tools will make it easy to track your progress, optimise your workouts, and fine-tune your nutrition.</p> 
            <p>Discover your ideal calorie intake, calculate your body fat percentage, or estimate your one-rep max – all at your fingertips. Dive in and let these calculators guide your journey towards a stronger, healthier, and more confident you!</p>
        </div>
    </div>

    <div class="mt-20 mb-20 container mx-auto px-6 md:px-8">
        <section class="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
            
            <article class="card relative flex flex-col gap-4">
                <div class="relative z-[2] flex flex-col gap-4 bg-white shadow hover:shadow-lg h-full">
                    <div to="" class="absolute right-0 top-4 bg-black text-white px-2 py-1 uppercase font-bold text-xs rounded-l-lg">Tag</div>
                    <NuxtLink to="" class="w-full h-48">
                        <img src="" class="object-cover w-full h-48" width="300px" height="300px" alt="BMI Calculator" title="BMI Calculator" loading="lazy" />
                    </NuxtLink>
                    <NuxtLink to="" class="flex flex-col gap-3 p-3">
                        <h2 class="text-xl text-slate-900 font-extrabold">BMI Calculator</h2>
                        <div class="line-clamp-2">Description</div>
                    </NuxtLink>
                </div>
            </article>

            <article class="card relative flex flex-col gap-4">
                <div class="relative z-[2] flex flex-col gap-4 bg-white shadow hover:shadow-lg h-full">
                    <div to="" class="absolute right-0 top-4 bg-black text-white px-2 py-1 uppercase font-bold text-xs rounded-l-lg">Tag</div>
                    <NuxtLink to="" class="w-full h-48">
                        <img src="" class="object-cover w-full h-48" width="300px" height="300px" alt="Calorie Calculator" title="Calorie Calculator" loading="lazy" />
                    </NuxtLink>
                    <NuxtLink to="" class="flex flex-col gap-3 p-3">
                        <h2 class="text-xl text-slate-900 font-extrabold">Calorie Calculator</h2>
                        <div class="line-clamp-2">Description</div>
                    </NuxtLink>
                </div>
            </article>

            <article class="card relative flex flex-col gap-4">
                <div class="relative z-[2] flex flex-col gap-4 bg-white shadow hover:shadow-lg h-full">
                    <div to="" class="absolute right-0 top-4 bg-black text-white px-2 py-1 uppercase font-bold text-xs rounded-l-lg">Tag</div>
                    <NuxtLink to="" class="w-full h-48">
                        <img src="" class="object-cover w-full h-48" width="300px" height="300px" alt="BMR Calculator" title="BMR Calculator" loading="lazy" />
                    </NuxtLink>
                    <NuxtLink to="" class="flex flex-col gap-3 p-3">
                        <h2 class="text-xl text-slate-900 font-extrabold">BMR Calculator</h2>
                        <div class="line-clamp-2">Description</div>
                    </NuxtLink>
                </div>
            </article>

        </section>
    </div>

</template>


<script setup>
    const title = ref('Fitness Calculators - BMI Calculator - Calorie Calculator ')
    const description = ref('Our fitness calculators will help you see where you are right now and help you plan where you want to get to! Calculate your fitness now')

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