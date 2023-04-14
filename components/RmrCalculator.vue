<template>
  <div class="bg-white py-8 px-4 border-2 border-gray-950 shadow sm:px-10 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="flex flex-col gap-4">
      <h2 class="text-xl text-gray-900 font-bold">Resting Metabolic Rate Calculator</h2>
      <div>
        <label for="sex" class="block text-sm font-semibold leading-6">Sex:</label>
        <select id="sex" v-model="sex"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div>
        <label for="age" class="block text-sm font-semibold leading-6">Age:</label>
        <input type="number" id="age" v-model.number="age" min="0"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
      </div>
      <div>
        <label for="height" class="block text-sm font-semibold leading-6">Height:</label>
        <div class="grid grid-cols-2 gap-4">
          <input type="number" id="height" v-model.number="height" min="0"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
          <select v-model="heightUnit"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6">
            <option value="cm">cm</option>
            <option value="in">inches</option>
          </select>
        </div>
      </div>
      <div>
        <label for="weight" class="block text-sm font-semibold leading-6">Weight:</label>
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
      <button @click="calculateRMR"
        class="rounded-full bg-gray-700 py-2 px-4 text-white hover:bg-gray-950 cursor-pointer font-bold">Calculate Resting
        Metabolic Rate</button>
      <div v-if="rmr">
        Your estimated Resting Metabolic Rate is:
        <div class="text-3xl font-bold">{{ rmr }} kcal/day</div>
      </div>
    </div>
    <div>* Using the Mifflin-St Jeor equation</div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';

const sex = ref('male');
const age = ref(0);
const height = ref(0);
const weight = ref(0);
const heightUnit = ref('cm');
const weightUnit = ref('kg');
const rmr = ref(null);

const calculateRMR = () => {
  const heightInCm = heightUnit.value === 'in' ? height.value * 2.54 : height.value;
  const weightInKg = weightUnit.value === 'lb' ? weight.value * 0.453592 : weight.value;

  rmr.value = sex.value === 'male'
    ? Math.round(10 * weightInKg + 6.25 * heightInCm - 5 * age.value + 5)
    : Math.round(10 * weightInKg + 6.25 * heightInCm - 5 * age.value - 161);
};
</script>
  