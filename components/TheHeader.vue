<template>
    <header class="sticky top-0 flex items-center justify-between pr-4 md:pr-0 md:px-10 md:py-5 max-w-7xl mx-auto z-20 xl:items-center">
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

    }" class="md:flex hidden flex-row items-center gap-3">
            <a href="https://github.com/MichalKristof" target="_blank"
               class="w-auto items-center bg-cover bg-center hover:scale-110 duration-500">
                <img class="w-10 h-10" src="~/assets/images/github.svg" alt="Github"/>
            </a>
            <a href="https://www.linkedin.com/in/michal-kri%C5%A1tof-74a229204/" target="_blank"
               class="w-auto items-center bg-cover bg-center hover:scale-110 duration-500">
                <img class="w-10 h-10" src="~/assets/images/linkedin.svg" alt="Linkedin"/>
            </a>
            <a href="https://www.instagram.com/michalides12" target="_blank"
               class="w-auto items-center bg-cover bg-center hover:scale-110 duration-500">
                <img class="w-10 h-10" src="~/assets/images/instagram.svg"
                     alt="Instagram"/>
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
      }" class="md:flex hidden flex-row items-center text-gray-400 cursor-pointer space-x-2 pr-9">
                <EnvelopeIcon class="w-8 h-8"/>
                <p class="uppercase text-sm font-semibold hidden md:inline-flex">
                    Get in touch
                </p>
            </div>
        </nuxt-link>

        <div class="flex md:hidden flex-wrap w-full items-center justify-start duration-700 rounded-b-[50px] overflow-hidden"
             :class="{'bg-violet-500/70': open, 'bg-transparent': !open}">
            <button
                    @click="open = !open"
                    class="relative z-50 block h-full px-5 py-9 rounded-full focus:outline-none md:hidden"
            >
                <span class="sr-only">Open main menu</span>
                <div
                        class="absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 transform"
                >
                    <span
                            aria-hidden="true"
                            class="absolute block h-0.5 w-5 transform rounded-xl transition duration-500 ease-in-out"
                            :class="{ 'rotate-45 bg-black': open, ' -translate-y-1.5 bg-violet-500': !open }"
                    ></span>
                    <span
                            aria-hidden="true"
                            class="absolute block h-0.5 w-5 transform rounded-xl transition duration-500 ease-in-out"
                            :class="{'translate-x-full opacity-0': open, 'bg-violet-500': !open}"
                    ></span>
                    <span
                            aria-hidden="true"
                            class="absolute block h-0.5 w-5 transform rounded-xl transition duration-500 ease-in-out"
                            :class="{ '-rotate-45 bg-black': open, 'translate-y-1.5 bg-violet-500': !open }"
                    ></span>
                </div>
            </button>
            <nav
                    class="transition-height flex w-full z-50 items-center justify-center bg-transparent overflow-hidden duration-500 ease-in-out md:hidden"
                    :class="{ 'h-[200px] shadow-2xl': open, 'h-0': !open }"
            >
                <div class="flex flex-col items-center justify-between w-full gap-2">
                    <nuxt-link :to="{ hash: '#contact' }" :external="true" class="hover:scale-110 duration-500"
                               @click="open = !open">
                        <div class="flex md:hidden items-center text-white cursor-pointer space-x-2">
                            <EnvelopeIcon class="w-10 h-10"/>
                        </div>
                    </nuxt-link>
                    <a href="https://github.com/MichalKristof" target="_blank"
                       class="w-auto items-center bg-cover bg-center hover:scale-110 duration-500">
                        <img class="w-10 h-10" src="~/assets/images/github-mobile.svg" alt="Github"/>
                    </a>
                    <a href="https://www.linkedin.com/in/michal-kri%C5%A1tof-74a229204/" target="_blank"
                       class="w-auto items-center bg-cover bg-center hover:scale-110 duration-500">
                        <img class="w-10 h-10" src="~/assets/images/linkedin-mobile.svg" alt="Linkedin"/>
                    </a>
                    <a href="https://www.instagram.com/michalides12" target="_blank"
                       class="w-auto items-center bg-cover bg-center hover:scale-110 duration-500">
                        <img class="w-10 h-10" src="~/assets/images/instagram-mobile.svg"
                             alt="Instagram"/>
                    </a>
                </div>
            </nav>
        </div>

    </header>
</template>

<script setup>
import {EnvelopeIcon} from "@heroicons/vue/24/solid";

import {ref} from "vue";

const open = ref(false);

</script>

<style lang="scss" scoped>

</style>