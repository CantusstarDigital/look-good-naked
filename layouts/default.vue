<template>
    <div class="">
        <Menu />
        <slot />
        <Footer />
    </div>
</template>

<script setup>
// set meta for page
useHead({
    bodyAttrs: {
      class: 'scroll-smooth antialiased text-slate-600 bg-white'
    }
});
</script>
