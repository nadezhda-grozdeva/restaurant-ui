<template>
    <!-- USED ON HOME | ABOUT PAGES -->
    <div class="flex flex-col gap-8 lg:gap-16"
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
                        <img v-lazy="{src: review.authorImg}" :alt="review.authorName" />
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
import { computed } from 'vue';
import { useIntersectionObserver } from '../use/useIntersectionObserver.js';
import { useReviewsStore } from '../store/reviews.js';

const { animate, target, playAnimation } = useIntersectionObserver();

const store = useReviewsStore();
const reviews = computed(() => store.reviews)
</script>