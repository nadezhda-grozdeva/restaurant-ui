<template>
    <textarea @input="resizeTextarea" ref="textarea"
        :value="modelValue" @change="emit('update:modelValue', $event.target.value)"
        class="rounded-2xl border border-light 
                bg-white 
                p-6 resize-none overflow-hidden
                h-40 w-full max-w-full
                placeholder:font-dm placeholder:text-base placeholder:font-medium
                placeholder:leading-6 placeholder:text-darkGray" />
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['update:modelValue']);
const props = defineProps(['modelValue']);

const textarea = ref(0);
function resizeTextarea() {
    textarea.value.style.height = '160px';
    textarea.value.style.height = (textarea.value.scrollHeight) + 'px'
}
</script>