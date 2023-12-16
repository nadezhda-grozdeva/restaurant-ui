<template>
    <div class="w-156 max-w-full mx-auto pt-16 pb-20 flex flex-col gap-16">
        <div class="flex flex-col gap-6 items-center text-center">
            <heading2 class="px-4 mb-5 mt-20 text-center text-primary">Our Blog & Articles</heading2>
            <paragraph18 class="px-4 lg:w-2/4 lg:mx-auto mb-12 font-normal text-darkM">We consider all the drivers of change gives you the components you need to change to create a truly happens.</paragraph18>
        </div>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center lg:justify-start gap-6 px-4">
            <template v-if="blogPosts" v-for="item in blogPosts" :key="item.id">
                <router-link :to="{ name: 'blogItem', params: { id: item.id }}">
                    <BlogItemPreview  :item="item" class="pb-3.5 flex flex-col gap-8 w-72 max-w-full sm:w-auto"></BlogItemPreview>
                </router-link>
            </template>
            <template v-else>
                <loading class="blur-content"></loading>
            </template>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import BlogItemPreview from '../components/Blog/BlogItemPreview.vue';
import { useBlogStore } from '../store/blog.js';
import Loading from '../components/Loading.vue'
import Heading2 from '../components/UI/Heading2.vue'
import Paragraph18 from '../components/UI/Paragraph18.vue'

const store = useBlogStore()
const blogPosts = computed(() => store.blogPosts)


</script>