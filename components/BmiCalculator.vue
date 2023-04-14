<template>
    <div class="bg-white py-8 px-4 border-2 border-gray-950 shadow sm:px-10 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="flex flex-col gap-4">
            <h2 class="text-xl text-gray-900 font-bold">BMI Calculator</h2>
            <div>
                <label for="weight" class="block text-sm font-semibold leading-6">Weight</label>
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
                <label for="height" class="block text-sm font-semibold leading-6">Height</label>
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
            <button @click="calculateBMI"
                class="rounded-full bg-gray-700 py-2 px-4 text-white hover:bg-gray-950 cursor-pointer font-bold">
                Calculate BMI
            </button>
            <div v-if="bmi">
                Your BMI and Category is:
                <div class="text-3xl font-bold">{{ bmi.toFixed(1) }} - {{ bmiCategory }}</div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const weight = ref(0);
const height = ref(0);
const bmi = ref(null);
const weightUnit = ref('kg');
const heightUnit = ref('cm');

const calculateBMI = () => {
    let weightInKg = weight.value;
    let heightInCm = height.value;

    if (weightUnit.value === 'lbs') {
        weightInKg = weight.value * 0.45359237;
    }

    if (heightUnit.value === 'in') {
        heightInCm = height.value * 2.54;
    }

    if (weightInKg > 0 && heightInCm > 0) {
        bmi.value = weightInKg / ((heightInCm / 100) ** 2);
    } else {
        bmi.value = null;
    }
};

const getBmiCategory = () => {
    if (bmi.value === null) {
        return '';
    } else if (bmi.value < 18.5) {
        return 'Underweight';
    } else if (bmi.value >= 18.5 && bmi.value < 24.9) {
        return 'Normal weight';
    } else if (bmi.value >= 24.9 && bmi.value < 30) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
};

const bmiCategory = computed(() => getBmiCategory());
</script>
  