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
    },
    script: [
        {
            src: '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-6425b4c4f55d5be4',
            // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
            tagPosition: 'bodyClose'
        }
    ]
});
</script>