<template>
  <section class="hero-img bg-hero-img bg-no-repeat bg-cover md:bg-auto bg-top mt-4">
    <Hero/>
  </section>
  <section class="container mx-auto max-w-full py-20">
    <MenuShort/>
  </section>
</template>

<script setup>
import Hero from '../components/Hero.vue';
import MenuShort from '../components/MenuShort.vue'
</script>