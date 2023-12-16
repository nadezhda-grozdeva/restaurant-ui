<template>
    <div class="w-156 max-w-full mx-auto">
        <div class="flex flex-col gap-6 mb-16 pt-16 items-center">
            <heading2 class="px-4 text-center text-primary">Contact Us</heading2>
            <paragraph18 class="px-4 text-center text-neutralGray font-normal lg:w-5/12 lg:mx-auto">We consider all the drivers of change gives you the components you need to change to create a truly happens.</paragraph18>
        </div>
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
                            required/>
                    </div>
                    <div class="flex flex-col gap-2 w-full">
                        <label for="email">Email</label>
                        <BaseInputText 
                            v-model="email" 
                            type='email' 
                            id="email" 
                            placeholder="Enter email address" 
                            required/>
                    </div>
                </div>
                <div class="flex flex-col gap-2 w-full">
                    <label for="subject">Subject</label>
                    <BaseInputText 
                        v-model="subject" 
                        type='text' 
                        id="subject" 
                        placeholder="Write a subject" 
                        required/>
                </div>
                <div class="flex flex-col w-full gap-2">
                    <label for="message">Message</label>
                    <BaseTextarea 
                        v-model="message" 
                        id="message" 
                        placeholder="Write your message" 
                        required/>
                </div>
                <div class="flex flex-col w-full">
                    <BaseButtonRed type="submit">Send</BaseButtonRed>
                </div>
            </div>
        </form>
        <div class="flex flex-col md:flex-row gap-20 text-center md:text-left justify-center mb-32">
            <div class="flex flex-col gap-6">
                <p class="text-20-b text-primary">Call Us:</p>
                <heading3 class="text-secondary">+1-234-567-8900</heading3>
            </div>
            <div class="flex flex-col gap-6">
                <paragraph20 class="font-bold text-primary">Hours:</paragraph20>
                <paragraph18 class="font-normal text-primary">
                    Mon-Fri: 11am - 8pm<br>
                    Sat, Sun: 9am - 10pm
                </paragraph18>
            </div>
            <div class="flex flex-col gap-6">
                <paragraph20 class="font-bold text-primary">Our Location:</paragraph20>
                <paragraph18 class="font-normal text-primary">
                    123 Bridge Street<br>
                    Nowhere Land, LA 12345<br>
                    United States
                </paragraph18>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import BaseInputText from '../components/UI/BaseInputText.vue';
import BaseTextarea from '../components/UI/BaseTextarea.vue';
import BaseButtonRed from '../components/UI/BaseButtonRed.vue';
import Heading2 from '../components/UI/Heading2.vue';
import Heading3 from '@/components/UI/Heading3.vue';
import Paragraph18 from '../components/UI/Paragraph18.vue';
import Paragraph20 from '../components/UI/Paragraph20.vue';


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