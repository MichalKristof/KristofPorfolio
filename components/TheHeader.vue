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

    }" class="flex flex-row items-center">
<!--      <img src="~/assets/images/linkedin.svg" alt="Linkedin"/>-->
<!--      <img src="~/assets/images/linkedin.svg" alt="Linkedin"/>-->
<!--      <img src="~/assets/images/linkedin.svg" alt="Linkedin"/>-->
    </div>
    <nuxt-link :to="{ hash: '#contact' }" :external="true">
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
        <EnvelopeIcon class="w-7 h-7"/>
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