<template>
    <!-- USED ON HOME | ABOUT PAGES -->
    <div class="flex flex-col gap-8 lg:gap-16"
    :class="[ animate ? 'animate-bounceUp': (playAnimation ? 'opacity-0' : '')]" ref="target" >
        <heading2 class="text-center text-primary">What Our Customers Say</heading2>
        <div class="flex flex-col lg:flex-row gap-6 text-center lg:text-left">
            <div v-for="(review, index) in reviews" :key="review.title" class="lg:basis-1/3 lg:px-5 xl:px-9 py-11">
                <div class="flex flex-col gap-6 border-b border-light70opacity pb-8">
                    <heading3 class="text-secondary" 
                        :class="[animate ? `animate-scaleRotate animation-delay-${index + 1}000 delay-${index + 1}000` : '']">
                        "{{ review.title }}"
                    </heading3>
                    <paragraph18 class="font-normal">{{  review.text }}</paragraph18>
                </div>
                <div class="flex flex-row gap-5 pt-8 justify-center lg:justify-start">
                    <div>
                        <!-- <img v-lazy="{src: `${review.authorImg}`}" :alt="review.authorName" /> -->
                        <img v-lazy="useNewUrl(review.authorImg)" :alt="review.authorName" />
                    </div>
                    <div class="flex flex-col gap-0.5">
                        <paragraph16 class="font-bold">{{ review.authorName }}</paragraph16>
                        <paragraph16 class="font-bold">{{ review.authorLocation }}</paragraph16>
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
import useNewUrl from '../use/useNewUrl';
import Heading2 from '../components/UI/Heading2.vue';
import Heading3 from './UI/Heading3.vue';
import Paragraph16 from './UI/Paragraph16.vue';
import Paragraph18 from './UI/Paragraph18.vue';

const { animate, target, playAnimation } = useIntersectionObserver();

const store = useReviewsStore();
const reviews = computed(() => store.reviews)
</script>