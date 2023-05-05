<template>
  <div
      class="h-screen w-11/12 flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center">
    <h3 class="absolute z-0 top-6 md:top-8 uppercase tracking-[5px] md:tracking-[20px] text-gray-500 text-lg md:text-2xl">Experience</h3>

    <div
        class="w-auto flex space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-track-gray-400/20 scrollbar-thumb-violet-500/50">
      <ExperienceCardFreeLance />
      <ExperienceCardKremsa />
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>