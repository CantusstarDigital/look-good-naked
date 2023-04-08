<template>
  <div class="bg-white py-8 px-4 border-2 border-black shadow sm:px-10 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="flex flex-col gap-4">
      <h2 class="text-xl text-slate-900 font-bold">One-Rep Max Calculator</h2>
      <div>
        <label for="weight" class="block text-sm font-semibold leading-6">Weight Lifted:</label>
        <div class="grid grid-cols-2 gap-4">
          <input type="number" id="weight" v-model.number="weight" min="0"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
          <select v-model="weightUnit"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6">
            <option value="kg">kg</option>
            <option value="lb">pounds</option>
          </select>
        </div>
      </div>
      <div>
        <label for="reps" class="block text-sm font-semibold leading-6">Repetitions:</label>
        <input type="number" id="reps" v-model.number="reps" min="1"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
      </div>
      <button @click="calculateOneRepMax"
        class="rounded-full bg-gray-700 py-2 px-4 text-white hover:bg-black cursor-pointer font-bold">Calculate One-Rep
        Max</button>
      <div v-if="oneRepMax" class="flex flex-col gap-2">
        <div>
          Your estimated One-Rep Max is:
          <div class="text-3xl font-bold">{{ oneRepMax }} {{ weightUnit }}</div>
        </div>
        <table>
          <thead>
            <tr>
              <th class="text-left">Percentage</th>
              <th class="text-right">Weight ({{ weightUnit }})</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(percentage, index) in percentages" :key="index">
              <td class="text-left">{{ percentage * 100 }}%</td>
              <td class="text-right">{{ Math.round(oneRepMax * percentage) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';

const weight = ref(0);
const weightUnit = ref('kg');
const reps = ref(1);
const oneRepMax = ref(null);
const percentages = [1, 0.9, 0.8, 0.7, 0.6, 0.5];

const calculateOneRepMax = () => {
  const weightLifted = weightUnit.value === 'lb' ? weight.value * 0.453592 : weight.value;
  oneRepMax.value = Math.round((weightLifted * reps.value * 0.0333) + weightLifted);
  if (weightUnit.value === 'lb') {
    oneRepMax.value = Math.round(oneRepMax.value / 0.453592);
  }
};
</script>
  