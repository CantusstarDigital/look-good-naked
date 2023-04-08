<template>
  <div class="bg-white py-8 px-4 border-2 border-black shadow sm:px-10 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="flex flex-col gap-4">
      <h2 class="text-xl text-slate-900 font-bold">Water Intake Calculator</h2>
      <div>
        <label for="weight" class="block text-sm font-semibold leading-6">Weight:</label>
        <div class="grid grid-cols-2 gap-4">
          <input type="number" id="weight" v-model.number="weight" min="0"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
          <select v-model="weightUnit"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6">
            <option value="kg">kg</option>
            <option value="lb">lb</option>
          </select>
        </div>
      </div>
      <div>
        <label for="activityLevel" class="block text-sm font-semibold leading-6">Activity Level:</label>
        <select id="activityLevel" v-model="activityLevel"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6">
          <option value="1.2">Sedentary (little to no exercise)</option>
          <option value="1.375">Lightly active (light exercise/sports 1-3 days a week)</option>
          <option value="1.55">Moderately active (moderate exercise/sports 3-5 days a week)</option>
          <option value="1.725">Very active (hard exercise/sports 6-7 days a week)</option>
          <option value="1.9">Extra active (very hard exercise/sports, physical job or training twice a day)</option>
        </select>
      </div>
      <button @click="calculateWaterIntake"
        class="rounded-full bg-gray-700 py-2 px-4 text-white hover:bg-black cursor-pointer font-bold">Calculate Water
        Intake</button>
      <div v-if="waterIntake">
        Your recommended daily water intake is:
        <div class="text-3xl font-bold">{{ waterIntake }} L</div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';

const weight = ref(0);
const weightUnit = ref('kg');
const activityLevel = ref(1.2);
const waterIntake = ref(null);

const calculateWaterIntake = () => {
  const weightInKg = weightUnit.value === 'lb' ? weight.value * 0.453592 : weight.value;
  const baseIntake = weightInKg * 0.033;
  const activeIntake = baseIntake * activityLevel.value;

  waterIntake.value = activeIntake.toFixed(2);
};
</script>
  