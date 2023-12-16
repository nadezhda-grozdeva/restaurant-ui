<template>
    <div class="flex flex-row justify-between items-center content-center px-3 py-1 lg:mt-5 w-156 max-w-full mx-auto relative">
        <div class="logo flex flex-row py-0 lg:w-96 lg:max-w-full items-center">
            <img src="/src/assets/images/icons/japanese-food.svg" alt="logo"/>
            <heading1 class="italic tracking-tight pl-2">Bistro Bliss</heading1>
        </div>
        <div v-if="windowWidth >= 1024"
            class="
            navigation 
            flex flex-row justify-center content-center grow
            container 
            mx-auto 
            lg:relative 
            font-dm text-primary font-medium 
            gap-2.5">
            <NavBar/>
        </div>
        <div v-if="windowWidth < 1024" class="navigation">
            <NavMobile/>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import NavBar from './navigation/NavBar.vue';
import NavMobile from './navigation/NavMobile.vue';
import Heading1 from './UI/Heading1.vue';

const windowWidth = ref(window.innerWidth);

onMounted(() => {
    window.addEventListener('resize', () => {windowWidth.value = window.innerWidth} )
})

</script>