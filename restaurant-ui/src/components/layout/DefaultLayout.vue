<template>
    <header class="animate-fadeIn">
        <TopBar/>
        <Header/>
    </header>
    <main class="overflow-hidden">
        <RouterView/>
    </main>
    <footer>
        <Footer/>
    </footer>
</template>

<script setup>
import { RouterView } from 'vue-router';
import TopBar from '../TopBar.vue';
import Header from '../Header.vue';
import Footer from '../Footer.vue';
</script>
