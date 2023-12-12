import { defineStore } from 'pinia';
import { ref, onMounted } from 'vue';
import { apiGetRequest } from '../services/apiRequest.js'

export const useMenuStore = defineStore('menu', () => {

    // *** STATE ***
    const menu = ref([]);
    const categoriesList = ref([]);

    // *** GETTERS ***

    // *** ACTIONS ***

    // *** LIFECYCLE HOOKS ***
    onMounted(async() => {
        const result = await apiGetRequest('menu');
        menu.value = result;

        const list = ref(['all']);
        menu.value.forEach(item => {
            const index = list.value.indexOf(item.category)
            if (index < 0) {
                list.value.push(item.category)
            }
        })
        categoriesList.value = list.value
    })

    // *** EXPORT ***

    return { menu, categoriesList }
  })