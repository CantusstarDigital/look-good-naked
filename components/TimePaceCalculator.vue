<template>
  <div class="bg-white py-8 px-4 border-2 border-gray-950 shadow sm:px-10 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="flex flex-col gap-4">
      <h2 class="text-xl text-gray-900 font-bold">Time, Pace, and Distance Calculator</h2>
      <div>
        <label for="distance" class="block text-sm font-semibold leading-6">Distance:</label>
        <div class="grid grid-cols-2 gap-4">
          <input type="number" id="distance" v-model.number="distance" min="0"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
          <select v-model="distanceUnit"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6">
            <option value="km">km</option>
            <option value="m">meters</option>
            <option value="yd">yards</option>
            <option value="mi">miles</option>
          </select>
        </div>
      </div>
      <div>
        <label for="time" class="block text-sm font-semibold leading-6">Time (hh:mm:ss):</label>
        <input type="text" id="time" v-model="time"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
      </div>
      <button @click="calculatePace"
        class="rounded-full bg-gray-700 py-2 px-4 text-white hover:bg-gray-950 cursor-pointer font-bold">Calculate
        Pace</button>
      <div v-if="pace">
        Your pace is:
        <div class="text-3xl font-bold">{{ pace }} min/{{ distanceUnit }}</div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';

const distance = ref(0);
const distanceUnit = ref('km');
const time = ref('00:00:00');
const pace = ref(null);

const convertToMeters = (distance, unit) => {
  const conversionFactors = {
    km: 1000,
    m: 1,
    yd: 0.9144,
    mi: 1609.34,
  };
  return distance * conversionFactors[unit];
};

const calculatePace = () => {
  const [hours, minutes, seconds] = time.value.split(':').map(Number);
  const totalTimeSeconds = hours * 3600 + minutes * 60 + seconds;
  const distanceInMeters = convertToMeters(distance.value, distanceUnit.value);
  const paceInSecondsPerMeter = totalTimeSeconds / distanceInMeters;
  const paceInSelectedUnit = paceInSecondsPerMeter * convertToMeters(1, distanceUnit.value) / 60;

  pace.value = paceInSelectedUnit.toFixed(2);
};
</script>
  