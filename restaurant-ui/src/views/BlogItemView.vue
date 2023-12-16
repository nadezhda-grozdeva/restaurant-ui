<template>
    <div class="pb-32 pt-20 flex flex-col gap-48">
        <template v-if="blogPost && !loading">
            <div>
                <BlogItem :blogPost="blogPost"/>
            </div>
            <div v-if="postsToShow.length > 0" class="flex flex-col gap-16 text-center px-3 w-156 max-w-full mx-auto" >
                <div class="flex flex-col gap-6">
                    <heading2 class="px-4 mb-6 mt-20 text-primary">Read More Articles</heading2>
                    <paragraph18 class="text-darkM font-normal">We consider all the drivers of change gives you the components you need to change to create a truly happens.</paragraph18>
                </div>
                <div class="flex flex-row gap-6 justify-center xl:justify-start">
                    <div class="grid sm:grid-cols-2 xl:grid-cols-4 justify-center xl:justify-start gap-6 px-4">
                        <router-link v-for="item in postsToShow" :key="item.id" :to="{ name: 'blogItem', params: { id: item.id }}">
                            <BlogItemPreview  :item="item" class="pb-3.5 flex flex-col gap-8 text-left"></BlogItemPreview>
                        </router-link>
                    </div>
                </div>
            </div>
        </template>
        <template v-else>
            <loading class="blur-content"></loading>
        </template>
    </div>
</template>

<script setup>
import { computed, defineProps, ref } from 'vue';
import { useBlogStore } from '../store/blog';
import BlogItem from '../components/Blog/BlogItem.vue';
import BlogItemPreview from '../components/Blog/BlogItemPreview.vue';
import Heading2 from '../components/UI/Heading2.vue';
import Paragraph18 from '../components/UI/Paragraph18.vue';
import Loading from '../components/Loading.vue';

const props = defineProps(['id']);
const store = useBlogStore();

const blogPosts =  computed(() => store.blogPosts)
const blogPost = computed(() => store.getBlogById(props.id))

const postsToShow = computed(() => {
    const max = blogPosts.value.length;
    const min = 0;
    const data = ref([]);
    const dataLength = ref(4);

    if(blogPosts && blogPosts.value.length > 0) {
        while(data.value.length < dataLength.value) {
            const id = Math.floor(Math.random() * (max - min) + min)
            let index = -1;

            if(data.value.length > 0) {
                index = data.value.findIndex(el => Number(el.id) === id);
            }

            if(index < 0) {
                const post = blogPosts.value.find(el => Number(el.id) === id)
                if(post) {
                    data.value.push(post)
                }
            }
        }
    }
    loading.value = false;
    return data.value
})

</script>

