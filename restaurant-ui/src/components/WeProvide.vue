<template>
    <div class="flex flex-col lg:flex-row gap-20" ref="target">
        <div class="relative lg:basis-2/4 justify-center" 
            :class="[ animate ? 'animate-enterLeft': (playAnimation ? 'opacity-0' : '')]">
            <img v-lazy="image1" alt="What we provide" class="max-w-full sm:max-w-80 lg:max-w-full mx-auto lg:mx-0"/>
            <div class="
                absolute
                -bottom-10
                right-2/4
                translate-x-2/4
                sm:translate-x-0
                mx-auto
                sm:mx-0
                sm:right-10
                md:right-16
                lg:-bottom-8
                lg:-right-10
                2xl:-bottom-10
                2xl:-right-10          
                flex flex-col 
                font-dm text-white 
                bg-primary 
                w-132 max-w-80 sm:max-w-50 lg:max-w-full
                rounded-xl 
                p-7 sm:p-12 
                gap-11">
                <heading3 class="text-white">Come and visit us</heading3>
                <div class="flex flex-col gap-6">
                    <div class="flex flex-row gap-5 font-base items-start">
                        <img v-lazy="phoneIcon" alt="phone" :class="{'animate-shake animation-delay-1000 delay-1000': animate}"/>
                        <a href="#" title="Contact us" target="_blank">(414) 857 - 0107</a>
                    </div>
                    <div class="flex flex-row gap-5 font-base items-start">
                        <img v-lazy="mailIcon" alt="mail" :class="{'animate-scale animation-delay-2000 delay-2000': animate}"/>
                        <a href="#" title="Contact us" target="_blank">yummy@bistrobliss</a>
                    </div>
                    <div class="flex flex-row gap-5 font-base items-start">
                        <img v-lazy="addressIcon" alt="address" :class="{'animate-scale animation-delay-3000 delay-3000': animate}"/>
                        <a href="#" title="Contact us" target="_blank">837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col lg:basis-2/4 gap-10 xl:pl-14 xl:py-16 text-center lg:text-left" 
            :class="[ animate ? 'animate-enterRight': (playAnimation ? 'opacity-0' : '')]">
            <div class="flex flex-col gap-6">
                <heading2 class="text-primary">We provide healthy food for your family.</heading2>
                <paragraph18 class="text-primary font-medium">Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</paragraph18>
                <paragraph16 class="font-normal text-darkM">At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</paragraph16>
            </div>
            <BaseButton 
                class="w-48 max-w-full 
                    text-dark 
                    border-dark border-2 border-solid 
                    hover:bg-dark hover:text-white 
                    transition-colors
                    px-8 py-5 
                    mx-auto lg:mx-0">
                <router-link :to="{name: 'about'}">More About Us</router-link>
            </BaseButton>
        </div>
    </div>
</template>

<script setup>
import { useIntersectionObserver } from '../use/useIntersectionObserver.js'
import BaseButton from './UI/BaseButton.vue';
import Heading2 from '../components/UI/Heading2.vue';
import Heading3 from '@/components/UI/Heading3.vue';
import Paragraph16 from '@/components/UI/Paragraph16.vue';
import Paragraph18 from '@/components/UI/Paragraph18.vue';

const { animate, target, playAnimation } = useIntersectionObserver();
const image1 = new URL('@/assets/images/we-provide.png', import.meta.url).href;
const phoneIcon = new URL('@/assets/images/icons/phone.svg', import.meta.url).href;
const mailIcon = new URL('@/assets/images/icons/mail.svg', import.meta.url).href;
const addressIcon = new URL('@/assets/images/icons/address.svg', import.meta.url).href;

</script>