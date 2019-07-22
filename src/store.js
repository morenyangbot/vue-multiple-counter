import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        counterNum: 0,
        list: []
    },
    mutations: {
        UPDATE_COUNTER_NUM(state, payload) {
            state.counterNum = payload
        },
        RESET_LIST(state, count){
            state.list = new Array(parseInt(count))
            .fill(0)
            .map(() => ({ value: 0 }));
        },
        UPDATE_LIST(state, {index, value}){
            state.list[index].value = value;
        }
    },
    actions: {
        updateCounterNum({commit}, payload){
            commit("UPDATE_COUNTER_NUM", payload)
            commit("RESET_LIST", payload)
        },
        updateList({commit}, payload) {
            commit('UPDATE_LIST', payload)
        }
    },
    getters: {
        sum(state) {
            return state.list.map(i => i.value).reduce((a, b) => a + b, 0);
        }
    }
})

window._store_ = store

export default store;