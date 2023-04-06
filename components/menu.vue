<template>
    
    <nav class="navbar w-full sticky top-0 z-20 py-2.5 bg-white shadow">
        <div class="max-w-7xl px-6 md:px-8 flex flex-wrap items-center justify-between mx-auto">

            <NuxtLink to="/" class="flex items-center gap-2 group">
                <picture>
                    <img src="/img/logo.svg" class="h-14 w-14" width="56px" height="56px" alt="Phantom Wellness" title="Phantom Wellness" loading="eager" />
                </picture>
                <span class="hidden lg:flex self-center font-hand whitespace-nowrap text-slate-900 transition-opacity opacity-0 group-hover:opacity-100">Phantom Wellness</span>
            </NuxtLink>

            <button class="md:hidden font-hand px-2 leading-10 rounded transition-all bg-gray-50 hover:bg-gray-100 hover:text-black" type="button" data-drawer-target="drawer-right" data-drawer-show="drawer-right" data-drawer-placement="right" aria-controls="drawer-right">
                Menu
            </button>

            <div class="hidden w-full md:block md:w-auto">
                <ul class="flex items-center gap-x-8">                  
                    <li>
                        <NuxtLink to="/dietary" class="font-hand text-xl p-2 rounded flex leading-tight transition-all hover:text-black">Dietary</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/fitness" class="font-hand text-xl p-2 rounded flex leading-tight transition-all hover:text-black">Fitness</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/tools" class="font-hand text-xl p-2 rounded flex leading-tight transition-all hover:text-black">Tools</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>