<template>
  <section :class="{'animate-fadeIn': ifHomePage}" class="hero-img bg-hero-img bg-no-repeat bg-cover md:bg-auto bg-top mt-4">
    <Hero/>
  </section>
  <section class="w-156 max-w-full mx-auto py-20 px-2 sm:px-0">
    <MenuShort/>
  </section>
  <section class="about w-156 max-w-full mx-auto px-2 sm:px-0 lg:py-24">
    <WeProvide/>
  </section>
  <section class="we-offer w-156 max-w-full mx-auto px-2 sm:px-0 py-14 lg:py-28">
    <WeOffer/>
  </section>
  <section class="delivery w-156 max-w-full mx-auto px-2 sm:px-0 py-14 lg:py-28">
    <Delivery/>
  </section>
  <section class="reviews w-156 max-w-full mx-auto px-2 sm:px-0 py-14 lg:py-28">
    <Reviews/>
  </section>
  <section class="blog-preview w-156 max-w-full mx-auto px-2 sm:px-0 py-14 lg:pt-28 lg:pb-32">
    <BlogPreview />
  </section>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
import Hero from '../components/Hero.vue';
// import MenuShort from '../components/MenuShort.vue';
// import WeProvide from '../components/WeProvide.vue';
// import WeOffer from '../components/WeOffer.vue';
// import Delivery from '../components/Delivery.vue';
// import Reviews from '@/components/Reviews.vue';
// import BlogPreview from '@/components/BlogPreview.vue';

const MenuShort = defineAsyncComponent(() =>
  import('@/components/MenuShort.vue')
)

const WeProvide = defineAsyncComponent(() =>
  import('@/components/WeProvide.vue')
)

const WeOffer = defineAsyncComponent(() =>
  import('@/components/WeOffer.vue')
)

const Delivery = defineAsyncComponent(() =>
  import('@/components/Delivery.vue')
)

const Reviews = defineAsyncComponent(() =>
  import('@/components/Reviews.vue')
)

const BlogPreview = defineAsyncComponent(() =>
  import('@/components/BlogPreview.vue')
)

const route = useRoute();
const ifHomePage = route.name === 'home'
</script>