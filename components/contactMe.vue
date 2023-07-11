<template>
    <div class="h-screen relative flex flex-col text-center md:text-left max-w-7xl px-10 justify-center mx-auto items-center">
        <h3 class="absolute z-0 top-6 md:top-8 uppercase tracking-[5px] md:tracking-[20px] text-gray-500 text-lg md:text-2xl">
            Contact</h3>

        <div class="flex flex-col space-y-2 md:space-y-10 justify-center">
            <h4 class="text-xl md:text-4xl font-semibold text-center">I have got just what you need.{{ " " }}
                <span class="underline decoration-violet-500/50">Let's talk</span>
            </h4>
            <div class="flex flex-col space-y-2 md:space-y-4 py-3 md:pb-0">
                <a href="tel:+421902617794"
                   class="flex flex-row items-center justify-center space-x-3 hover:text-violet-500 duration-500">
                    <PhoneIcon class="text-violet-500/50 h-5 w-5 md:h-7 md:w-7 animate-pulse"/>
                    <p class="text-base md:text-xl">+421 902 617 794</p>
                </a>
                <a href="mailto:michal.kristof.email@gmail.com"
                   class="flex flex-row items-center justify-center space-x-3 hover:text-violet-500 duration-500">
                    <EnvelopeIcon class="text-violet-500/50 h-5 w-5 md:h-7 md:w-7 animate-pulse"/>
                    <p class="text-base md:text-xl">michal.kristof.email@gmail.com</p>
                </a>
                <a href="https://goo.gl/maps/6JgGN7a8AzMgkXYV9" target="_blank"
                   class="flex flex-row items-center justify-center space-x-3 hover:text-violet-500 duration-500">
                    <MapPinIcon class="text-violet-500/50 h-5 w-5 md:h-7 md:w-7 animate-pulse"/>
                    <p class="text-base md:text-xl">Bratislava, Slovakia</p>
                </a>
            </div>

            <form @submit.prevent="submitForm" class="flex flex-col space-y-2 w-full mx-auto">
                <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
                <div class="flex w-full flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                    <div class="relative w-full">
                        <input v-model="formData.nameField" @change="v$.nameField.$touch" placeholder="Name"
                               name="nameField" id="nameField"
                               class="contactInput"
                               :class="{
                                        'border-red-500 focus:border-red-500': v$.nameField.$error,
                                        'border-[#42d392] ': !v$.nameField.$invalid,
                                        }" type="text"
                        />
                        <Icon
                                v-if="!v$.nameField.$invalid || v$.nameField.$error"
                                class="absolute right-2 h-full text-xl text-green-500"
                                :class="{ 'text-green-500': !v$.nameField.$invalid, 'text-yellow-500': v$.nameField.$error }"
                                :name="`heroicons-solid:${!v$.nameField.$error ? 'check-circle' : 'exclamation'}`"
                        />
                    </div>
                    <div class="relative w-full">
                        <input v-model="formData.emailField" @change="v$.emailField.$touch" placeholder="@Email"
                               name="emailField" id="emailField" class="contactInput"
                               :class="{
                                        'border-red-500 focus:border-red-500': v$.emailField.$error,
                                        'border-[#42d392] ': !v$.emailField.$invalid,
                                        }" type="text"/>
                        <Icon
                                v-if="!v$.emailField.$invalid || v$.emailField.$error"
                                class="absolute right-2 h-full text-xl text-green-500"
                                :class="{ 'text-green-500': !v$.emailField.$invalid, 'text-yellow-500': v$.emailField.$error }"
                                :name="`heroicons-solid:${!v$.emailField.$error ? 'check-circle' : 'exclamation'}`"
                        />
                    </div>
                </div>
                <div class="relative w-full">
                    <input v-model="formData.subjectField" @change="v$.subjectField.$touch" placeholder="Subject"
                           name="subjectField" id="subjectField" class="contactInput"
                           :class="{
                                        'border-red-500 focus:border-red-500': v$.subjectField.$error,
                                        'border-[#42d392] ': !v$.subjectField.$invalid,
                                        }" type="text"/>
                    <Icon
                            v-if="!v$.subjectField.$invalid || v$.subjectField.$error"
                            class="absolute right-2 h-full text-xl text-green-500"
                            :class="{ 'text-green-500': !v$.subjectField.$invalid, 'text-yellow-500': v$.subjectField.$error }"
                            :name="`heroicons-solid:${!v$.subjectField.$error ? 'check-circle' : 'exclamation'}`"
                    />
                </div>
                <div class="relative w-full">
                    <textarea v-model="formData.messageField" @change="v$.messageField.$touch" placeholder="Message"
                              name="messageField" id="messageField"
                              class="contactInput"
                              :class="{
                                        'border-red-500 focus:border-red-500': v$.messageField.$error,
                                        'border-[#42d392] ': !v$.messageField.$invalid,
                                        }" type="text"/>
                    <Icon
                            v-if="!v$.messageField.$invalid || v$.messageField.$error"
                            class="absolute right-2 h-full text-xl text-green-500"
                            :class="{ 'text-green-500': !v$.messageField.$invalid, 'text-yellow-500': v$.messageField.$error }"
                            :name="`heroicons-solid:${!v$.messageField.$error ? 'check-circle' : 'exclamation'}`"
                    />
                </div>
                <button v-if="!loading"
                        class="py-5 px-10 rounded-md text-black font-bold bg-violet-500 text-lg hover:text-violet-500 hover:bg-[#242424] border border-transparent hover:border-gray-600 duration-500"
                        type="submit">Submit
                </button>
                <div v-if="loading" role="status"
                     class="py-5 px-10 rounded-md text-black font-bold bg-[#242424] text-lg hover:text-violet-500 border border-gray-600 duration-500">
                    <svg aria-hidden="true" class="w-10 h-10 animate-spin text-gray-500 fill-violet-500 mx-auto"
                         viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"/>
                    </svg>
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="flex w-full items-center justify-center">
                     <span class="w-auto text-center text-red-500 text-base"
                           v-if="v$.nameField.$error || v$.emailField.$error || v$.subjectField.$error || v$.messageField.$error">
                        Please fill all fields !
                    </span>
                </div>
                <div class="flex w-full items-center justify-center">
                    <span class="w-auto text-green-500 text-base">
                        {{ submitMessage }}
                    </span>
                </div>
            </form>
        </div>
    </div>

</template>

<script setup>
import {PhoneIcon, EnvelopeIcon, MapPinIcon} from "@heroicons/vue/24/solid"
import {ref} from 'vue';
import {required, email, helpers} from '@vuelidate/validators';
import {useVuelidate} from '@vuelidate/core';

const runtimeConfig = useRuntimeConfig();

const submitMessage = ref('');

const loading = ref(false);

const formData = reactive({
    nameField: '',
    emailField: '',
    subjectField: '',
    messageField: '',
    submitMessage: '',
});

const rules = computed(() => {
    return {
        nameField: {
            required: helpers.withMessage('The name field is required', required),
        },
        emailField: {
            required: helpers.withMessage('The email field is required', required),
            emailField: helpers.withMessage('Invalid email format', email),
        },
        subjectField: {
            required: helpers.withMessage('The subject field is required', required),
        },
        messageField: {
            required: helpers.withMessage('The message field is required', required),
        },
    };
});

const v$ = useVuelidate(rules, formData);
const submitForm = async () => {
    loading.value = true;

    v$.value.$validate();

    if (v$.value.$error) {
        loading.value = false;
        submitMessage.value = '';
    }

    if (!v$.value.$error) {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: runtimeConfig.NUXT_ACCESS_KEY,
                name: nameField.value,
                email: emailField.value,
                subject: subjectField.value,
                message: messageField.value,
            }),
        });

        const result = await response.json();

        if (result.success) {
            loading.value = false;
            submitMessage.value = result.message;
        }
    }
};
</script>

<style scoped>

</style>