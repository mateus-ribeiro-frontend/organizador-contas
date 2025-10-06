<script setup>
import { ref, computed, reactive } from 'vue'

import Card from '../components/Card.vue'
import Overlay from '../components/overlay.vue'

import ChevronRight from '../assets/chevron-right.svg'
import Filter from '../assets/filter.svg'

defineProps({
})

const month = {
  month: 1,
  details_day: [
    { id: 3, name: 'Trabalho', value: 122.50, type: 'gain', day: 22 },
    { id: 5, name: 'Trabalho', value: 20, type: 'gain', day: 16 },
    { id: 1, name: 'Ração Lili', value: 79.99, type: 'debit', day: 22 },
    { id: 2, name: 'Trabalho', value: 100, type: 'gain', day: 18 },
    { id: 4, name: 'Trabalho', value: 20, type: 'gain', day: 16 },
  ]
}

let daysToShow = ref([])

const getSetDaysFilter = () => {
  const daysArrayNew = []
  for (const day of month.details_day) {
    if (!daysArrayNew.some(dayArrayNew => day.day === dayArrayNew.day)) {
      const dayTeste = {
        day: day.day,
        details: month.details_day.filter(element => element.day === day.day)
      }
      daysArrayNew.push(dayTeste)
    }

  }

  daysToShow = daysArrayNew.sort((daySort, nextDaySort) => daySort.day - nextDaySort.day)
}

getSetDaysFilter()

</script>

<template>
  <div class="body">
    <div class="button-return">
      <ChevronRight class="arrow" />
    </div>

    <div class="button-filter">
      <p>Filtrar</p>
      <Filter class="filter" />
    </div>

    <Card>
      <div class="container-month">
        <p class="subtitle">Ganhos Mensal</p>
        <p class="subtitle">Março</p>
        <p class="title">3.000,00</p>
      </div>
    </Card>

    <Card>
      <p class="subtitle">Histórico</p>

      <ul>
        <li class="list" v-for="detailsDay in daysToShow">
          <p class="subtitle day">dia {{ detailsDay.day }}</p>

          <div class="iten-list" v-for="detail in detailsDay.details">
            <template v-if="detail.type === 'debit'">
              <p class="normal-text debit">{{ detail.name }}</p>
              <p class="normal-text debit">-{{ detail.value }}</p>
            </template>

            <template v-if="detail.type === 'gain'">
              <p class="normal-text gain">{{ detail.name }}</p>
              <p class="normal-text gain">+{{ detail.value }}</p>
            </template>
          </div>

        </li>
      </ul>
    </Card>

    <Overlay>
      <template #body>
        <!-- to-do -->
      </template>

      <template #buttons>
        <!-- to-do -->
      </template>
    </Overlay>

  </div>
</template>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #1b1321;
  color: white;
  height: calc(100vh - 40px);
}

.button-return {
  padding: 8px;
  background-color: #110517;
  display: flex;
  width: fit-content;
  border-radius: 8px;
}

.arrow {
  transform: rotate(180deg);
  width: 42px;
  height: 42px;
  fill: white;
}

.button-filter {
  font-size: 24px;
  color: white;
  padding: 8px;
  gap: 8px;
  background-color: #110517;
  display: flex;
  width: fit-content;
  border-radius: 8px;
  align-items: center;
  align-self: self-end;
}

.filter {
  width: 28px;
  height: 28px;
  fill: white;
}

.container-month {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.title {
  font-size: 32px;
  font-weight: bold;
}

.subtitle {
  font-size: 24px;
  font-weight: bold;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.day {
  align-self: center;
  font-size: 18px;
}

.iten-list {
  display: flex;
  justify-content: space-between;
}

.normal-text {
  font-size: 18px;
}

.debit {
  color: #D72121;
}

.gain {
  color: #18920D;
}
</style>
