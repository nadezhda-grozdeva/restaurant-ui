<template>
    <div class="rounded-xl border-2 border-solid border-light bg-white max-w-full">
        <template v-if="item.img">
            <div class="card-img">
                <slot name="img">
                    Default Image
                </slot>
            </div>
        </template>
        <template v-if="item.title || item.descr">
            <div class="card-content flex flex-col gap-3.5">
                <heading3 class="text-primary">
                    <slot name="title">
                    Default title
                    </slot>
                </heading3>
                <paragraph16 class="font-normal text-darkM">
                    <slot name="descr">
                        Default description
                    </slot>
                </paragraph16>
            </div>
        </template>
        <template v-if="item.pathName">
            <div class="card-footer text-secondary font-dm font-base font-bold leading-6 hover:underline">
                <slot name="footer">Default link</slot>
            </div>
        </template>
        <!-- <template v-if="item.descr">
            <p class="text-center">
                <slot name="descr">
                Default description
                </slot>
            </p>
        </template> -->
    </div>
</template>

<script setup>
import Heading3 from './Heading3.vue';
import Paragraph16 from './Paragraph16.vue';

const props = defineProps({
    item: {
        type: Object,
        required: true
    }
})


</script>