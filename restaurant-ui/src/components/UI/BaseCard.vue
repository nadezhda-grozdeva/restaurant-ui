<template>
    <div class="rounded-xl border-2 border-solid border-light bg-white w-80 max-w-full px-4 xl:px-8 py-10">
        <template v-if="item.img">
            <div class="card-img">
                <slot name="img">
                    Default Image
                </slot>
            </div>
        </template>
        <template v-if="item.title || item.descr">
            <div class="card-content flex flex-col gap-3.5 items-center">
                <h3 class="font-playfair text-primary text-2xl font-bold leading-7 tracking-tight">
                    <slot name="title">
                    Default title
                    </slot>
                </h3>
                <p class="text-center font-base font-dm font-darkM font-normal leading-6">
                    <slot name="descr">
                    Default description
                    </slot>
                </p>
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
const props = defineProps({
    item: {
        type: Object,
        required: true
    }
})


</script>