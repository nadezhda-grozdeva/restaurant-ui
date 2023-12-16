<template>
    <p>
        <slot/>
    </p>
</template>

<style scoped>
@tailwind base;

@layer base {
    p {
        @apply font-dm;  /* DM Sans */
        @apply text-base; /* 1rem; 16px */
        @apply leading-6; /* 1.5rem; 24px */
    }
}
</style>