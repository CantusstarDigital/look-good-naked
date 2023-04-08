<template>
    <div class="bg-white py-8 px-4 border-2 border-black shadow sm:px-10 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="flex flex-col gap-4">
            <h2 class="text-xl text-slate-900 font-bold">Carbohydrate Intake Calculator</h2>
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
                    <option value="1.2">Sedentary (little or no exercise)</option>
                    <option value="1.375">Lightly active (light exercise or sports 1-3 days a week)</option>
                    <option value="1.55">Moderately active (moderate exercise or sports 3-5 days a week)</option>
                    <option value="1.725">Very active (hard exercise or sports 6-7 days a week)</option>
                    <option value="1.9">Extra active (very hard exercise, physical job, or training twice a day)</option>
                </select>
            </div>
            <button @click="calculateCarbs"
                class="rounded-full bg-gray-700 py-2 px-4 text-white hover:bg-black cursor-pointer font-bold">Calculate
                Carbohydrate Intake</button>
            <div v-if="carbs">Your recommended daily carbohydrate intake: <div class="text-3xl font-bold">{{
                Math.round(carbs) }} grams</div>
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
const goal = ref('maintain');
const activity = ref(1.2);
const carbs = ref(null);
const weightUnit = ref('kg');
const heightUnit = ref('cm');

const calculateCarbs = () => {
    let weightInKg = weight.value;
    let heightInCm = height.value;

    if (weightUnit.value === 'lbs')
        weightInKg = weight.value * 0.45359237;

    if (heightUnit.value === 'in') {
        heightInCm = height.value * 2.54;
    }

    if (age.value > 0 && weightInKg > 0 && heightInCm > 0) {
        let bmr;
        if (sex.value === 'male') {
            bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age.value + 5;
        } else {
            bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age.value - 161;
        }

        const tdee = bmr * parseFloat(activity.value);
        let adjustedTdee = tdee;

        if (goal.value === 'lose') {
            adjustedTdee = tdee - 500;
        } else if (goal.value === 'gain') {
            adjustedTdee = tdee + 500;
        }

        carbs.value = (adjustedTdee * 0.45) / 4;
    } else {
        carbs.value = null;
    }
};
</script>