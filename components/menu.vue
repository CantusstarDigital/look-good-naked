<template>
    
    <nav class="backdrop-blur-xl bg-white/80 w-full sticky top-0 z-50 py-2.5 shadow-lg">
        <div class="container px-6 md:px-8 flex flex-wrap items-center justify-between mx-auto">
            <NuxtLink to="/" class="flex items-center">
                <img src="/img/logo.svg" class="h-14" alt="Look Good Naked" title="Look Good Naked" loading="eager" />
            </NuxtLink>
            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                <li>
                <NuxtLink to="/fitness" class="block py-2 pl-3 pr-4 font-bold text-gray-700 rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0">Fitness Goals</NuxtLink>
                </li>
                <li>
                <NuxtLink to="/dietary" class="block py-2 pl-3 pr-4 font-bold text-gray-700 rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0">Dietary Preferences</NuxtLink>
                </li>
                <li>
                <NuxtLink to="/lifestyle" class="block py-2 pl-3 pr-4 font-bold text-gray-700 rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0">Lifestyle Factors</NuxtLink>
                </li>
                <li>
                <NuxtLink to="/health" class="block py-2 pl-3 pr-4 font-bold text-gray-700 rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0">Health Conditions</NuxtLink>
                </li>
                <li>
                <NuxtLink to="/age" class="block py-2 pl-3 pr-4 font-bold text-gray-700 rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0">Age Group</NuxtLink>
                </li>
            </ul>
            </div>
        </div>
    </nav>

</template>