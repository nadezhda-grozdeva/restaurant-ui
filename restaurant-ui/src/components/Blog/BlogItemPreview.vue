<template>
    <BaseCardShadow class="pb-3.5 flex flex-col gap-8 sm:basis-5/12 lg:grow">
        <img v-lazy="useNewUrl(item.imgPreview)" :alt="item.title" />
        <div class="flex flex-col gap-3 px-6">
            <paragraph14 class="font-medium text-darkGray">{{ item.date }}</paragraph14>
            <paragraph20 class="font-medium text-primary">{{ item.title }}</paragraph20>
        </div>
    </BaseCardShadow>
</template>

<script setup>
import BaseCardShadow from '../UI/BaseCardShadow.vue';
import Paragraph14 from '../UI/Paragraph14.vue';
import Paragraph20 from '../UI/Paragraph20.vue';
import useNewUrl from '../../use/useNewUrl';

const props = defineProps({
    item: {
        type: Object,
        required: true
    }
})

</script>