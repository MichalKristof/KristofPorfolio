<template>
  <header class="sticky top-0 flex items-start justify-between px-10 py-5 max-w-7xl mx-auto z-20 xl:items-center">
    <div v-motion="{
      initial: {
        x: -500,
        opacity: 0,
        scale: 0.2,
      },
      enter: {
        x: 0,
        opacity: 1,
        scale: 1,
         transition: {
          duration: 1200,
        }
      },

    }" class="flex flex-row items-center gap-3">
      <a href="https://github.com/MichalKristof" target="_blank" class="w-auto items-center bg-cover bg-center hover:scale-110 duration-500">
        <img class="w-8 h-8 md:w-10 md:h-10" src="~/assets/images/github.svg" alt="Github"/>
      </a>
      <a href="https://www.linkedin.com/in/michal-kri%C5%A1tof-74a229204/" target="_blank" class="w-auto items-center bg-cover bg-center hover:scale-110 duration-500">
        <img class="w-8 h-8 md:w-10 md:h-10" src="~/assets/images/linkedin.svg" alt="Linkedin"/>
      </a>
      <a class="w-auto items-center bg-cover bg-center hover:scale-110 duration-500">
        <img class="w-8 h-8 md:w-10 md:h-10" src="~/assets/images/instagram.svg" alt="Instagram"/>
      </a>
    </div>
    <nuxt-link :to="{ hash: '#contact' }" :external="true" class="hover:scale-110 duration-500">
      <div v-motion="{
        initial: {
          x: 500,
          opacity: 0,
          scale: 0.2,
        },
        enter: {
          x: 0,
          opacity: 1,
          scale: 1,
          transition: {
            duration: 1200,
          }
        }
      }" class="flex flex-row items-center text-gray-400 cursor-pointer space-x-2">
        <EnvelopeIcon class="w-8 h-8"/>
        <p class="uppercase inline-flex text-sm font-semibold hidden md:inline-flex">
          Get in touch
        </p>
      </div>
    </nuxt-link>
  </header>
</template>

<script setup>
import { EnvelopeIcon } from "@heroicons/vue/24/solid"

</script>

<style lang="scss" scoped>

</style>