<template>
    <input :value="modelValue" @change="emit('update:modelValue', $event.target.value)"
        class="rounded-medium2 border border-light
                bg-white 
                px-6
                h-14 max-w-full
                placeholder:font-dm placeholder:text-base placeholder:font-medium
                placeholder:leading-6 placeholder:text-darkGray min-w-full"
                />
</template>

<script setup>
const emit = defineEmits(['update:modelValue']);
const props = defineProps(['modelValue']);
</script>