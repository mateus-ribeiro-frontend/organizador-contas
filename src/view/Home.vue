<script setup>
import { useStore } from 'vuex'
import { computed, reactive, ref } from 'vue'

import Header from '../components/Header.vue'
import Card from '../components/Card.vue'
import Input from '../components/Input.vue'
import MyButton from '../components/MyButton.vue'

import ChevronRight from '../assets/chevron-right.svg'

const store = useStore()
const earnings = computed(() => store.state.home.monthlyEarnings)
const earningsWithMask = computed(() => {
    const monthlyEarnings = earnings.value
    const formatter = new Intl.NumberFormat('pt-BR', { 
        style: 'currency', 
        currency: 'BRL', 
        minimumFractionDigits: 2, 
        maximumFractionDigits: 3 
    });

    return formatter.format(parseFloat(monthlyEarnings))
})

let gainNameToAdd = ''
let gainValueToAdd = ''

let debitNameToAdd = ''
let debitValueToAdd = ''

const addGain = () => {
    const newGainOnlyNumber = gainValueToAdd.replace(/\D/g, '')

    if(newGainOnlyNumber === ''){
        //to-do add validation empty number
        return
    }

    let newGainFloat = parseFloat(newGainOnlyNumber) / 100
    const valueSum = earnings.value + newGainFloat
    store.dispatch('home/addGain', valueSum)
}

const debitGain = () => {
    const newDebitOnlyNumber = debitValueToAdd.replace(/\D/g, '')

    if(newDebitOnlyNumber === ''){
        //to-do add validation empty number
        return
    }

    let newDebitFloat = parseFloat(newDebitOnlyNumber) / 100
    const valieDecreases = earnings.value - newDebitFloat
    store.dispatch('home/debitGain', valieDecreases)
}

</script>

<template>
  <div class="body">
    <Header />

    <Card>
        <div class="container-month">
            <div class="container-amount">
                <p class="title">Ganhos mensal </p>
                <p class="amount">{{earningsWithMask}}</p>
            </div>

            <ChevronRight class="arrow" />
        </div>
    </Card>

    <Card>
        <p class="title">Adicionar ganho</p>
        <Input @on-input="(value) => gainNameToAdd = value" title="Nome:" placeholder="Ex: Trabalho"/>
        <Input :is-money="true" @on-input="(value) => gainValueToAdd = value" title="Valor:" placeholder="Ex: 100,00" />

        <MyButton @on-click="() => addGain()" type="green" title="Adicionar Ganho" />
    </Card>

    <Card>
        <p class="title">Adicionar despesa</p>
        <Input @on-input="(value) => { debitNameToAdd = value }" title="Nome:" placeholder="Ex: Aluguel"/>
        <Input :is-money="true" @on-input="(value) =>  debitValueToAdd = value" title="Valor:" placeholder="Ex: -800,00" />

        <MyButton @on-click="() => debitGain()" type="red" title="Debitar" />
    </Card>

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

    .arrow{
        width: 42px;
        height: 42px;
        fill: white;
    }

    .container-month{
        display: flex;
        justify-content: space-between;
    }

    .container-amount{
        display: flex;
        flex-direction: column;
    }

    .title{
        font-weight: bolder;
        font-size: 24px;
        color: white;
    }

    .amount{
        font-size: 32px;
        color: white;
    }
</style>
