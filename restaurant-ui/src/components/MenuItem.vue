<template>
    <img v-lazy="useNewUrl(menuItem.imgUrl)" :alt="menuItem.title" class="rounded-tl-xl rounded-tr-xl animate-fadeIn" />
    <div class="flex flex-col gap-4 px-7 pb-8">
        <heading3 class="text-secondary">$ {{ menuItem.price }}</heading3>
        <h4>{{ menuItem.title }}</h4>
        <paragraph16 class="font-normal text-darkM">{{ menuItem.ingredients }}</paragraph16>
    </div>
</template>

<script setup>
import Heading3 from './UI/Heading3.vue';
import Paragraph16 from '@/components/UI/Paragraph16.vue'
import useNewUrl from '../use/useNewUrl';

const props = defineProps(['menuItem'])
</script>