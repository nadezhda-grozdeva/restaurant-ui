<template>
    <div class="flex flex-row justify-between items-center content-center py-1 md:mt-5 container mx-auto relative">
        <div class="logo flex flex-row py-0 w-96 max-w-full items-center">
            <img src="/src/assets/images/icons/japanese-food.svg" alt="logo"/>
            <h1 class="font-playfair font-semibold italic text-heading1 text-4xl leading-9 tracking-tight pl-2">Bistro Bliss</h1>
        </div>
        <!-- <div class="
            navigation 
            flex flex-row justify-center content-center 
            container 
            mx-auto 
            lg:relative 
            font-dm text-primary font-medium 
            gap-2.5">
            <NavBar/>
        </div> -->
        <div class="navigation">
            <!-- <NavBar/> -->
            <NavMobile/>
        </div>
    </div>
</template>

<script setup>
import NavBar from './NavBar.vue';
import NavMobile from './NavMobile.vue';
</script>