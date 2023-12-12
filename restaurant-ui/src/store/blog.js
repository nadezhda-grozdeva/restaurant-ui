import { defineStore } from 'pinia';
import { ref, onMounted, } from 'vue';
import { apiGetRequest } from '../services/apiRequest.js'

export const useBlogStore = defineStore('blog', () => {

    // *** STATE ***
    const blogPosts = ref([]);

    onMounted(async() => {
        const result = await apiGetRequest('blog')
        blogPosts.value = result;
    })

    // *** GETTERS ***


    // *** ACTIONS ***
    function getBlogById(id) {
        return blogPosts.value.find(el => el.id === id)
    }

    // *** EXPORT ***

    return {
        blogPosts,
        getBlogById
    }
  })