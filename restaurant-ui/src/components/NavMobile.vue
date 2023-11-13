<template>
    <div @click='toggleMenu' class="flex flex-col absolute top-0 right-0">
        <div class="
            absolute top-7 right-1
            w-10
            sm:w-14 
            bg-primary 
            rounded-full
            before:content-['']
            before:absolute
            before:w-10
            sm:before:w-14
            before:h-2
            before:-translate-y-4
            before:bg-primary
            before:rounded-full
            before:transition-all 
            before:duration-150
            after:content-['']
            after:absolute
            after:w-10
            sm:after:w-14
            after:h-2
            after:bg-primary
            after:rounded-full
            after:translate-y-4
            after:transition-all 
            after:duration-150"
            :class="openMenu ? openMenuClasses : 'h-2'"
            >
        </div>
        <div v-if="openMenu" class="
            mobile-menu 
            flex flex-col 
            py-5
            bg-light 
            text-primary
            w-80 max-w-full 
            gap-2">
            <NavBar/>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import NavBar from './NavBar.vue';

let openMenu = ref(false);
const openMenuClasses = [
    'h-0',
    'before:translate-y-0',
    'before:rotate-45',
    'after:translate-y-0',
    'after:-rotate-45'
]

function toggleMenu() {
    openMenu.value = !openMenu.value
}


</script>

<style scoped>
.router-link-active {
    border-radius: 2.125rem;
    background: var(--text-tertiary);
}

</style>