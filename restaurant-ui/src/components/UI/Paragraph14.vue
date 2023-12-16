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
        @apply text-sm; /* 0.875rem; 14px */
        @apply leading-6; /* 1.5rem; 24px */
    }
}
</style>