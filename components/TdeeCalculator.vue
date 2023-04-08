<template>
    <div class="bg-white py-8 px-4 border-2 border-black shadow sm:px-10 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="flex flex-col gap-4">
            <h2 class="text-xl text-slate-900 font-bold">Total Daily Energy Expenditure Calculator</h2>
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
            <div>
                <label for="activityLevel" class="block text-sm font-semibold leading-6">Activity Level:</label>
                <select id="activityLevel" v-model="activityLevel"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6">
                    <option value="1.2">Sedentary (little or no exercise)</option>
                    <option value="1.375">Lightly active (light exercise/sports 1-3 days a week)</option>
                    <option value="1.55">Moderately active (moderate exercise/sports 3-5 days a week)</option>
                    <option value="1.725">Very active (hard exercise/sports 6-7 days a week)</option>
                    <option value="1.9">Extra active (very hard exercise/sports & physical job or 2x training)</option>
                </select>
            </div>
            <button @click="calculateTDEE"
                class="rounded-full bg-gray-700 py-2 px-4 text-white hover:bg-black cursor-pointer font-bold">Calculate
                TDEE</button>
            <div v-if="tdee">
                Estimated Total Daily Energy Expenditure is:
                <div class="text-3xl font-bold">{{ tdee }} kcal/day</div>
            </div>
        </div>
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
const activityLevel = ref(1.2);
const tdee = ref(null);

const calculateTDEE = () => {
    const heightInCm = heightUnit.value === 'in' ? height.value * 2.54 : height.value;
    const weightInKg = weightUnit.value === 'lb' ? weight.value * 0.453592 : weight.value;

    const bmr = sex.value === 'male'
        ? Math.round(10 * weightInKg + 6.25 * heightInCm - 5 * age.value + 5)
        : Math.round(10 * weightInKg + 6
            * heightInCm - 5 * age.value - 161);

    tdee.value = Math.round(bmr * activityLevel.value);
};
</script>
