<template>
  <section class="hero-img bg-hero-img bg-no-repeat bg-cover md:bg-auto bg-top mt-4">
    <Hero/>
  </section>
  <section class="w-156 max-w-full mx-auto py-20 px-2 sm:px-0">
    <MenuShort/>
  </section>
  <section class="about w-156 max-w-full mx-auto px-2 sm:px-0">
    <About/>
  </section>
</template>

<script setup>
import Hero from '../components/Hero.vue';
import MenuShort from '../components/MenuShort.vue';
import About from '../components/About.vue';
</script>