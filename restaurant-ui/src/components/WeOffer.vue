<template>
    <div ref="target" :class="[ animate ? 'animate-enterTop': 'opacity-0']">
        <h2 class="lg:w-2/4 mb-12 text-center lg:text-left">We also offer unique services for your events</h2>
        <div class="flex flex-wrap flex-col sm:flex-row gap-6 mb-10 justify-center lg:justify-between items-center">
            <base-card 
                v-for="item in offerItems" 
                :key="item.title" 
                :item="item" 
                class="border-0 border-none
                    sm:basis-2/5 lg:basis-1/5 lg:grow flex flex-col 
                    text-center items-center lg:text-left 
                    md:px-8 lg:px-0 mb-8 lg:mb-0
                    gap-6">
                <template #img>
                    <img v-lazy="{src: item.img}" alt="menuItem.title" />
                </template>
                <template #title>
                    {{ item.title }}
                </template>
                <template #descr>
                    {{ item.descr }}
                </template>
            </base-card>
        </div>
    </div>
</template>

<script setup>
import BaseCard from './UI/BaseCard.vue';

import { useIntersectionObserver } from '../use/useIntersectionObserver.js'
const { animate, target } = useIntersectionObserver();

const offerItems = [
    {
        img: new URL('@/assets/images/caterings.png', import.meta.url).href,
        title: 'Catering',
        descr: 'In the new era of technology we look in the future with certainty for life.',
    },
    {
        img: new URL('@/assets/images/birthdays.png', import.meta.url).href,
        title: 'Birthdays',
        descr: 'In the new era of technology we look in the future with certainty for life.',
    },
    {
        img: new URL('@/assets/images/weddings.png', import.meta.url).href,
        title: 'Weddings',
        descr: 'In the new era of technology we look in the future with certainty for life.',
    },
    {
        img: new URL('@/assets/images/events.png', import.meta.url).href,
        title: 'Events',
        descr: 'In the new era of technology we look in the future with certainty for life.',
    },
]
</script>