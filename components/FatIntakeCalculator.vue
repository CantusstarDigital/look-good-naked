<template>
  <div class="bg-white py-8 px-4 border-2 border-gray-950 shadow sm:px-10 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="flex flex-col gap-4">
      <h2 class="text-xl text-gray-900 font-bold">Fat Intake Calculator</h2>
      <div>
        <label for="calories" class="block text-sm font-semibold leading-6">Total Daily Calorie Intake:</label>
        <input type="number" id="calories" v-model.number="calories" min="0"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
      </div>
      <div>
        <label for="goal" class="block text-sm font-semibold leading-6">Goal:</label>
        <select id="goal" v-model="goal"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6">
          <option value="lose">Lose weight</option>
          <option value="maintain">Maintain weight</option>
          <option value="gain">Gain weight</option>
        </select>
      </div>
      <button @click="calculateFat"
        class="rounded-full bg-gray-700 py-2 px-4 text-white hover:bg-gray-950 cursor-pointer font-bold">Calculate Fat
        Intake</button>
      <div v-if="fat">
        Your recommended daily fat intake:
        <div class="text-3xl font-bold">{{ Math.round(fat) }} grams</div>
      </div>
    </div>
  </div>
  <div>
    Please note that this calculator assumes that 25% of the total daily calorie intake should come from fat. It's
    important to consult a healthcare professional or nutritionist for personalized recommendations, as individual needs
    may vary.
  </div>
</template>
  
<script setup>
import { ref } from 'vue';

const calories = ref(0);
const goal = ref('maintain');
const fat = ref(null);

const calculateFat = () => {
  let adjustedCalories = calories.value;

  if (goal.value === 'lose') {
    adjustedCalories = calories.value - 500;
  } else if (goal.value === 'gain') {
    adjustedCalories = calories.value + 500;
  }

  if (adjustedCalories > 0) {
    fat.value = (adjustedCalories * 0.25) / 9;
  } else {
    fat.value = null;
  }
};
</script>
  