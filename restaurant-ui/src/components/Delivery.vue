<template>
    <div ref="target" class="flex flex-col items-center lg:items-start lg:flex-row gap-10 lg:gap-20" >
        <div class="flex flex-row gap-5 lg:basis-6/12"
            :class="[ animate ? 'animate-enterLeft': (playAnimation ? 'opacity-0' : '')]" >
            <div>
                <img v-lazy="image1" alt="Chef holding plate with pasta" />
            </div>
            <div class="flex flex-col gap-5 pt-6">
                <img v-lazy="image2" alt="Sour curry with snakehead fish" />
                <img v-lazy="image3" alt="Pot with various salads" />
            </div>
        </div>
        <div class="flex flex-col gap-12 lg:pt-12 xl:pt-28 lg:basis-5/12 text-center lg:text-left"
            :class="[ animate ? 'animate-enterRight': (playAnimation ? 'opacity-0' : '')]">
            <div class="flex flex-col gap-5">
                <heading2 class="text-primary">Fastest Food Delivery in City</heading2>
                <paragraph16 class="font-normal text-darkM">Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop.</paragraph16>
            </div>
            <div class="flex flex-col gap-5 items-center lg:items-start">
                <div class="flex flex-row gap-5">
                    <img v-lazy="clockIcon" alt="clock" class="animation-delay-1000 delay-1000" :class="{ 'animate-rotate360': animate }"/>
                    <p class="text-20-m text-primary">Delivery within 30 minutes</p>
                </div>
                <div class="flex flex-row gap-5">
                    <img v-lazy="receiptIcon" alt="receipt" class="animation-delay-1000 delay-1000" :class="{ 'animate-rotate360': animate }"/>
                    <p class="text-20-m text-primary">Best Offer & Prices</p>
                </div>
                <div class="flex flex-row gap-5">
                    <img v-lazy="cartIcon" alt="cart" class="animation-delay-1000 delay-1000" :class="{ 'animate-rotate360': animate }"/>
                    <p class="text-20-m text-primary">Online Services Available</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useIntersectionObserver } from '../use/useIntersectionObserver.js'
const { animate, target, playAnimation } = useIntersectionObserver();
import Heading2 from '../components/UI/Heading2.vue';
import paragraph16 from '@/components/UI/paragraph16.vue'

const image1 = new URL('@/assets/images/mid-shot-chef-holding-plate-with-pasta-making-ok-sign.jpg', import.meta.url).href;
const image2 = new URL('@/assets/images/sour-curry-with-snakehead-fish-spicy-garden-hot-pot-thai-food.jpg', import.meta.url).href;
const image3 = new URL('@/assets/images/sadj-iron-pot-with-various-salads.jpg', import.meta.url).href;
const clockIcon = new URL('@/assets/images/icons/clock.png', import.meta.url).href;
const receiptIcon = new URL('@/assets/images/icons/receipt.png', import.meta.url).href;
const cartIcon = new URL('@/assets/images/icons/cart.png', import.meta.url).href;


</script>