<template>
    <div class="flex flex-col gap-16 text-center lg:text-left" ref="target">
        <div class="flex flex-col md:flex-row justify-between gap-7 items-center md:items-start">
            <heading2 class="text-primary" :class="[ animate ? 'animate-enterLeft': (playAnimation ? 'opacity-0' : '')]">Our Blog & Articles</heading2>
            <!-- <h2 :class="[ animate ? 'animate-enterLeft': (playAnimation ? 'opacity-0' : '')]">Our Blog & Articles</h2> -->
            <BaseButtonRed class="w-auto" :class="[ animate ? 'animate-enterRight': 'opacity-0']" >
                <router-link :to="{name: 'blog'}">Read All Articles</router-link>
            </BaseButtonRed>
        </div>
        <div class="flex flex-col lg:flex-row gap-4">
            <div class="flex lg:basis-2/4" :class="[ animate ? 'animate-enterLeft': 'opacity-0']" >
                <BaseCardShadow class="pb-12 flex flex-col gap-11">
                    <img v-lazy="image1" alt="Hamburger" />
                    <div class="flex flex-col gap-4 px-6">
                        <paragraph16 class="font-medium text-darkGray">January 3, 2023</paragraph16>
                        <paragraph20 class="font-medium text-primary">The secret tips & tricks to prepare a perfect burger & pizza for our customers</paragraph20>
                        <paragraph16 class="font-normal text-darkM">Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas</paragraph16>
                    </div>
                </BaseCardShadow>
            </div>
            <div class="flex flex-row flex-wrap justify-center lg:justify-start lg:basis-2/4 gap-6"
                :class="[ animate ? 'animate-enterRight': (playAnimation ? 'opacity-0' : '')]">
                <template v-for="item in blogItems" :key="item.title">
                    <BlogItemPreview  :item="item" class="pb-3.5 flex flex-col gap-8 sm:basis-5/12 lg:grow"></BlogItemPreview>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseButtonRed from '../UI/BaseButtonRed.vue';
import BaseCardShadow from '../UI/BaseCardShadow.vue';
import BlogItemPreview from './BlogItemPreview.vue';
import Heading2 from '../UI/Heading2.vue';
import Paragraph16 from '../UI/Paragraph16.vue';
import Paragraph20 from '../UI/Paragraph20.vue';


import { useIntersectionObserver } from '../../use/useIntersectionObserver.js'
const { animate, target, playAnimation } = useIntersectionObserver();

const image1 = new URL('@/assets/images/blog/pexels-andra.jpg', import.meta.url).href;

const blogItems = [
    {
        imgPreview: 'blog/pexels-suzy-hazelwood.jpg',
        date: 'January 3, 2023',
        title: 'How to prepare the perfect french fries in an air fryer',
    },
    {
        imgPreview: 'blog/pexels-leonardo-luz.jpg',
        date: 'January 3, 2023',
        title: 'How to prepare delicious chicken tenders',
    },
    {
        imgPreview: 'blog/pexels-sebastian-coman-photography.jpg',
        date: 'January 3, 2023',
        title: '7 delicious cheesecake recipes you can prepare',
    },
    {
        imgPreview: 'blog/pexels-katerina-holmes.jpg',
        date: 'January 3, 2023',
        title: '5 great pizza restaurants you should visit this city',
    },
]
</script>