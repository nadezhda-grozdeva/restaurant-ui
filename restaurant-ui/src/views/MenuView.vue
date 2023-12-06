<template>
    <div class="w-156 max-w-full mx-auto">
        <h2 class="mb-5 mt-20 px-4 text-center text-6xl sm:text-8xl font-playfair font-normal sm:leading-12">Our Menu</h2>
        <p class="text-center px-4 text-neutralGray text-18-r lg:w-2/5 lg:mx-auto mb-12">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>

        <div class="flex flex-row flex-wrap gap-3.5 justify-center mb-12 lg:mb-24">
            <div v-for="category in categoriesList" :key="category">
                <input type="radio" 
                    :id="category" 
                    name="categoriesList" 
                    :value="category" 
                    :checked="category === 'all'"
                    v-model="filter"
                    class="hidden peer"
                    />
                <label 
                :for="category"
                class="w-32 h-12 text-16-b text-primary flex justify-center items-center transition-all
                    peer-checked:rounded-medium1 peer-checked:text-white peer-checked:bg-secondary
                    hover:cursor-pointer">
                    {{ capitalized(category) }}
                </label>
            </div>
        </div>

        <div class="grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center sm:justify-start mb-12">
            <div v-for="item in filteredMenuList" :key="item.id" 
                class="text-center flex flex-col gap-7 
                w-72 max-w-full items-center sm:w-auto
                rounded-xl border-2 border-light">
                <MenuItem :MenuItem="item" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useMenuStore } from '@/store/menu.js';
import MenuItem from '@/components/MenuItem.vue'
import capitalized from '@/filters/capitalized';

// MENU ITEMS
const store = useMenuStore();
const menuList = computed(() => store.menu)
const categoriesList = computed(() => store.categoriesList)
const filter = ref('all')

const filteredMenuList = computed(() => {
    if(filter.value != 'all') {
        return menuList.value.filter((el) => el.category === filter.value);
    } else {
        return menuList.value
    }
})
</script>
