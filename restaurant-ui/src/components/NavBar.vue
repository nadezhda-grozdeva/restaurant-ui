<template>
    <div class="flex flex-row justify-center content-center container mx-auto font-dm text-primary font-medium gap-2.5">
        <router-link :to="{name: 'home'}" class="px-4 py-1 self-center">Home</router-link>
        <router-link :to="{name: 'about'}" class="px-1 py-4">About</router-link>
        <router-link :to="{name: 'menu'}" class="px-1 py-4">Menu</router-link>
        <router-link :to="{name: 'pages'}" class="px-1 py-4">Pages</router-link>
        <router-link :to="{name: 'contact'}" class="px-1 py-4">Contact</router-link>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.router-link-active {
    border-radius: 2.125rem;
    background: var(--text-tertiary)
}
</style>