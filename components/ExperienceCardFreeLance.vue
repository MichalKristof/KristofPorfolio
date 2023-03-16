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
         src="~/assets/images/kfk.png" alt="Kfk logo"/>
    <div class="px-5 md:px-10">
      <h4 class="text-2xl md:text-4xl font-light">Freelance</h4>
      <p class="font-bold text-xl md:text-2xl">Junior full-stack dev</p>
      <p class="uppercase py-2 md:py-3 text-gray-300">1-7-2020 - 25-12-2020</p>
      <ul class="list-disc space-y-1 md:space-y-2 ml-5 text-lg">
        <li>Laravel framework</li>
        <li>Basics of javascript</li>
        <li>Git, Git-flow</li>
        <li>Admin site for company kfk servis</li>
      </ul>
    </div>
  </article>
</template>

<script setup>

</script>

<style scoped>

</style>