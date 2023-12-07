<template>
    <img v-lazy="useNewUrl(menuItem.imgUrl)" :alt="menuItem.title" class="rounded-tl-xl rounded-tr-xl" />
    <div class="flex flex-col gap-4 px-7 pb-8">
        <h3 class="text-secondary">$ {{ menuItem.price }}</h3>
        <h4>{{ menuItem.title }}</h4>
        <p class="text-16-r text-darkM">{{ menuItem.ingredients }}</p>
    </div>
</template>

<script setup>
import useNewUrl from '../use/useNewUrl';
const props = defineProps(['menuItem'])
</script>