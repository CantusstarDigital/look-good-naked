<template>
    <div class="">
        <Menu />
        <drawer />
        <slot />
        <SignUp />
        <Footer />
    </div>
</template>

<script setup>
// set meta for page
useHead({
    bodyAttrs: {
        class: 'scroll-smooth antialiased text-gray-500 bg-white'
    }
});
</script>