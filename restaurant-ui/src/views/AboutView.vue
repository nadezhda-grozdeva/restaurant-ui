<template>
    <WeProvide class="about w-156 max-w-full mx-auto px-2 sm:px-0 lg:pt-28 lg:pb-24"/>
    <div class="flex flex-col gap-20 mt-8 lg:mt-16 mb-12 lg:mb-24">
        <div class="relative">
            <img v-lazy="imgFeelTheTaste" alt="feel the taste" class="mx-auto w-full lg:w-auto h-80 lg:h-auto"/>
            <div class="absolute 
                        right-2/4 translate-x-1/2 
                        top-1/2 -translate-y-1/2 lg:top-1/4 lg:translate-y-0 xl:top-1/3
                        w-5/6 md:w-9/12 lg:w-144 max-w-full 
                        text-center">
                <img v-lazy="playIcon" alt="Play" class="inline-block w-24 xl:w-28 mb-8 transition-all hover:scale-105 hover:cursor-pointer"/>
                <h2 class="lg:leading-11 text-white">Feel the authentic & original taste from us</h2>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row gap-20 justify-center container mx-auto">
            <div v-for="feature in features" :key="feature.id" class="flex flex-col lg:flex-row basis-3/12 items-center text-center lg:items-start lg:text-left gap-6">
                <img v-lazy="feature.imgUrl" :alt="feature.title" />
                <div class="flex flex-col gap-4">
                    <paragraph20 class="font-bold">{{ feature.title }}</paragraph20>
                    <paragraph16 class="font-normal">{{ feature.text }}</paragraph16>
                </div>
            </div>
        </div>
    </div>
    <div class="w-156 max-w-full mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-32 px-3 lg:px-0 lg:pl-3 py-14 lg:py-28">
        <div class="flex flex-col gap-14">
            <div class="flex flex-col gap-5 xl:pr-14 text-center lg:text-left">
                <heading2>A little information for our valuable guest</heading2>
                <paragraph16 class="font-normal">At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</paragraph16>
            </div>
            <div class="flex flex-row flex-wrap gap-6">
                <div v-for="item in informationItems" :key="item.id" class="flex flex-col gap-3.5 basis-2/5 grow pt-8 pb-10 border rounded-lg border-light items-center text-center">
                    <heading2>{{ item.value }}</heading2>
                    <paragraph18 class="font-medium">{{ item.text }}</paragraph18>
                </div>
            </div>
        </div>
        <img src="../assets/images/pexels-cottonbro-studio.jpg" alt="Cooking" class="max-w-full sm:max-w-80 lg:max-w-full mx-auto">
    </div>
    <Reviews class="w-156 max-w-full mx-auto pt-12 lg:pt-24 pb-16 lg:pb-32"/>
</template>

<script setup>
import WeProvide from '@/components/WeProvide.vue';
import Reviews from '@/components/Reviews.vue';
import Heading2 from '@/components/UI/Heading2.vue';
import Paragraph16 from '@/components/ui/Paragraph16.vue';
import Paragraph18 from '@/components/ui/Paragraph18.vue';
import Paragraph20 from '@/components/ui/Paragraph20.vue';

const imgFeelTheTaste = new URL('@/assets/images/feel-the-taste.jpg', import.meta.url).href;
const playIcon = new URL('@/assets/images/play.png', import.meta.url).href;

const features = [
    {
        id: 1,
        imgUrl: new URL('@/assets/images/icons/restaurant-menu.svg', import.meta.url).href,
        title: 'Multi Cuisine',
        text: 'In the new era of technology we look in the future with certainty life.'
    },
    {
        id: 2,
        imgUrl: new URL('@/assets/images/icons/oven.svg', import.meta.url).href,
        title: 'Easy To Order',
        text: 'In the new era of technology we look in the future with certainty life.'
    },
    {
        id: 3,
        imgUrl: new URL('@/assets/images/icons/timer.svg', import.meta.url).href,
        title: 'Fast Delivery',
        text: 'In the new era of technology we look in the future with certainty life.'
    }
]

const informationItems = [
    {
        id: 1,
        value: '3',
        text: 'Locations',
    },
    {
        id: 2,
        value: '1995',
        text: 'Founded',
    },
    {
        id: 3,
        value: '65+',
        text: 'Staff Members',
    },
    {
        id: 4,
        value: '100%',
        text: 'Satisfied Customers',
    }
]
</script>