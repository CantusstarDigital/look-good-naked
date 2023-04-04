<template>
    <section class="flex min-h-full flex-col justify-center px-6 lg:px-8">
        <div class="lg:mx-auto lg:w-full lg:max-w-md bg-white border-2 rounded-lg border-black p-10 flex flex-col gap-4 text-center shadow-lg">
            <NuxtLink to="/" class="flex items-center">
                <img src="/img/logo.svg" class="mx-auto h-20 w-auto" width="56px" height="56px" alt="Look Good Nood" title="Look Good Nood" loading="eager" />
            </NuxtLink>
            <h2 class="text-lg font-hand text-gray-900">Want more Look Good Nood?</h2>
            <h3 class="text-3xl sm:text-4xl text-slate-900 tracking-tight font-hand">Join our Health and Fitness newsletter</h3>
            <p>Take positive strides towards achieving your health goals by receiving top-notch workout routines, nutritional guidance, and health advice straight to your inbox.</p>
            <div class="text-left">
                <Mailchimp />
            </div>
        </div>
    </section>
</template>


<script setup>
    definePageMeta({
        layout: "custom", 
    });

    const title = ref('Homepage Title')
    const description = ref('Homepage Description')

    useHead({
        title,
        meta: [
            { name: "description", content: description },
            { hid: "og:title", property: "og:title", content: title },
            { hid: "og:description", property: "og:description", content: description },
        ],
    });
</script>