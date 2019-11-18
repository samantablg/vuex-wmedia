// este será el almacén centralizado
import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex); // activa la propiedad store en la instacia principal, ver main.js (componente #app padre de la aplicación)

export const store = new Vuex.Store({
    state: {
        productos: [
            { nombre: 'Steam Link', precio: 50 },
            { nombre: 'Steam Controller', precio: 30 },
            { nombre: 'Axiom Verge', precio: 17 }
        ],
        carro: []
    },
    getters: {
        totalCompra: (state) => state.carro.reduce((total, producto) => total + producto.precio, 0)
    },
    mutations: {
        nuevoProducto: (state, producto) => state.productos.unshift(producto),
        comprarProducto: (state, indice) => state.carro.unshift(state.productos[indice]),
        quitarProducto: (state, indice) => state.carro.splice(indice, 1)
    }
});


/*
Las acciones son similares a las mutaciones. La diferencia radica en que las acciones no actúan directamente sobre el estado sino que le hablan a las
mutaciones, commit sobre una mutación, y la mutación finalmente modifica el estado. Además las acciones pueden contener operaciones asíncronas,
mientras que las mutaciones no.

Para acciones asíncronas debe existir una conexión entre el estado y las mutaciones

*/
