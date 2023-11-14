<template>
    <div class="container mx-auto pt-28 pb-14 sm:py-52 px-10">
        <div class="hero-content flex flex-col items-center lg:w-120 max-w-full mx-auto text-center gap-8">
            <h2 class="text-primary text-6xl sm:text-8xl font-playfair font-normal sm:leading-12">Best food for your taste</h2>
            <p class="font-dm text-xl text-primary leading-8 font-normal w-108 max-w-full">Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
            <div class="flex flex-col sm:flex-row gap-2.5">
                <BaseButtonRed>
                    <router-link :to="{name: 'bookatable'}">Book A Table</router-link>
                </BaseButtonRed>
                <BaseButton class="text-dark border-dark border-2 border-solid hover:bg-dark hover:text-white transition-colors px-8 py-5">
                    <router-link :to="{name: 'menu'}">Explore Menu</router-link>
                </BaseButton>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseButton from './UI/BaseButton.vue';
import BaseButtonRed from './UI/BaseButtonRed.vue';

</script>