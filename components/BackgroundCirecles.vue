<template>
  <div v-motion="{
    initial: {
      opacity: 0,
      scale: 0,
    },
    enter: {
      scale: [1, 2, 2, 3, 1],
      opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      borderRadius: ['20%','20%','50%','80%','20%'],
      transition: {
        duration: 2800,
      }
    }
  }" class="relative flex justify-center items-center">
    <div class="absolute border border-[#333333] rounded-full w-[200px] h-[200px] animate-ping mt-52"></div>
    <div class="absolute border border-[#333333] rounded-full w-[300px] h-[300px] mt-52"></div>
    <div class="absolute border border-[#333333] rounded-full w-[500px] h-[500px] mt-52"></div>
    <div class="absolute border border-violet-500 rounded-full opacity-40 w-[650px] mt-52 h-[650px] animate-pulse"></div>
    <div class="absolute border border-[#333333] rounded-full w-[800px] h-[800px] mt-52"></div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>