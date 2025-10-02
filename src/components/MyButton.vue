<script setup>
import { ref } from 'vue'

defineProps({
    title: String,
    type: String
})
</script>

<template>
    <button @click="() => $emit('onClick')" :class="['button', { 'button-green': type === 'green', 'button-red': type === 'red'  }]">
        <p class="title"> {{ title }}</p>
    </button>
</template>

<style scoped>
.button{
    border-radius: 16px;
    min-width: 204px;
    min-height: 40px;
    align-self: center;
    border-style: none;
}

.button-green{
    background-color: #103308;
}

.button-red{
    background-color: #410505;
}

.title{
    color: white;
    font-size: 24px;
    font-weight: bolder;
}
</style>
