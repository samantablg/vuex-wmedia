// este será el almacén centralizado
import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex); // activa la propiedad store en la instacia principal, ver main.js (componente #app padre de la aplicación)

export const store = new Vuex.Store({
    state: {
        tareas: [
            { nombre: 'Tarea 1', completado: false, id: 1 },
            { nombre: 'Tarea 2', completado: false, id: 2 },
            { nombre: 'Tarea 3', completado: false, id: 3 },
            { nombre: 'Tarea 4', completado: false, id: 4 },
            { nombre: 'Tarea 5', completado: false, id: 5 }
        ]
    },
    getters: {
        tareasCompletadas: (state) => state.tareas.filter((tarea) => tarea.completado).length
    }
});
