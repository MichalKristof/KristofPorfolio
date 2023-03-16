<template>
  <div
      class="bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-violet-500/50">
    <TheHeader/>

    <section id="hero" class="snap-start">
      <Hero/>
    </section>

    <section id="about" class="snap-center">
      <About/>
    </section>

    <section id="experience" class="snap-center">
      <WorkExperience/>
    </section>

    <section id="skills" class="snap-start">
      <Skills/>
    </section>

    <section id="projects" class="snap-start">
      <Projects/>
    </section>

    <section id="contact" class="snap-start">
      <ContactMe/>
    </section>

    <nuxt-link :to="{ hash: '#hero' }" :external="true">
      <TheFooter/>
    </nuxt-link>
  </div>

</template>

<script setup>

</script>

<style scoped>

</style>