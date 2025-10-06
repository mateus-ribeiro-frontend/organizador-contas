<script setup>
import { ref } from 'vue'

import CloseBox from '../assets/close-box.svg'

defineProps({
  isOpen: Boolean
})
</script>

<template>
  <div v-if="true" class="overlay">
    <div class="filter">
      <header class="header">
        <p>Filtro</p>
        <CloseBox class="close" />
      </header>
      <slot name="body" />
      <slot name="buttons" />
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.72);
  height: 100vh;
}

.filter {
  top: 40px;
  position: relative;
  background-color: #110517;
}

.header {
  padding: 8px;
  display: flex;
  justify-content: space-between;
}

.close {
  width: 38px;
  height: 38px;
  fill: white;
}
</style>
