<template>
    <h2 class="font-playfair text-primary font-medium leading-11 text-4xl sm:text-6xl text-center mb-12">Browse Our Menu</h2>
    <div class="flex flex-wrap flex-col sm:flex-row gap-6 mb-10 justify-center lg:justify-between items-center">
        <base-card v-for="menuItem in menuItems" :key="menuItem.title" :item="menuItem" class="sm:basis-5/12 lg:basis-1/5 flex flex-col items-center gap-7">
            <template #img>
                <img :src="menuItem.img" alt="menuItem.title" />
            </template>
            <template #title>
                <h3>{{ menuItem.title }}</h3>
            </template>
            <template #descr>
                <p>{{ menuItem.descr }}</p>
            </template>
            <template #footer>
                <router-link :to="{name: menuItem.pathName}">{{ menuItem.linkText }}</router-link>
            </template>
        </base-card>
    </div>
</template>

<script setup>
import BaseCard from './UI/BaseCard.vue';

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