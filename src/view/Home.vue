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

let gainNameToAdd = ''
let gainValueToAdd = ''

const addGain = () => {
    /*to-do*/
    //const valueSum = earnings.value + newValueFloat
    //store.dispatch('home/addGain', valueSum)
}



</script>

<template>
  <div class="body">
    <Header />

    <Card>
        <div class="container-month">
            <div class="container-amount">
                <p class="title">Ganhos mensal</p>
                <p class="amount">{{earnings}}</p>
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
        <Input @on-input="(value) => {/*to-do*/}" title="Nome:" placeholder="Ex: Aluguel"/>
        <Input :is-money="true" @on-input="(value) => {/*to-do*/}" title="Valor:" placeholder="Ex: -800,00" />

        <MyButton @on-click="() => {/*to-do*/}" type="red" title="Debitar" />
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
