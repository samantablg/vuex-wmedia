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
    },
    actions: {
        aumentar(context) {
            context.commit('aumentar')
        }
    }
});


/*
Las acciones son similares a las mutaciones. La diferencia radica en que las acciones no actúan directamente sobre el estado sino que le hablan a las
mutaciones, commit sobre una mutación, y la mutación finalmente modifica el estado. Además las acciones pueden contener operaciones asíncronas,
mientras que las mutaciones no.

Para acciones asíncronas debe existir una conexión entre el estado y las mutaciones

*/
