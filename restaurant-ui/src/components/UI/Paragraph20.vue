<template>
    <p>
        <slot/>
    </p>
</template>

<style scoped>
@tailwind base;

@layer base {
    p {
        @apply font-dm; /* DM Sans */
        @apply text-xl; /* 1.25rem; 20px */
        @apply leading-7; /* 1.75rem; 28px */
    }
}
</style>