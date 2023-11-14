<template>
    <div class="flex flex-col gap-16 text-center lg:text-left">
        <div class="flex flex-col md:flex-row justify-between gap-7 items-center md:items-start">
            <h2>Our Blog & Articles</h2>
            <BaseButtonRed class="w-auto">
                <router-link to="{name: pages}">Read All Articles</router-link>
            </BaseButtonRed>
        </div>
        <div class="flex flex-col lg:flex-row gap-4">
            <div class="flex lg:basis-2/4">
                <BaseCardShadow class="pb-12 flex flex-col gap-11">
                    <img v-lazy="image1" alt="Hamburger" />
                    <div class="flex flex-col gap-4 px-6">
                        <p class="text-16-m text-darkGray">January 3, 2023</p>
                        <p class="text-20-m text-primary">The secret tips & tricks to prepare a perfect burger & pizza for our customers</p>
                        <p class="text-16-r text-darkM">Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.</p>
                    </div>
                </BaseCardShadow>
            </div>
            <div class="flex flex-row flex-wrap justify-center lg:justify-start lg:basis-2/4 gap-6">
                <BaseCardShadow v-for="item in blogItems" :key="item.title" class="pb-3.5 flex flex-col gap-8 sm:basis-5/12 lg:grow">
                    <img v-lazy="item.imgUrl" alt="Hamburger" />
                    <div class="flex flex-col gap-3 px-6">
                        <p class="text-14-m text-darkGray">{{ item.dateAdded }}</p>
                        <p class="text-20-m text-primary">{{  item.title }}</p>
                    </div>
                </BaseCardShadow>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseButtonRed from './UI/BaseButtonRed.vue';
import BaseCardShadow from './UI/BaseCardShadow.vue';

const image1 = new URL('@/assets/images/blog/pexels-andra.jpg', import.meta.url).href;

const blogItems = [
    {
        imgUrl: new URL('@/assets/images/blog/pexels-suzy-hazelwood.jpg', import.meta.url).href,
        dateAdded: 'January 3, 2023',
        title: 'How to prepare the perfect french fries in an air fryer',
    },
    {
        imgUrl: new URL('@/assets/images/blog/pexels-leonardo-luz.jpg', import.meta.url).href,
        dateAdded: 'January 3, 2023',
        title: 'How to prepare delicious chicken tenders',
    },
    {
        imgUrl: new URL('@/assets/images/blog/pexels-sebastian-coman-photography.jpg', import.meta.url).href,
        dateAdded: 'January 3, 2023',
        title: '7 delicious cheesecake recipes you can prepare',
    },
    {
        imgUrl: new URL('@/assets/images/blog/pexels-katerina-holmes.jpg', import.meta.url).href,
        dateAdded: 'January 3, 2023',
        title: '5 great pizza restaurants you should visit this city',
    },
]
</script>