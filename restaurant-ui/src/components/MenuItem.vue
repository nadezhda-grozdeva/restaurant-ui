<template>
    <img :src="MenuItem.imgUrl" :alt="MenuItem.title" class="rounded-tl-xl rounded-tr-xl" />
    <div class="flex flex-col gap-4 px-7 pb-8">
        <h3 class="text-secondary">$ {{ MenuItem.price }}</h3>
        <h4>{{ MenuItem.title }}</h4>
        <p class="text-16-r text-darkM">{{ MenuItem.ingredients }}</p>
    </div>
</template>

<script setup>
const props = defineProps(['MenuItem'])
</script>