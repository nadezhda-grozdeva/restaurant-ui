<template>
    <!-- USED ON HOME | ABOUT PAGES -->
    <div class="flex flex-col gap-16"
    :class="[ animate ? 'animate-bounceUp': (playAnimation ? 'opacity-0' : '')]" ref="target" >
        <h2 class="text-center">What Our Customers Say</h2>
        <div class="flex flex-col lg:flex-row gap-6 text-center lg:text-left">
            <div v-for="(review, index) in reviews" :key="review.title" class="lg:basis-1/3 lg:px-5 xl:px-9 py-11">
                <div class="flex flex-col gap-6 border-b border-light70opacity pb-8">
                    <h3 class="text-secondary" 
                        :class="[animate ? `animate-scaleRotate animation-delay-${index + 1}000 delay-${index + 1}000` : '']">
                        "{{ review.title }}"
                    </h3>
                    <p class="text-18-r">{{  review.text }}</p>
                </div>
                <div class="flex flex-row gap-5 pt-8 justify-center lg:justify-start">
                    <div>
                        <img v-lazy="review.authorImg" :alt="review.authorName" />
                    </div>
                    <div class="flex flex-col gap-0.5">
                        <p class="text-16-b">{{ review.authorName }}</p>
                        <p class="text-16-r">{{ review.authorLocation }}</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useIntersectionObserver } from '../use/useIntersectionObserver.js'
const { animate, target, playAnimation } = useIntersectionObserver();

const reviews = [
    {
        title: 'The best restaurant',
        text: 'Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.',
        authorImg: new URL('@/assets/images/Sophire-Robson.png', import.meta.url).href,
        authorName: 'Sophire Robson',
        authorLocation: 'Los Angeles, CA'
    },
    {
        title: 'Simply delicious',
        text: 'Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.',
        authorImg: new URL('@/assets/images/Matt-Cannon.png', import.meta.url).href,
        authorName: 'Matt Cannon',
        authorLocation: 'San Diego, CA'
    },
    {
        title: 'One of a kind restaurant',
        text: 'The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.',
        authorImg: new URL('@/assets/images/Andy-Smith.png', import.meta.url).href,
        authorName: 'Andy-Smith',
        authorLocation: 'San Francisco, CA'
    }
]
</script>