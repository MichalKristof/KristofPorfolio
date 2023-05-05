<template>
    <div v-motion="{
        initial: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 1500,
          },
        },
      }"
         class="flex relative flex-col text-center md:text-left max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
        <h3 class="absolute z-0 top-6 md:top-8 uppercase tracking-[5px] md:tracking-[20px] text-gray-500 text-lg md:text-2xl">Skills</h3>
        <h3 class="absolute z-0 hidden md:flex top-16 md:top-20 uppercase tracking-[3px] text-gray-500 text-sm md:text-base">Hover over
            a skill for currency
            profieciency</h3>
        <div v-motion="{
            initial: {
              opacity: 0,
              x: directionLeft ? -200: 200,
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 1500,
              },
            },
          }" class="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-5">
        <div v-for="(item, index) of experiences" :key="index" class="group relative flex cursor-pointer">
            <img
                    class="rounded-full border border-gray-600 object-cover w-20 h-20 md:w-24 md:h-24 filter group-hover:grayscale transition duration-500 ease-in-out"
                    :src="item.img" :alt="item.alt"/>
            <div
                    class="absolute opacity-0 group-hover:opacity-70 transition duration-500 ease-in-out group-hover:bg-white w-20 h-20 md:w-24 md:h-24 rounded-full z-0">
                <div class="flex items-center justify-center h-full">
                    <p class="text-3xl font-bold text-black opacity-100">{{ item.value + "%" }}</p>
                </div>
            </div>
        </div>
        </div>
        <div class="flex w-8/12 md:w-6/12 text-lg md:text-2xl text-center text-gray-400 font-bold pt-2">Git, CircleCI, html, CSS, JavaScript, Laravel, Yii, Symfony, Vue, NuxtJS, TailwindCSS, Docker, Sanity</div>
    </div>
</template>

<script setup>
import circleci from "~/assets/images/circleCI.png"
import git from "~/assets/images/git.png"
import html from "~/assets/images/html.png"
import css from "~/assets/images/css.png"
import javascript from "~/assets/images/js.png"
import laravel from "~/assets/images/laravel.svg"
import yii from "~/assets/images/yii.png"
import symfony from "~/assets/images/symfony.png"
import vue from "~/assets/images/vue.png"
import nuxtjs from "~/assets/images/nuxtjs.png"
import tailwind from "~/assets/images/tailwind.svg"
import docker from "~/assets/images/docker.png"
import sanity from "~/assets/images/sanity.png"


import {ref} from 'vue'

const directionLeft = ref(false);
const experiences = ref([
    {img: git, value: 90, alt: "Git icon"},
    {img: circleci, value: 30, alt: "CircleCI icon"},
    {img: html, value: 90, alt: "Html icon"},
    {img: css, value: 90, alt: "Css icon"},
    {img: javascript, value: 70, alt: "Javascript icon"},
    {img: laravel, value: 70, alt: "Laravel icon"},
    {img: yii, value: 20, alt: "Yii icon"},
    {img: symfony, value: 40, alt: "Symfony icon"},
    {img: vue, value: 60, alt: "Vue icon"},
    {img: nuxtjs, value: 80, alt: "Nuxtjs icon"},
    {img: tailwind, value: 90, alt: "Tailwind CSS icon"},
    {img: docker, value: 65, alt: "Docker icon"},
    {img: sanity, value: 20, alt: "Sanity io icon"},
]);
</script>

<style scoped>

</style>