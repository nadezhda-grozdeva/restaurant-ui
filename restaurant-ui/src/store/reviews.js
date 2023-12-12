import { defineStore } from 'pinia';
import { ref, onMounted } from 'vue';
import { apiGetRequest } from '../services/apiRequest.js'

export const useReviewsStore = defineStore('reviews', () => {

    // *** STATE ***
    const reviews = ref([]);

    // *** GETTERS ***

    // *** ACTIONS ***

    // *** LIFECYCLE HOOKS ***
    onMounted(async() => {
        const result = await apiGetRequest('reviewsHome')
        reviews.value = result;
    })

    // *** EXPORT ***

    return {
        reviews
    }
  })