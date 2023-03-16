<template>
  <div
      class="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
    <h3 class="absolute top-6 md:top-8 uppercase tracking-[20px] text-gray-500 text-2xl">Experience</h3>
    <div
        class="w-full flex px-10 space-x-5 overflow-x-scroll p-5 snap-x snap-mandatory scrollbar scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-track-gray-400/20 scrollbar-thumb-violet-500/50">
      <ExperienceCardFreeLance />
      <ExperienceCardKremsa />
      <ExperienceCardKremsa />
      <ExperienceCardKremsa />
      <ExperienceCardKremsa />
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>