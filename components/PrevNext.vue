<script setup>
// define prev and next props
defineProps(["prev", "next"]);
</script>

<template>
    <div class="mt-12 flex border-t border-slate-200 pt-6">
        <div class="grid grid-cols-2 w-full gap-10">
            <div class="">
                <div v-if="prev">
                    <div class="text-sm font-hand text-slate-900"><span>←</span> Prev</div>
                    <div class="mt-1">
                        <NuxtLink :to="prev._path" class="cursor-pointer font-semibold text-slate-500 hover:text-slate-600">
                            {{ prev.title }}
                        </NuxtLink>
                    </div>
                </div>
                <span v-else>&nbsp;</span>
            </div>
            <div>
                <div v-if="next" class="text-right">
                    <div class="text-sm font-hand text-slate-900">Next <span>→</span></div>
                    <div class="mt-1">
                        <NuxtLink :to="next._path" class="cursor-pointer font-semibold text-slate-500 hover:text-slate-600">
                            {{ next.title }}
                        </NuxtLink>
                    </div>
                </div>
                <span v-else>&nbsp;</span>
            </div>
        </div>
    </div>
</template>
