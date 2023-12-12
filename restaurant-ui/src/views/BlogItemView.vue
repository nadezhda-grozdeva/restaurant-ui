<template>
    <!-- <template v-if="blogPost">
        <div>
            <h2 class="px-4 mb-5 mt-20 text-center font-playfair font-normal sm:leading-12">
                {{ blogPost.title }}
            </h2>
            <img v-lazy="useNewUrl(blogPost.imgPreview)" :alt="blogPost.title" />

        </div>
    </template>
    <template v-else>
        <h2>LOADING</h2>
    </template> -->
    <h2 class="text-center my-12">Coming soon...</h2>
    
</template>

<script setup>
import { computed, onMounted, reactive, onBeforeMount, defineProps, isReactive } from 'vue';
import { useBlogStore } from '../store/blog';
import useNewUrl from '../use/useNewUrl';

const props = defineProps(['id']);
const store = useBlogStore();

const blogPost = computed(() => store.getBlogById(props.id))


</script>