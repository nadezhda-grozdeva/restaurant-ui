<template>
    <div @click='toggleMenu' class="flex flex-col absolute z-10 top-0 right-0">
        <div class="
            absolute z-10 top-7 right-2
            w-10
            sm:w-14 
            bg-primary 
            rounded-full
            before:content-['']
            before:absolute
            before:w-10
            sm:before:w-14
            before:h-2
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
            after:transition-all 
            after:duration-150"
            :class="openMenu ? openMenuClasses : closedMenuClasses"
            >
        </div>
        <TransitionGroup  name="menuOpen">
            <div v-if="openMenu" class="
                mobile-menu 
                relative
                flex flex-col 
                py-5
                bg-light 
                text-primary
                w-80 max-w-full 
                rounded-bl-lg
                gap-2
                z-99
                before:bg-light 
                before:content-['']
                before:absolute
                before:w-full
                before:-right-40
                before:top-0
                before:bottom-0
                before:h-full
                before:-z-10"
                >
                    <NavBar/>
            </div>
        </TransitionGroup>
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

const closedMenuClasses = [
    'h-2',
    'before:-translate-y-4',
    'after:translate-y-4'
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

.menuOpen-enter-active,
.menuOpen-leave-active {
  transition: all .5s ease;
}

.menuOpen-enter-from,
.menuOpen-leave-to {
    opacity: 0;
    transform: translateX(100%);
}

</style>