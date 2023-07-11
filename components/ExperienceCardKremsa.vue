<template>
  <article class="flex py-2 mb-8 flex-col rounded-2xl items-center w-full md:w-[600px] xl:w-[800px] flex-shrink-0 snap-center bg-[#292929] opacity-100 xl:opacity-40 xl:hover:opacity-100 cursor-pointer duration-500 overflow-hidden">
    <div v-motion="{
      initial: {
        y: -100,
        opacity:0,
      },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 1500,
        },
      }
    }" class="flex w-32 h-32 xl:w-[120px] xl:h-[120px] object-cover object-center items-center rounded-ful mt-5">
      <img  class="w-auto h-full"
            src="~/assets/images/kremsa_logo.svg" alt="Kremsa logo"/>
    </div>
    <div class="px-5 md:px-10 py-2 md:py-3">
      <h4 class="text-2xl md:text-3xl font-light">Kremsa Digital s.r.o.</h4>
      <p class="font-bold text-lg md:text-xl">Medior full-stack dev</p>
      <p class="uppercase py-2 md:py-3 text-gray-300">2-2-2022 - now</p>
      <ul class="list-disc space-y-1 md:space-y-2 ml-5 text-lg">
        <li>Docker</li><li>Circle CI</li>
        <li>Tailwind CSS</li>
        <li>Laravel, Yii, Symfony</li>
        <li>Vue, NuxtJS</li>
        <li>Sanity io</li>
      </ul>
    </div>
  </article>
</template>

<script setup>

</script>

<style scoped>

</style>