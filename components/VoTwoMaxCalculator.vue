<template>
    <div class="bg-white py-8 px-4 border-2 border-black shadow sm:px-10 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="flex flex-col gap-4">
            <h2 class="text-xl text-slate-900 font-bold">VO2 Max Calculator</h2>
      <div>
        <label for="time" class="block text-sm font-semibold leading-6">1.5-mile run time (mm:ss):</label>
        <input type="text" id="time" v-model="time" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
      </div>
      <div>
        <label for="age" class="block text-sm font-semibold leading-6">Age (years):</label>
        <input type="number" id="age" v-model.number="age" min="0" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
      </div>
      <button @click="calculateVO2Max" class="rounded-full bg-gray-700 py-2 px-4 text-white hover:bg-black cursor-pointer font-bold">Calculate VO2 Max</button>
      <div v-if="vo2Max">
        Your estimated VO2 Max is: 
        <div class="text-3xl font-bold">{{ vo2Max }} mL/(kg·min)</div>
      </div>
    </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const time = ref('00:00');
  const age = ref(0);
  const vo2Max = ref(null);
  
  const calculateVO2Max = () => {
    const [minutes, seconds] = time.value.split(':').map(Number);
    const totalTimeSeconds = minutes * 60 + seconds;
    const vo2 = 3.5 + 483 / totalTimeSeconds;
  
    vo2Max.value = vo2.toFixed(2);
  };
  </script>
  