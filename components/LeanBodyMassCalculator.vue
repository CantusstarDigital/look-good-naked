<template>
  <div class="bg-white py-8 px-4 border-2 border-gray-950 shadow sm:px-10 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="flex flex-col gap-4">
      <h2 class="text-xl text-gray-900 font-bold">Lean Body Mass Calculator</h2>
      <div>
        <label for="weight" class="block text-sm font-semibold leading-6">Weight:</label>
        <div class="grid grid-cols-2 gap-4">
          <input type="number" id="weight" v-model.number="weight" min="0"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
          <select v-model="weightUnit"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6">
            <option value="kg">kg</option>
            <option value="lbs">lbs</option>
          </select>
        </div>
      </div>
      <div>
        <label for="bodyFat" class="block text-sm font-semibold leading-6">Body Fat Percentage:</label>
        <input type="number" id="bodyFat" v-model.number="bodyFat" min="0" max="100" step="0.1"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
      </div>
      <button @click="calculateLeanBodyMass"
        class="rounded-full bg-gray-700 py-2 px-4 text-white hover:bg-gray-950 cursor-pointer font-bold">Calculate Lean Body
        Mass</button>
      <div v-if="leanBodyMass">
        Your estimated lean body mass:
        <div class="text-3xl font-bold">{{ leanBodyMass.toFixed(2) }} {{ weightUnit }}</div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';

const weight = ref(0);
const bodyFat = ref(0);
const leanBodyMass = ref(null);
const weightUnit = ref('kg');

const calculateLeanBodyMass = () => {
  let weightValue = weight.value;

  if (weightValue > 0 && bodyFat.value >= 0 && bodyFat.value <= 100) {
    leanBodyMass.value = weightValue * (1 - bodyFat.value / 100);
  } else {
    leanBodyMass.value = null;
  }
};
</script>
  