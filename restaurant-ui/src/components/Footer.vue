<template>
    <div class="bg-primary px-3 pb-3 flex flex-col gap-32" 
        >
        <div ref="target" 
            class="flex flex-col lg:flex-row gap-16 lg:gap-32
                    w-156 max-w-full 
                    mx-auto px-2 sm:px-0 py-14 lg:pt-28 
                    text-center lg:text-left"
            :class="[ animate ? 'animate-bounceUp': (playAnimation ? 'opacity-0' : '')]" >
            <div class="flex flex-col gap-8 lg:basis-4/12 xl:basis-45 grow items-center lg:items-start">
                <div class="flex flex-row items-center">
                    <img src="/src/assets/images/icons/japanese-food-white.svg" alt="logo"/>
                    <h2 class="text-white font-playfair text-4xl italic font-semibold leading-7 tracking-tight">Bistro Bliss</h2>
                </div>
                <paragraph16 class="font-normal text-mediumGray">In the new era of technology we look a in the future with certainty and pride to for our company.</paragraph16>
                <div class="flex flex-row gap-3">
                    <template v-for="item in socials" :key="item.name">
                        <a :href="item.url" target="_blank" title="Visit website" class="hover:animate-rotate360">
                            <img v-lazy="item.imgUrl" :alt="item.name" />
                        </a>
                    </template>
                </div>
            </div>
            <div class="flex flex-row gap-28 lg:basis-5/12 xl:basis-50 grow justify-center lg:justify-start">
                <div class="flex flex-col gap-10">
                    <paragraph16 class="font-bold text-white">Pages</paragraph16>
                    <div class="flex flex-col gap-5 text-mediumGray">
                        <router-link :to="{ name: 'home'}" class="font-dm text-base font-normal leading-6">Home</router-link>
                        <router-link :to="{ name: 'about'}" class="font-dm text-base font-normal leading-6">About</router-link>
                        <router-link to="/" class="font-dm text-base font-normal leading-6">Pricing</router-link>
                        <router-link :to="{ name: 'blog'}" class="font-dm text-base font-normal leading-6">Blog</router-link>
                        <router-link :to="{ name: 'contact'}" class="font-dm text-base font-normal leading-6">Contact</router-link>
                        <router-link to="/" class="font-dm text-base font-normal leading-6">Delivery</router-link>
                    </div>
                </div>
                <div class="flex flex-col gap-10">
                    <paragraph16 class="font-bold text-white">Utility Pages</paragraph16>
                    <div class="flex flex-col gap-5 text-mediumGray">
                        <router-link to="/" class="font-dm text-base font-normal leading-6">Start Here</router-link>
                        <router-link to="/" class="font-dm text-base font-normal leading-6">Styleguide</router-link>
                        <router-link to="/" class="font-dm text-base font-normal leading-6">Password Protected</router-link>
                        <router-link to="/" class="font-dm text-base font-normal leading-6">404 Not Found</router-link>
                        <router-link to="/" class="font-dm text-base font-normal leading-6">Licenses</router-link>
                        <router-link to="/" class="font-dm text-base font-normal leading-6">Changelog</router-link>
                        <router-link to="/" class="font-dm text-base font-normal leading-6">View More</router-link>
                    </div>
                </div>
            </div >
            <div class="flex flex-col gap-10 lg:basis-65 grow">
                <paragraph16 class="font-bold text-white">Follow Us On Instagram</paragraph16>
                <div class="flex flex-row flex-wrap gap-4 justify-center lg:justify-start">
                    <template v-for="item in footerImgs" >
                        <img v-lazy="item.imgUrl" :alt="item.alt" class="w-5/12 sm:w-1/5 lg:w-5/12 xl:w-auto"/>
                    </template>
                </div>
            </div>
        </div>
        <div class="flex flex-row justify-center text-center">
            <paragraph16 class="font-normal text-tertiary">Copyright © 2023 
                <a href="https://www.figma.com/community/file/1294173080512093987/food-website-design" title="Visit page" target="_blank" class="underline">
                    Design by Jaydeep Kaila
                </a>
                <span class="px-2">/</span>
                <a href="https://github.com/nadezhda-grozdeva/restaurant-ui" title="Visit page" target="_blank" class="underline">
                    Developed by Nadezhda Grozdeva
                </a>
                . All Rights Reserved
            </paragraph16>
        </div>
    </div>
</template>

<script setup>
import Paragraph16 from '../components/UI/Paragraph16.vue'
import { useIntersectionObserver } from '../use/useIntersectionObserver.js'
const { animate, target, playAnimation } = useIntersectionObserver();

const socials = [
    {
        imgUrl: new URL('@/assets/images/icons/twitter.png', import.meta.url).href,
        name: 'twitter',
        url: 'https://twitter.com',
    },
    {
        imgUrl: new URL('@/assets/images/icons/facebook.png', import.meta.url).href,
        name: 'facebook',
        url: 'https://facebook.com',
    },
    {
        imgUrl: new URL('@/assets/images/icons/instagram.png', import.meta.url).href,
        name: 'instagram',
        url: 'https://instagram.com',
    },
    {
        imgUrl: new URL('@/assets/images/icons/github.png', import.meta.url).href,
        name: 'github',
        url: 'https://github.com',
    }
]
const footerImgs = [
    {
        imgUrl: new URL('@/assets/images/footer/pexels-steve.png', import.meta.url).href,
        alt: 'Meal'
    },
    {
        imgUrl: new URL('@/assets/images/footer/eiliv-aceron.png', import.meta.url).href,
        alt: 'Meal'
    },
    {
        imgUrl: new URL('@/assets/images/footer/pexels-ella.png', import.meta.url).href,
        alt: 'Meal'
    },
    {
        imgUrl: new URL('@/assets/images/footer/pexels-ash.png', import.meta.url).href,
        alt: 'Meal'
    }
]
</script>