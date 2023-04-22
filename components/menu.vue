<template>
    
    <nav class="navbar w-full sticky top-0 z-20 py-2.5 bg-gray-950 shadow">
        <div class="max-w-7xl px-6 md:px-8 flex flex-wrap items-center justify-between mx-auto">

            <NuxtLink to="/" class="flex cursor-pointer">
                <picture>
                    <img src="/img/logo-white.svg" width="60px" height="60px" alt="Phantom Wellness" title="Phantom Wellness" loading="eager" />
                </picture>
            </NuxtLink>

            <button class="md:hidden px-2 leading-10 font-bold rounded transition-all bg-gray-800 text-gray-300" type="button" data-drawer-target="drawer-right" data-drawer-show="drawer-right" data-drawer-placement="right" aria-controls="drawer-right">
                Menu
            </button>

            <div class="hidden w-full md:block md:w-auto">
                <ul class="flex items-center gap-x-8">  
                    <li>
                        <NuxtLink to="/tools" class="p-2 font-bold flex leading-tight transition-all text-gray-300 hover:text-white">Fitness Tools</NuxtLink>
                    </li>                
                    <li>
                        <NuxtLink to="/dietary" class="p-2 font-bold flex transition-all text-gray-300 hover:text-white">Dietary</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/fitness" class="p-2 font-bold flex leading-tight transition-all text-gray-300 hover:text-white">Fitness</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>