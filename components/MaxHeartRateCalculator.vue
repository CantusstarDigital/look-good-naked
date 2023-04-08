<template>
    <div class="bg-white py-8 px-4 border-2 border-black shadow sm:px-10 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="flex flex-col gap-4">
            <h2 class="text-xl text-slate-900 font-bold">Maximum Heart Rate Calculator</h2>
      <div>
        <label for="age" class="block text-sm font-semibold leading-6">Age:</label>
        <input type="number" id="age" v-model.number="age" min="0" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
      </div>
      <button @click="calculateMHR" class="rounded-full bg-gray-700 py-2 px-4 text-white hover:bg-black cursor-pointer font-bold">Calculate Maximum Heart Rate</button>
      <div v-if="mhr" class="flex flex-col gap-2">
        <div>
          Your estimated Maximum Heart Rate is: 
          <div class="text-3xl font-bold">{{ mhr }} bpm</div>
        </div>
        <table>
          <thead>
            <tr>
              <th class="text-left">Percentage</th>
              <th class="text-right">Heart Rate (bpm)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(percentage, index) in percentages" :key="index">
              <td>{{ percentage * 100 }}%</td>
              <td class="text-right">{{ Math.round(mhr * percentage) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const age = ref(0);
  const mhr = ref(null);
  const percentages = [0.9, 0.8, 0.7, 0.6, 0.5];
  
  const calculateMHR = () => {
    mhr.value = 220 - age.value;
  };
  </script>
  