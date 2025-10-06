<script setup>
import { ref } from 'vue'

defineProps({
    options: Array,
    selected: Object
})
</script>

<template>
    <div>
        <!--todo-->
    </div>
</template>

<style scoped>
.button {
    border-radius: 16px;
    min-width: 204px;
    min-height: 40px;
    align-self: center;
    border-style: none;
}

.button-green {
    background-color: #103308;
}

.button-red {
    background-color: #410505;
}

.title {
    color: white;
    font-size: 24px;
    font-weight: bolder;
}
</style>
