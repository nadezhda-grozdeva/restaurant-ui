<template>
    <div class="flex flex-col lg:flex-row gap-20">
        <div class="relative lg:basis-2/4 justify-center">
            <img src="../assets/images/we-provide.png" alt="What we provide" class="max-w-full sm:max-w-80 lg:max-w-full mx-auto lg:mx-0"/>

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
                <h3 class="text-xl sm:text-2xl font-bold">Come and visit us</h3>
                <div class="flex flex-col gap-6">
                    <div class="flex flex-row gap-5 font-base items-start">
                        <img src="../assets/images/icons/phone.svg" alt="phone"/>
                        <a href="#" title="Contact us" target="_blank">(414) 857 - 0107</a>
                    </div>
                    <div class="flex flex-row gap-5 font-base items-start">
                        <img src="../assets/images/icons/mail.svg" alt="mail"/>
                        <a href="#" title="Contact us" target="_blank">yummy@bistrobliss</a>
                    </div>
                    <div class="flex flex-row gap-5 font-base items-start">
                        <img src="../assets/images/icons/address.svg" alt="address"/>
                        <a href="#" title="Contact us" target="_blank">837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col lg:basis-2/4 gap-10 xl:pl-14 xl:py-16 text-center lg:text-left">
            <div class="flex flex-col gap-6">
                <h2 class="font-playfair text-primary font-medium leading-11 text-4xl sm:text-6xl smb-12">We provide healthy food for your family.</h2>
                <p class="font-dm text-primary text-lg font-medium">Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
                <p class="font-dm text-primary text-base font-normal">At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
            </div>
            <BaseButton class="w-48 max-w-full text-dark border-dark border-2 border-solid hover:bg-dark hover:text-white transition-colors px-8 py-5 mx-auto lg:mx-0">
                <router-link :to="{name: 'about'}">More About Us</router-link>
            </BaseButton>
        </div>
    </div>
</template>

<script setup>
import BaseButton from './UI/BaseButton.vue';
</script>