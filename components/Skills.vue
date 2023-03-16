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
       class="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
    <h3 class="absolute top-12 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>
    <h3 class="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">Hover over a skill for currency
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
  }" class="grid grid-cols-4 gap-5">
      <div v-for="(item, index) of experiences" :key="index" class="group relative flex cursor-pointer">
        <img
            class="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-500 ease-in-out"
            src="~/assets/images/laravel.svg" alt="Laravel"/>
        <div
            class="absolute opacity-0 group-hover:opacity-80 transition duration-500 ease-in-out group-hover:bg-white w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
          <div class="flex items-center justify-center h-full">
            <p class="text-3xl font-bold text-black opacity-100">{{  item + "%" }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const directionLeft = ref(false);
const experiences = ref([
    80, 70, 60, 20, 12, 34, 22, 44, 5, 64, 64, 46, 90, 12
]);
</script>

<style scoped>

</style>