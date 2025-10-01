import { createMemoryHistory, createRouter } from "vue-router";

import Home from './view/Home.vue'
import Details from './view/Details.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/details', component: Details}
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})