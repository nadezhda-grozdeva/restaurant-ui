<template>
    <div class="w-67rem max-w-full mx-auto px-3">
        <heading2 class="px-4 text-center text-primary">{{ blogPost.title }}</heading2>
        <img :srcset="imgSrcset" 
            :sizes="imgSizes"
            v-lazy="useNewUrl(blogPost.img1070w)" 
            :alt="blogPost.title"  
            class="mx-auto mb-16 mt-14"/>
        <blogContent class="dynamicLoadedContent"/>
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import Heading2 from '../UI/Heading2.vue';
import useNewUrl from '../../use/useNewUrl.js';
import useRender from '../../use/useRender.js'

const props = defineProps(['blogPost'])

const blogContent = computed(() => { return useRender('div', props.blogPost.content) })
const imgSrcset = computed(() => { return useNewUrl(props.blogPost.imgPreview) + ' 480w,' + useNewUrl(props.blogPost.img1070w) + ' 1070w,'})
const imgSizes = computed(() => { return '(max-width: 480px) 480px, (min-width: 481px) 1070px' })
</script>

<style scoped>
.dynamicLoadedContent :deep(h3) {
    text-align: center!important;
    margin-bottom: 1.25rem;
    font-family: DM Sans;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.875rem; /* 125% */
    letter-spacing: -0.045rem;
}

.dynamicLoadedContent :deep(p) {
    text-align: justify;
    font-family: DM Sans;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
}

.dynamicLoadedContent :deep(p):not(:last-child) {
    margin-bottom: 3rem;
}
</style>