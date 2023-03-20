<script setup>
// define prev and next props
defineProps(["prev", "next"]);
</script>

<template>
  <dl v-if="next" class="mt-12 flex border-t border-slate-200 pt-6">
      <div class="ml-auto text-right">
          <dt class="text-sm font-medium text-slate-900">Next</dt>
          <dd class="mt-1">
              <NuxtLink :to="next._path" class="cursor-pointer font-semibold text-slate-500 hover:text-slate-600">
                  {{ next.title }}
                  <span>→</span>
              </NuxtLink>
          </dd>
      </div>
  </dl>
</template>
