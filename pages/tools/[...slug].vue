<template>

  <header v-if="data.article" class="overflow-hidden relative bg-slate-950">
    <section class="max-w-7xl mx-auto p-6 md:p-8 relative z-[2] text-white">
          <div class="flex flex-col gap-3">
            <div class="opacity-80 text-xl">Fitness Tools</div>
            <h1 class="font-extrabold text-3xl xl:text-4xl tracking-tight">{{ data.article.title }}</h1>
          </div>
    </section>
  </header>

  <div class="mt-20 mb-20 max-w-7xl mx-auto px-6 md:px-8">
    <nav class="flex" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-1">
          <li>
            <div>
              <NuxtLink to="/">
                <picture>
                  <img src="/img/logo.svg" class="h-10 w-10 opacity-70 hover:opacity-100" width="56px" height="56px" alt="Look Good Nood" title="Look Good Nood" loading="eager" />
                </picture>
              </NuxtLink>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
              </svg>
              <NuxtLink to="/tools" class="ml-1 text-sm font-bold text-gray-500 hover:text-black">All Tools</NuxtLink>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
              </svg>
              <div class="ml-1 text-sm font-bold text-gray-500">{{ data.article.label }}</div>
            </div>
          </li>
        </ol>
      </nav>
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-10">
      <article class="prose prose-a:no-underline">
        <ContentRenderer :value="data.article">
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </article>
      <div>
        <div class="xl:sticky top-24">
          <component :is="articleComponent" v-if="articleComponent" :article="data.article" />
        </div>
      </div>
    </div>
  </div>

</template>


<script setup>
import { ref, shallowRef } from 'vue';

const loadComponent = async (slug) => {
  let component;
  switch (slug) {

    case 'bmi-calculator':
    component = await import('~/components/BmiCalculator.vue');
    break;

    case 'bmr-calculator':
    component = await import('~/components/BmrCalculator.vue');
    break;

    case 'calorie-calculator':
    component = await import('~/components/CalorieCalculator.vue');
    break;

    case 'carbohydrate-calculator':
    component = await import('~/components/CarbCalculator.vue');
    break;

    case 'creatine-calculator':
    component = await import('~/components/CreatineCalculator.vue');
    break;

    case 'fat-intake-calculator':
    component = await import('~/components/FatIntakeCalculator.vue');
    break;

    case 'height-weight-converter':
    component = await import('~/components/HeightWeightConverter.vue');
    break;

    case 'lean-body-mass-calculator':
    component = await import('~/components/LeanBodyMassCalculator.vue');
    break;

    case 'macronutrient-calculator':
    component = await import('~/components/MacrosCalculator.vue');
    break;

    case 'maximum-hert-rate-calculator':
    component = await import('~/components/MaxHeartRateCalculator.vue');
    break;

    case 'nutrition-calculator':
    component = await import('~/components/NutitionCalculator.vue');
    break;

    case 'one-rep-max-calculator':
    component = await import('~/components/OneRepMaxCalculator.vue');
    break;

    case 'metabolic-rate-calculator':
    component = await import('~/components/RmrCalculator.vue');
    break;

    case 'tdee-calculator':
    component = await import('~/components/TdeeCalculator.vue');
    break;

    case 'time-pace-distance-calculator':
    component = await import('~/components/TimePaceCalculator.vue');
    break;

    case 'vo2-max-calculator':
    component = await import('~/components/VoTwoMaxCalculator.vue');
    break;

    case 'water-intake-calculator':
    component = await import('~/components/WaterIntakeCalculator.vue');
    break;

    default:
      throw new Error('Component not found');
  }
  return component.default;
};

const articleComponent = shallowRef(null);

const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {
  let article = queryContent().where({ _path: path }).findOne();
  let surround = queryContent().only(["_path", "title", "description", "created_At"]).sort({ date: 1 }).findSurround(path);

  // Load the appropriate component based on the content article
  articleComponent.value = await loadComponent(path.split('/').pop());

  return {
    article: await article,
    surround: await surround,
  };
});

useHead({
  title: data.value.article.title,
  meta: [
    { name: "description", content: data.value.article.description },
    { hid: "og:title", property: "og:title", content: data.value.article.title },
    { hid: "og:description", property: "og:description", content: data.value.article.description },
  ],
});
</script>