<template>

    <header class="bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80')] overflow-hidden relative">
        <section class="max-w-7xl mx-auto p-6 md:p-8 relative z-[2]">
            <div class="w-full lg:w-2/3 lg:pr-20 relative group">
                <div class="p-10 backdrop-blur-md bg-white/50 text-black shadow-xl">
                    <div class="flex flex-col gap-5">
                        <h1 class="font-extrabold text-4xl sm:text-5xl tracking-tight">BMI Calculator</h1>
                    </div>
                </div>
            </div>
        </section>
    </header>

    <div class="mt-20 mb-20 max-w-7xl mx-auto px-6 md:px-8">
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-10">
            <div class="flex flex-col gap-4">
                <h2 class="text-3xl text-slate-900 font-hand">What is a BMI Calculator?</h2>
                <p>Whether you're looking to lose weight, gain muscle, or improve your overall health, these user-friendly tools will make it easy to track your progress, optimise your workouts, and fine-tune your nutrition.</p> 
                <p>Discover your ideal calorie intake, calculate your body fat percentage, or estimate your one-rep max – all at your fingertips. Dive in and let these calculators guide your journey towards a stronger, healthier, and more confident you!</p>
                <div class="h-[1000px]"></div>
            </div>
            <div>
                <div class="xl:sticky top-24">
                    <BmiCalculator />
                </div>
            </div>
        </div>
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