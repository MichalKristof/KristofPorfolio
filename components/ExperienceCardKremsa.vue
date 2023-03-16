<template>
  <article class="flex py-2 flex-col rounded-2xl items-center w-full md:w-[600px] xl:w-[800px] flex-shrink-0 snap-center bg-[#292929] opacity-40 hover:opacity-100 cursor-pointer duration-500 overflow-hidden">
    <img v-motion="{
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
    }" class="w-32 h-32 rounded-full xl:w-[120px] xl:h-[120px] object-cover object-center"
         src="~/assets/images/kremsa_logo.svg" alt="Kremsa logo"/>
    <div class="px-5 md:px-10">
      <h4 class="text-2xl md:text-4xl font-light">Kremsa Digital s.r.o.</h4>
      <p class="font-bold text-xl md:text-2xl">Junior/Medior full-stack dev</p>
      <p class="uppercase py-2 md:py-3 text-gray-300">Started work 2-2-2022 - now</p>
      <ul class="list-disc space-y-1 md:space-y-2 ml-5 text-lg">
        <li>Docker</li>
        <li>Javscript</li>
        <li>Laravel, Yii, Symfony</li>
        <li>Vue, Nuxtjs</li>
        <li>Project Proplusco s.r.o.</li>
        <li>Working on Maslow website</li>
      </ul>
    </div>
  </article>
</template>

<script setup>

</script>

<style scoped>

</style>