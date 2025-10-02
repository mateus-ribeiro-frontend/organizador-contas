import { createStore } from 'vuex'

const home = {
    namespaced: true,
    state: {
        monthlyEarnings: 3000,
    },
    mutations:{
        setMonthlyEarnings(state, newValue){
            state.monthlyEarnings = newValue
        },
    },
    getters: {
        getMonthlyEarnings(state){
            return state.monthlyEarnings
        },
    },
    actions: {
        async addGain({ commit}, payload){
            commit('setMonthlyEarnings', payload)
        }
    }
}

const details = {
    namespaced: true,
    state: {
    },
    mutations:{
    },

}

export const store = createStore({
    state:{},
    mutations: {},
    actions:{},
    modules: { home, details }
})