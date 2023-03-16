<template>
  <div class="h-screen flex flex-col items-center justify-center text-center overflow-hidden space-y-8">
    <BackgroundCirecles/>
    <img class="relative rounded-full h-32 w-32 mx-auto object-cover" src="~/assets/images/title_photo.jpeg"
         alt="Title photo">
    <div class="z-20">
      <h2 class="text-base md:text-2xl uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px]">Software Engineer</h2>
      <h1 class="text-2xl md:text-5xl lg:text-6xl font-semibold scroll-px-10">
        <VueWriter
            :array="arr"
            delaySpeed="2000"
            :eraseSpeed="50"
            :typeSpeed="100"/>
      </h1>
      <div class="flex flex-col md:flex-row pt-5 items-center justify-center gap-2">
        <nuxt-link :to="{ hash: '#about' }" :external="true">
          <button class="heroButton">About</button>
        </nuxt-link>
        <nuxt-link :to="{ hash: '#experience' }" :external="true">
          <button class="heroButton">Experience</button>
        </nuxt-link>
        <nuxt-link :to="{ hash: '#skills' }" :external="true">
          <button class="heroButton">Skills</button>
        </nuxt-link>
        <nuxt-link :to="{ hash: '#projects' }" :external="true">
          <button class="heroButton">Projects</button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import VueWriter from 'vue-writer'

const arr = ref(["Hi, The Name's Michal Krištof", "Guy-who-loves-coffee.vue", "<butLovesToCodeMore />"])
</script>

<script>

</script>

<style scoped>
.is-typed span.typed {
  color: black;
}

.is-typed span.cursor {
  display: inline-block;
  width: 3px;
  background-color: white;
  animation: blink 1s infinite;
}

.is-typed span.cursor.typing {
  animation: none;
}

@keyframes blink {
  49% {
    background-color: black;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>