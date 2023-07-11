<template>
    <div
            class="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 class="absolute z-0 top-6 md:top-8 uppercase tracking-[5px] md:tracking-[20px] text-gray-500 text-lg md:text-2xl">
            Projects</h3>
        <div
                class="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-track-gray-400/20 scrollbar-thumb-violet-500/50">
            <div v-for="(project, i) in projects"
                 class="relative w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-2 md:p-20 lg:p-44 h-screen">
                <img class="rounded-2xl object-cover w-3/4 md:w-1/2 h-auto"
                     :src="project.image" alt="Project image"/>
                <div class="space-y-10 px-0 md:px-10">
                    <h4 class="text-4xl font-semibold text-center"><span
                            class="underline decoration-violet-500/50">Case study {{ i + 1 }} of {{
                        projects.length
                        }}: </span>
                        <a :href="project.url" target="_blank" class="hover:text-violet-500/50 duration-500">{{ project.title }}</a>
                    </h4>
                    <p class="hidden md:flex text-lg text-center">{{ project.description }}</p>
                </div>
            </div>
        </div>
        <div class="absolute bottom-5 animate-pulse flex felx-wrap items-center gap-1 lg:hidden">
            <span class="text-sm text-gray-500 font-semibold">Slide to show more</span>
            <ArrowUpCircleIcon class="h-7 w-7 text-gray-500 rotate-90"/>
        </div>
        <div class="w-full absolute top-[30%] bg-violet-500/50 left-0 h-[500px] -skew-y-12"/>
    </div>
</template>

<script setup>
import proplusco from "~/assets/images/projects/proplusco.png";
import maslow from "~/assets/images/projects/maslow.png";
import kfkservis from "~/assets/images/projects/kfkservis.png";
import { ArrowUpCircleIcon  } from "@heroicons/vue/24/solid"


const projects = [
    {
        title: "Proplusco",
        description: "A personal agency website that helps find a job is a platform designed to connect job seekers with potential employers. The website typically offers a variety of job search tools, such as job listings, resume building tools, and interview preparation resources, to help job seekers find employment opportunities that match their skills and experience. I built the website using Laravel, some vue components and TailwindCSS.",
        image: proplusco,
        url: "https://proplusco.sk",
    },
    {
        title: "Maslow",
        description: "Truity is a website that offers a range of personality and career assessments, as well as articles and resources related to personal growth and development. Users can take free or paid assessments to gain insights into their personality type, interests, and strengths, and then use that information to explore potential career paths and improve their relationships and communication skills. The site also provides a variety of tools and resources for personal growth, including articles, podcasts, and online courses. Overall, Truity aims to help individuals better understand themselves and achieve their goals by providing personalized insights and guidance. I built the website using Vue 3 with NuxtJS 3 and TailwindCSS. This website is still in development.",
        image: maslow,
    },
    {
        title: "KFK Servis",
        description: "KFK Servis is a A backend website is a type of website that is designed to be used by administrators or employees to manage the content, data, and functionality of a website or application. A backend website that allows users to store PDF orders and work with them may be a part of an e-commerce platform, order management system, or other similar system. The website is built using Laravel.",
        image: kfkservis,
    },
];
</script>

<style scoped>

</style>