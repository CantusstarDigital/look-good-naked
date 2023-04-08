<template>
    
    <nav class="navbar w-full sticky top-0 z-20 py-2.5 bg-white border-b-2 border-black">
        <div class="max-w-7xl px-6 md:px-8 flex flex-wrap items-center justify-between mx-auto">

            <NuxtLink to="/" class="flex">
                <picture>
                    <img src="/img/logo.svg" class="h-12" alt="Phantom Wellness" title="Phantom Wellness" loading="eager" />
                </picture>
            </NuxtLink>

            <button class="md:hidden px-2 leading-10 rounded transition-all bg-gray-50 hover:bg-gray-100 hover:text-black" type="button" data-drawer-target="drawer-right" data-drawer-show="drawer-right" data-drawer-placement="right" aria-controls="drawer-right">
                Menu
            </button>

            <div class="hidden w-full md:block md:w-auto">
                <ul class="flex items-center gap-x-8">  
                    <li>
                        <NuxtLink to="/tools" class="p-2 font-bold flex leading-tight transition-all hover:text-black">Fitness Tools</NuxtLink>
                    </li>                
                    <li>
                        <NuxtLink to="/dietary" class="p-2 font-bold flex transition-all hover:text-black">Dietary</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/fitness" class="p-2 font-bold flex leading-tight transition-all hover:text-black">Fitness</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>