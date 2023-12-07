<template>
    <div class="w-156 max-w-full mx-auto">
        <h2 class="px-4 mb-5 mt-20 text-center text-6xl sm:text-8xl font-playfair font-normal sm:leading-12">Contact Us</h2>
        <p class="px-4 text-center text-neutralGray text-18-r lg:w-2/5 lg:mx-auto mb-12">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
        <form @submit.prevent="submitForm" class="w-11/12 md:w-3/5 md:min-w-fit max-w-full mt-16 mb-20 mx-auto p-5 lg:p-10 rounded-2xl shadow-customShadow">
            <div class="flex flex-col gap-6 items-center">
                <div class="flex flex-col md:flex-row gap-6 w-full">
                    <div class="flex flex-col gap-2 w-full">
                        <label for="name">Name</label>
                        <BaseInputText 
                            v-model="name" 
                            type='text' 
                            id="name" 
                            placeholder="Enter your name"  
                            required
                            class="placeholder:text-16-r placeholder:text-darkGray min-w-full"/>
                    </div>
                    <div class="flex flex-col gap-2 w-full">
                        <label for="email">Email</label>
                        <BaseInputText 
                            v-model="email" 
                            type='email' 
                            id="email" 
                            placeholder="Enter email address" 
                            required
                            class="placeholder:text-16-r placeholder:text-darkGray min-w-full"/>
                    </div>
                </div>
                <div class="flex flex-col gap-2 w-full">
                    <label for="subject">Subject</label>
                    <BaseInputText 
                        v-model="subject" 
                        type='text' 
                        id="subject" 
                        placeholder="Write a subject" 
                        required
                        class="placeholder:text-16-r placeholder:text-darkGray min-w-full"/>
                </div>
                <div class="flex flex-col w-full gap-2">
                    <label for="message">Message</label>
                    <BaseTextarea 
                        v-model="message" 
                        id="message" 
                        placeholder="Write your message" 
                        required
                        class="placeholder:text-16-r placeholder:text-darkGray max-w-full"/>
                </div>
                <div class="flex flex-col w-full">
                    <BaseButtonRed type="submit">Send</BaseButtonRed>
                </div>
            </div>
        </form>
        <div class="flex flex-col md:flex-row gap-20 text-center md:text-left justify-center mb-32">
            <div class="flex flex-col gap-6">
                <p class="text-20-b text-primary">Call Us:</p>
                <h3 class="text-secondary">+1-234-567-8900</h3>
            </div>
            <div class="flex flex-col gap-6">
                <p class="text-20-b text-primary">Hours:</p>
                <p class="text-18-r text-primary">
                    Mon-Fri: 11am - 8pm<br>
                    Sat, Sun: 9am - 10pm
                </p>
            </div>
            <div class="flex flex-col gap-6">
                <p class="text-20-b text-primary">Our Location:</p>
                <p class="text-18-r text-primary">
                    123 Bridge Street<br>             
                    Nowhere Land, LA 12345<br>
                    United States
                </p>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import BaseInputText from '../components/UI/BaseInputText.vue';
import BaseTextarea from '../components/UI/BaseTextarea.vue';
import BaseButtonRed from '../components/UI/BaseButtonRed.vue';

const name = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');

function submitForm() {
    console.log(name.value)
    console.log(email.value)
    console.log(subject.value)
    console.log(message.value)

    
}

</script>