<template>

    <header class="bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80')] overflow-hidden relative">
        <section class="max-w-7xl mx-auto p-6 md:p-8 relative z-[2]">
            <div class="w-full lg:w-2/3 lg:pr-20 relative group">
                <div class="p-10 backdrop-blur-md bg-white/50 text-black shadow-xl">
                    <div class="flex flex-col gap-5">
                        <h1 class="font-extrabold text-4xl sm:text-5xl tracking-tight">Calorie Calculator</h1>
                    </div>
                </div>
            </div>
        </section>
    </header>

    <div class="mt-20 mb-20 max-w-7xl mx-auto px-6 md:px-8">
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-10">
            <div class="flex flex-col gap-10">
                <div class="flex flex-col gap-4">
                    <h2 class="text-3xl text-slate-900 font-hand">What is a BMI Calculator?</h2>
                    <p>A BMI (Body Mass Index) calculator is a tool that determines a person's BMI by considering their weight and height.</p> 
                    <p>BMI is a widely used metric for assessing an individual's body weight to height. It can provide a general understanding of whether a person is underweight, average weight, overweight, or obese.</p>
                </div>
                <div class="flex flex-col gap-4">
                    <h2 class="text-3xl text-slate-900 font-hand">BMI Ranges</h2>
                    <p>A BMI calculator typically asks for a person's weight and height and then calculates the BMI value based on these inputs. The resulting BMI value is then placed within specific categories defined by the World Health Organization (WHO):</p>
                    <table class="table-auto border-collapse border border-slate-400">
                        <tr>
                            <td class="border border-slate-100 p-2">Underweight:</td>
                            <td class="border border-slate-100 p-2">BMI below 18.5</td>
                        </tr>
                        <tr>
                            <td class="border border-slate-100 p-2">Normal weight</td>
                            <td class="border border-slate-100 p-2">BMI between 18.5 and 24.9</td>
                        </tr>
                        <tr>
                            <td class="border border-slate-100 p-2">Overweight</td>
                            <td class="border border-slate-100 p-2">BMI between 25 and 29.9</td>
                        </tr>
                        <tr>
                            <td class="border border-slate-100 p-2">Obesity class I (Moderate)</td>
                            <td class="border border-slate-100 p-2">BMI between 30 and 34.9</td>
                        </tr>
                        <tr>
                            <td class="border border-slate-100 p-2">Obesity class II (Severe)</td>
                            <td class="border border-slate-100 p-2">BMI between 35 and 39.9</td>
                        </tr>
                        <tr>
                            <td class="border border-slate-100 p-2">Obesity class III (Very severe or morbidly)</td>
                            <td class="border border-slate-100 p-2">BMI over 40</td>
                        </tr>
                    </table>
                </div>
                <div class="flex flex-col gap-4">
                    <h2 class="text-3xl text-slate-900 font-hand">Special Note</h2>
                    <p>It's important to note that BMI is just one measure of a person's health and has limitations. For instance, it does not differentiate between fat and muscle mass, so athletes and bodybuilders may have a high BMI even though they are not overweight or obese.</p> 
                    <p>Similarly, older individuals or those with low muscle mass may have a lower BMI despite having excess body fat. It's always best to consider other factors and consult a healthcare professional for a more comprehensive health assessment.</p>
                </div>
            </div>
            <div>
                <div class="xl:sticky top-24">
                    <CalorieCalculator />
                </div>
            </div>
        </div>
    </div>

</template>


<script setup>
    const title = ref('Fitness Calculators - BMI Calculator - Calorie Calculator ')
    const description = ref('Our fitness calculators will help you see where you are right now and help you plan where you want to get to! Calculate your fitness now')

    // set meta for page
    useHead({
        title,
        meta: [
            { name: "description", content: description },
            { hid: "og:title", property: "og:title", content: title },
            { hid: "og:description", property: "og:description", content: description },
        ],
    });
</script>