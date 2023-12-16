<template>
    <h2>
        <slot></slot>
    </h2>
</template>

<style scoped>
@tailwind base;

@layer base {
    h2 {
        @apply text-3xl; /* 1.875rem; 30px */
        @apply sm:text-5xl; /* 3rem; 48px */
        @apply lg:text-55xl; /* 3.4375rem; 55px */
        @apply font-playfair;
        @apply font-medium;
        @apply lg:leading-10; /* 2.5rem; 40px */
        @apply lg:leading-11; /* 3.78rem; 60.48px */
    }
}
</style>