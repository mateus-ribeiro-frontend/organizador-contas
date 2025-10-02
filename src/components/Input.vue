<script setup>
import { ref } from 'vue'

defineProps({
    title: String,
    placeholder: String,
    isMoney: Boolean
})

let valueInputText = ref('')
let valueInputMoney = ref('R$ 00,00')

const formatMoney = (value) => {
    let onlyNumber = value.replace(/\D/g, '')

    if (onlyNumber === '') {
        valueInputMoney.value = 'R$ 0,00'
        return
    }

    let numberFloat = parseFloat(onlyNumber) / 100
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 3
    });

    valueInputMoney.value = formatter.format(numberFloat)
}

</script>

<template>
    <div class="container-input">
        <p class="title">{{ title }}</p>

        <input v-if="isMoney" @input="event => {
            formatMoney(event.target.value)
            $emit('onInput', valueInputMoney)
        }" type="text" class="input" :value="valueInputMoney" :placeholder="placeholder" />

        <input v-if="!isMoney" @input="event => {
            $emit('onInput', event.target.value)
        }" type="text" class="input" :value="valueInputText" :placeholder="placeholder" />
    </div>
</template>

<style scoped>
.container-input {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.title {
    color: white;
    font-weight: bolder;
    font-size: 18px;
}

.input {
    border-radius: 8px;
    height: 32px;
}
</style>
