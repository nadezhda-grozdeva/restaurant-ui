<template>
    <header>
        <TopBar/>
        <Header/>
    </header>
    <main>
        <RouterView/>
    </main>
</template>

<script setup>
import { RouterView } from 'vue-router';
import TopBar from '../TopBar.vue';
import Header from '../Header.vue';
</script>
