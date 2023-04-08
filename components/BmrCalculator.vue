<template>
  <div class="bg-white py-8 px-4 border-2 border-black shadow sm:px-10 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="flex flex-col gap-4">
      <h2 class="text-xl text-slate-900 font-bold">BMR Calculator</h2>
      <div>
        <label for="age" class="block text-sm font-semibold leading-6">Age:</label>
        <input type="number" id="age" v-model.number="age" min="0"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
      </div>
      <div>
        <label for="sex" class="block text-sm font-semibold leading-6">Sex:</label>
        <select id="sex" v-model="sex"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
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
        <label for="height" class="block text-sm font-semibold leading-6">Height:</label>
        <div class="grid grid-cols-2 gap-4">
          <input type="number" id="height" v-model.number="height" min="0"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
          <select v-model="heightUnit"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6">
            <option value="cm">cm</option>
            <option value="in">in</option>
          </select>
        </div>
      </div>
      <button @click="calculateBmr"
        class="rounded-full bg-gray-700 py-2 px-4 text-white hover:bg-black cursor-pointer font-bold">Calculate
        BMR</button>
      <div v-if="bmr">
        Your estimated BMR:
        <div class="text-3xl font-bold">{{ Math.round(bmr) }} calories/day</div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';

const age = ref(0);
const sex = ref('male');
const weight = ref(0);
const height = ref(0);
const bmr = ref(null);
const weightUnit = ref('kg');
const heightUnit = ref('cm');

const calculateBmr = () => {
  let weightInKg = weight.value;
  let heightInCm = height.value;

  if (weightUnit.value === 'lbs') {
    weightInKg = weight.value * 0.45359237;
  }

  if (heightUnit.value === 'in') {
    heightInCm = height.value * 2.54;
  }

  if (age.value > 0 && weightInKg > 0 && heightInCm > 0) {
    if (sex.value === 'male') {
      bmr.value = 10 * weightInKg + 6.25 * heightInCm - 5 * age.value + 5;
    } else {
      bmr.value = 10 * weightInKg + 6.25 * heightInCm - 5 * age.value - 161;
    }
  } else {
    bmr.value = null;
  }
};
</script>
  