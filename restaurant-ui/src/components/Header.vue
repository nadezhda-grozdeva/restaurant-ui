<template>
    <div class="flex flex-row justify-between container mx-auto">
        <div class="logo flex flex-row text-primary text-4xl font-playfair">
            <img src="/src/assets/images/logo.png" alt="logo"/>
        </div>
        <div class="navigation">
            <NavBar/>
        </div>
        <div class="book-table-button">
            button
        </div>
    </div>
</template>

<script setup>
import NavBar from './NavBar.vue'
</script>