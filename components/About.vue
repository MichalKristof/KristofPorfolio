<template>
  <div class="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto gap-3">
    <h3 class="absolute z-0 top-6 md:top-8 uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl">About</h3>

    <img v-motion="{
      initial: {
        x: -200,
        opacity: 0,
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 1200,
        }
      },
    }" class="-mb-20 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]" src="~/assets/images/profile_photo.jpeg" alt="Profile photo" />
    <div class="space-y-5 px-0 md:px-10">
    <h4 v-motion="{
      initial: {
        opacity:0,
      },
      visible: {
        opacity: 1,
        transition: {
          duration: 1500,
        }
      }
    }" class="text-3xl md:text-4xl font-semibold">
      Here is a <span class="underline decoration-violet-500/50">little</span> background
    </h4>
      <p v-motion="{
      initial: {
        opacity:0,
      },
      visible: {
        opacity: 1,
        transition: {
          duration: 1500,
        }
      }
    }" class="text-base">
        Hi there! My name is Michal Kristof and I'm full-stack developer. I'm really proud of what we accomplished with that project, and I'm always looking for new challenges to take on. Overall, I'm a driven and passionate developer who loves exploring new technologies and finding innovative solutions to complex problems. Whether I'm working on a project for a client or pursuing my own personal projects, I always strive to do my best and deliver top-quality results.
      </p>
    </div>
  </div>
</template>

<script setup>

</script>

<script>

</script>

<style scoped>

</style>