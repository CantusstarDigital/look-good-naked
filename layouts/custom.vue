<template>
    <div class="h-screen bg-cover bg-center bg-no-repeat bg-[url('/img/full-page.jpg')] overflow-hidden relative">
        <Menu />
        <drawer />
        <slot />
    </div>
</template>

<style> 
.navbar {
    position: fixed !important;
}
</style>

<script setup>
// set meta for page
useHead({
    bodyAttrs: {
        class: 'scroll-smooth h-screen antialiased text-gray-500 bg-white'
    }
});
</script>