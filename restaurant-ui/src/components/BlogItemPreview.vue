<template>
    <BaseCardShadow class="pb-3.5 flex flex-col gap-8 sm:basis-5/12 lg:grow">
        <img v-lazy="useNewUrl(item.imgPreview)" :alt="item.title" />
        <div class="flex flex-col gap-3 px-6">
            <p class="text-14-m text-darkGray">{{ item.date }}</p>
            <p class="text-20-m text-primary">{{  item.title }}</p>
        </div>
    </BaseCardShadow>
</template>

<script setup>
import BaseCardShadow from './UI/BaseCardShadow.vue';
import useNewUrl from '../use/useNewUrl';

const props = defineProps({
    item: {
        type: Object,
        required: true
    }
})

</script>