import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        counterNum: 0
    },
    mutations: {
        UPDATE_COUNTER_NUM(state, payload) {
            state.counterNum = payload
        }
    },
    actions: {
        updateCounterNum({commit}, payload){
            commit("UPDATE_COUNTER_NUM", payload)
        }
    }
})

window._store_ = store

export default store;