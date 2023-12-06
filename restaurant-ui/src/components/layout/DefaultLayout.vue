<template>
    <header :class="{'animate-fadeIn': ifHomePage}">
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
import { useRoute } from 'vue-router';

import TopBar from '../TopBar.vue';
import Header from '../Header.vue';
import Footer from '../Footer.vue';

const route = useRoute();
const ifHomePage = route.name === 'home'

</script>
