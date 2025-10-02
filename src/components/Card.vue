<script setup>
import { ref } from 'vue'

defineProps({
})
</script>

<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  display: flex;
  padding: 8px 8px 8px 8px;
  gap: 8px;
  background-color: #110517;
  flex-direction: column;
}
</style>
