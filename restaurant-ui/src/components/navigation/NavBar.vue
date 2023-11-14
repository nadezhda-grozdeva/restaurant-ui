<template>
    <router-link 
        v-for="menuItem in menuItems" 
        :key="menuItem" 
        :to="{name: menuItem.name}" 
        class="px-4 py-1 self-center capitalize hover:opacity-70">
        {{ menuItem.name }}
    </router-link>
    <BaseButton class="
        lg:absolute lg:right-0 lg:-bottom-2.5 
        self-center
        text-dark 
        border-dark border-2 border-solid 
        hover:bg-dark hover:text-white 
        transition-colors 
        w-36 
        px-5 py-3">
        <router-link :to="{name: 'menu'}">Book A Table</router-link>
    </BaseButton>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import BaseButton from '../UI/BaseButton.vue';

const menuItems = [
    {name: 'home'},
    {name: 'about'},
    {name: 'menu'},
    {name: 'pages'},
    {name: 'contact'}
]

</script>

<style scoped>
.router-link-active {
    border-radius: 2.125rem;
    background: var(--text-tertiary);
}
</style>