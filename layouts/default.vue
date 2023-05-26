<template>
    <div class="bg-[#242424]">
        <TheHeader/>

        <slot />

        <nuxt-link :to="{ hash: '#hero' }" :external="true">
            <TheFooter/>
        </nuxt-link>
    </div>
</template>

<script setup>

</script>

<script>

</script>

<style scoped></style>
