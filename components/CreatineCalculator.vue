<template>
  <div class="bg-white py-8 px-4 border-2 border-black shadow sm:px-10 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="flex flex-col gap-4">
      <h2 class="text-xl text-slate-900 font-bold">Creatine Intake Calculator</h2>
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
      <button @click="calculateCreatine"
        class="rounded-full bg-gray-700 py-2 px-4 text-white hover:bg-black cursor-pointer font-bold">Calculate Creatine
        Intake</button>
      <div v-if="creatine">
        <p>Your recommended daily creatine intake:</p>
        <div class="text-3xl font-bold">{{ creatine }} grams</div>
      </div>
    </div>
  </div>
  <div>Please note that this calculator assumes a dosage of 0.1 grams of creatine per kilogram of body weight per day.
    It's important to consult a healthcare professional or nutritionist before starting any supplementation, as individual
    needs and recommendations may vary.</div>
</template>
  
<script setup>
import { ref } from 'vue';

const weight = ref(0);
const creatine = ref(null);
const weightUnit = ref('kg');

const calculateCreatine = () => {
  let weightInKg = weight.value;

  if (weightUnit.value === 'lbs') {
    weightInKg = weight.value * 0.45359237;
  }

  if (weightInKg > 0) {
    creatine.value = (weightInKg * 0.1).toFixed(2);
  } else {
    creatine.value = null;
  }
};
</script>
  