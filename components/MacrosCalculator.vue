<template>
    <div class="bg-white py-8 px-4 border-2 border-gray-950 shadow sm:px-10 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="flex flex-col gap-4">
            <h2 class="text-xl text-gray-900 font-bold">Macronutrient Calculator</h2>
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
                <label for="goal" class="block text-sm font-semibold leading-6">Goal:</label>
                <select id="goal" v-model="goal"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6">
                    <option value="lose">Lose weight</option>
                    <option value="maintain">Maintain weight</option>
                    <option value="gain">Gain weight</option>
                </select>
            </div>
            <div>
                <label for="activity" class="block text-sm font-semibold leading-6">Activity Level:</label>
                <select id="activity" v-model="activity"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6">
                    <option value="1.2">Sedentary (little to no exercise)</option>
                    <option value="1.375">Lightly active (light exercise/sports 1-3 days a week)</option>
                    <option value="1.55">Moderately active (moderate exercise/sports 3-5 days a week)</option>
                    <option value="1.725">Very active (hard exercise/sports 6-7 days a week)</option>
                    <option value="1.9">Extra active (very hard exercise/sports and physical job)</option>
                </select>
            </div>
            <button @click="calculateMacros"
                class="rounded-full bg-gray-700 py-2 px-4 text-white hover:bg-gray-950 cursor-pointer font-bold">Calculate
                Macronutrients</button>
            <div v-if="macros" class="text-3xl font-bold flex flex-col gap-1">
                <p>Protein: {{ Math.round(macros.protein) }} grams</p>
                <p>Fat: {{ Math.round(macros.fat) }} grams</p>
                <p>Carbs: {{ Math.round(macros.carbs) }} grams</p>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const age = ref(0);
const sex = ref('male');
const height = ref(0);
const weight = ref(0);
const goal = ref('maintain');
const activity = ref('1.2');
const heightUnit = ref('cm');
const weightUnit = ref('kg');
const macros = ref(null);
const calculateMacros = () => {
    // Convert height and weight to metric units
    let heightInCm = height.value;
    let weightInKg = weight.value;
    if (heightUnit.value === 'in') {
        heightInCm *= 2.54;
    }
    if (weightUnit.value === 'lbs') {
        weightInKg *= 0.45359237;
    }

    // Calculate BMR
    const bmr =
        sex.value === 'male'
            ? 88.362 + 13.397 * weightInKg + 4.799 * heightInCm - 5.677 * age.value
            : 447.593 + 9.247 * weightInKg + 3.098 * heightInCm - 4.330 * age.value;

    // Calculate TDEE
    const tdee = bmr * parseFloat(activity.value);

    // Adjust TDEE based on goal
    let adjustedTdee = tdee;
    if (goal.value === 'lose') {
        adjustedTdee -= 500;
    } else if (goal.value === 'gain') {
        adjustedTdee += 500;
    }

    // Calculate macronutrients
    const protein = weightInKg * 2.2;
    const fat = (adjustedTdee * 0.25) / 9;
    const carbs = (adjustedTdee - (protein * 4 + fat * 9)) / 4;

    macros.value = { protein, fat, carbs };
};
</script>
  