<template>
  <div class="h-screen relative flex flex-col text-center md:text-left max-w-7xl px-10 justify-center mx-auto items-center">
    <h3 class="absolute top-12 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">about</h3>
    <div class="flex flex-col space-y-2 md:space-y-10">
      <h4 class="text-2xl md:text-4xl font-semibold text-center">I have got just what you need.{{" "}}
        <p class="underline decoration-violet-500/50">Let's talk</p>
      </h4>

      <div class="flex flex-col space-y-2 md:space-y-10">
        <div class="flex flex-row items-center justify-center space-x-5">
          <PhoneIcon class="text-violet-500/50 h-7 w-7 animate-pulse"/>
          <p class="text-xl md:text-2xl">+421 902 617 794</p>
        </div>

        <div class="flex flex-row items-center justify-center space-x-5">
          <EnvelopeIcon class="text-violet-500/50 h-7 w-7 animate-pulse"/>
          <p class="text-xl md:text-2xl">michal.kristof.email@gmail.com</p>
        </div>

        <div class="flex flex-row items-center justify-center space-x-5">
          <MapPinIcon class="text-violet-500/50 h-7 w-7 animate-pulse"/>
          <p class="text-xl md:text-2xl">Bratislava, Slovakia</p>
        </div>
      </div>

      <form @submit="onSubmit" class="flex flex-col space-y-2 w-fit mx-auto">
        <div class="flex flex-row space-x-2">
          <input v-model="name.value" :ref="name.ref" placeholder="Name" class="contactInput" type="text" />
          <input v-model="email.value" :ref="email.ref" placeholder="@Email" class="contactInput" type="email" />
        </div>
        <input v-model="subject.value" :ref="subject.ref" placeholder="Subject" class="contactInput" type="text" />

        <textarea v-model="message.value" :ref="message.ref" placeholder="Message" class="contactInput" />
        <button class="py-5 px-10 rounded-md text-black font-bold bg-violet-500 text-lg" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/vue/24/solid"
import { useForm } from 'vue-hooks-form'

const { useField, handleSubmit } = useForm({
  defaultValues: {},
});
const name = useField('name', {
  rule: { required: true },
});
const email = useField('email', {
  rule: {
    required: true,
  },
});
const subject = useField('subject', {
  rule: {
    required: true,
  },
});
const message = useField('message', {
  rule: {
    required: true,
  },
});
const onSubmit = () => {
  window.location.href = `mailto:${email.value}?subject=${subject.value}&body=Hi, my name is ${name.value}`
};
</script>

<style scoped>

</style>