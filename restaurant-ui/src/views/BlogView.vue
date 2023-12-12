<template>
    <div class="w-156 max-w-full mx-auto pb-20">
        <h2 class="px-4 mb-5 mt-20 text-center text-6xl sm:text-8xl font-playfair font-normal sm:leading-12">Our Blog & Articles</h2>
        <p class="px-4 text-center text-neutralGray text-18-r lg:w-2/4 lg:mx-auto mb-12">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center lg:justify-start gap-6 px-4">
            <template v-for="item in blogPosts" :key="item.id">
                <router-link :to="{ name: 'blogItem', params: { id: item.id }}">
                    <BlogItemPreview  :item="item" class="pb-3.5 flex flex-col gap-8 w-72 max-w-full sm:w-auto"></BlogItemPreview>
                </router-link>
            </template>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import BlogItemPreview from '../components/BlogItemPreview.vue';
import { useBlogStore } from '../store/blog.js';

const store = useBlogStore()
const blogPosts = computed(() => store.blogPosts)


</script>