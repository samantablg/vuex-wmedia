// este será el almacén centralizado
import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex); // activa la propiedad store en la instacia principal, ver main.js (componente #app padre de la aplicación)

export const store = new Vuex.Store({
    state: {
        cantidad: 0
    },
    mutations: {
        aumentar: (state) => state.cantidad++,
        reducir: (state) => state.cantidad--
    }
});
