<script setup>
import { ref } from 'vue'

import Header from '../components/Header.vue'

defineProps({
})
</script>

<template>
  <div class="body">
    <Header></Header>
    <p>Home page apenas</p>
  </div>
</template>

<style scoped>
    .body {
        display: flex;
        flex-direction: column;
        gap: 4px;
        background-color: #252525;
        min-width: 100vw;
        min-height: 100vh;
    }
</style>
