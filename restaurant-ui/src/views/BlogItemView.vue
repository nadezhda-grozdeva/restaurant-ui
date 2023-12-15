<template>
    <template v-if="blogPost">
        <div class="w-67rem max-w-full mx-auto px-3">
            <h2 class="px-4 mb-14 mt-20 text-center font-playfair font-normal">
                {{ blogPost.title }}
            </h2>
            <!-- <img v-lazy="useNewUrl(blogPost.img1070w)" :alt="blogPost.title"  class="mx-auto mb-16"/> -->
            <img :srcset="imgSrcset" 
                :sizes="imgSizes"
                v-lazy="useNewUrl(blogPost.img1070w)" 
                :alt="blogPost.title"  
                class="mx-auto mb-16"/>
           
            <blogContent class="dynamicLoadedContent"/>
        </div>
    </template>
    <template v-else>
        <loading class="blur-content"></loading>
    </template>
    <!-- <h2 class="text-center my-12">Coming soon...</h2> -->
    
</template>

<script setup>
import { computed, defineProps } from 'vue';
import { useBlogStore } from '../store/blog';
import Loading from '../components/Loading.vue'
import useNewUrl from '../use/useNewUrl';
import useRender from '../use/useRender.js'

const props = defineProps(['id']);
const store = useBlogStore();

const blogPost = computed(() => store.getBlogById(props.id))

const blogContent = computed(() => {
    if(blogPost) {
        return useRender('div', blogPost.value.content)
    }
})

const imgSrcset = computed(() => {
    if(blogPost) {
        return useNewUrl(blogPost.value.imgPreview) + ' 480w,' + useNewUrl(blogPost.value.img1070w) + ' 1070w,'
    } 
})

const imgSizes = computed(() => {
    if(blogPost) {
        return '(max-width: 480px) 480px, (min-width: 481px) 1070px'
    }
})


</script>

<style scoped>
.dynamicLoadedContent :deep(h3) {
    text-align: center!important;
    margin-bottom: 1.25rem;
}

.dynamicLoadedContent :deep(p) {
    text-align: justify;
    margin-bottom: 3rem;;
}
</style>