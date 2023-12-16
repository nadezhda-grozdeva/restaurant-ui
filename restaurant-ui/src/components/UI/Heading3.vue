<template>
    <h3>
        <slot></slot>
    </h3>
</template>

<style scoped>
@tailwind base;

@layer base {
    h3 {
        @apply font-dm;
        @apply text-xl; /* 1.25rem; 20px */
        @apply sm:text-2xl; /* 1.5rem; 24px */
        @apply font-bold;
        @apply tracking-tight;
        @apply leading-7; /* 1.75rem; 28px */
    }
}
</style>