// este será el almacén centralizado
import Vue from 'vue';
import Vuex from 'vuex'
import productos from './modules/productos';
import carro from './modules/carro';
import { getters } from './getters';
import { mutations } from './mutations';
Vue.use(Vuex); // activa la propiedad store en la instacia principal, ver main.js (componente #app padre de la aplicación)

export const store = new Vuex.Store({
    modules: {
        productos, // no es necesario hacer productos: productos porque valor y atibuto coinciden
        carro
    },
    getters: getters,
    mutations: mutations
});
