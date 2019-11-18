// este será el almacén centralizado
import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex); // activa la propiedad store en la instacia principal, ver main.js (componente #app padre de la aplicación)

export const store = new Vuex.Store({
    state: {
        nombre: 'Samanta',
        apellido: 'Lara',
        profesion: 'developer',
        ciudad: 'Tenerife'
    }
});