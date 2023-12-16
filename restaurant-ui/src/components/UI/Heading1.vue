<template>
    <h1>
        <slot></slot>
    </h1>
</template>

<style scoped>
@tailwind base;

@layer base {
    h1 {
        @apply text-4xl; /* 2.25rem; 36px */
        @apply font-playfair;
        @apply font-semibold;
        @apply text-heading1;
        @apply leading-9;
    }
}
</style>