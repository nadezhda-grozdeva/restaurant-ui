<template>
    <div ref="target" :class="[ animate ? 'animate-bounceUp': 'opacity-0']">
        <h2 class="text-center mb-12">Browse Our Menu</h2>
        <div class="flex flex-wrap flex-col sm:flex-row gap-6 mb-10 justify-center items-center">
            <base-card 
                v-for="menuItem in menuItems" 
                :key="menuItem.title" 
                :item="menuItem" 
                class="sm:basis-2/5 lg:basis-1/5 grow flex flex-col gap-7 items-center text-center px-4 xl:px-8 py-10">
                <template #img>
                    <img v-lazy="menuItem.img" 
                        :alt="menuItem.title" 
                        class="animation-delay-1000 delay-1000"
                        :class="{'animate-rotate360': animate }" />
                </template>
                <template #title>
                    {{ menuItem.title }}
                </template>
                <template #descr>
                    {{ menuItem.descr }}
                </template>
                <template #footer>
                    <div class="animation-delay-2000 delay-2000" :class="{ 'animate-scale': animate }">
                        <router-link :to="{name: menuItem.pathName}">
                            {{ menuItem.linkText }}
                        </router-link>
                    </div>
                </template>
            </base-card>
        </div>
    </div>
</template>

<script setup>
import { useIntersectionObserver } from '../use/useIntersectionObserver.js'
import BaseCard from './UI/BaseCard.vue';

const { animate, target } = useIntersectionObserver();
const menuItems = [
    {
        img: new URL('@/assets/images/icons/menu-breakfast.svg', import.meta.url).href,
        title: 'Breakfast',
        descr: 'In the new era of technology we look in the future with certainty and pride for our life.',
        linkText: 'Explore Menu',
        pathName: 'menu'
    },
    {
        img: new URL('@/assets/images/icons/menu-dishes.svg', import.meta.url).href,
        title: 'Main Dishes',
        descr: 'In the new era of technology we look in the future with certainty and pride for our life.',
        linkText: 'Explore Menu',
        pathName: 'menu'
    },
    {
        img: new URL('@/assets/images/icons/menu-drinks.svg', import.meta.url).href,
        title: 'Drinks',
        descr: 'In the new era of technology we look in the future with certainty and pride for our life.',
        linkText: 'Explore Menu',
        pathName: 'menu'
    },
    {
        img: new URL('@/assets/images/icons/menu-desserts.svg', import.meta.url).href,
        title: 'Desserts',
        descr: 'In the new era of technology we look in the future with certainty and pride for our life.',
        linkText: 'Explore Menu',
        pathName: 'menu'
    }
]

</script>