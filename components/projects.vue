<template>
  <div v-motion="{
    initial:{
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1500,
      }
    }
  }"
       class="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
    <h3 class="absolute top-12 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">projects</h3>
    <div class="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-track-gray-400/20 scrollbar-thumb-violet-500/50">
      <div v-for="(project, i) in projects"
           class="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
        <img v-motion="{
          initial:{
            y: -500,
            opacity: 0,
          },
          visible: {

            y: 0,
            opacity: 1,
            transition:{
              duration: 1500,
            },
          },
        }"
             class="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-500 ease-in-out"
             src="~/assets/images/laravel.svg" alt="Laravel"/>
        <div class="space-y-10 px-0 md:px-10 max-w-6xl">
          <h4 class="text-4xl font-semibold text-center"><span
              class="underline decoration-violet-500/50">Case study {{ i + 1 }} of {{ projects.length }}:</span> UPS
            clone s</h4>
          <p class="text-lg text-center md:text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            nemo tempore vero voluptatem. Architecto consectetur distinctio, natus obcaecati possimus soluta totam
            veritatis? Debitis exercitationem iusto minima reiciendis soluta vitae voluptatibus.</p>
        </div>
      </div>
    </div>
    <div class="w-full absolute top-[30%] bg-violet-500/50 left-0 h-[500px] -skew-y-12"/>
  </div>
</template>

<script setup>
const projects = [1, 2, 3, 4, 5];
</script>

<style scoped>

</style>