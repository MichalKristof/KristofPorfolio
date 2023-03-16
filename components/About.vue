<template>
  <div class="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto gap-3">
      <h3 class="absolute top-6 md:top-8 uppercase tracking-[20px] text-gray-500 text-2xl">about</h3>
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
    }" class="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]" src="~/assets/images/profile_photo.jpeg" alt="Profile photo" />
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
    }" class="text-4xl font-semibold">
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
        Hi there! My name is Michal Kristof and I'm a 28-year-old full-stack developer based in Bratislava, Slovakia. I studied at STU FCHPT and have been coding for almost two years now. I actually started learning to code while in college and since then, I've completed two projects. One of the projects I worked on was for a company that sells winter gardens. I developed a solution for them that helped streamline their sales process. The other project I worked on was for my personal agency, Proplusco. It was a really exciting project that allowed me to showcase my skills and creativity as a developer. I'm really proud of what we accomplished with that project, and I'm always looking for new challenges to take on. Overall, I'm a driven and passionate developer who loves exploring new technologies and finding innovative solutions to complex problems. Whether I'm working on a project for a client or pursuing my own personal projects, I always strive to do my best and deliver top-quality results.
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