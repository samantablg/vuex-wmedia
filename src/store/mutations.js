export const mutations = {
    comprarProducto: (state, indice) => state.carro.unshift(state.productos[indice]),
    quitarProducto: (state, indice) => state.carro.splice(indice, 1),
    nuevoProducto: (state, producto) => state.productos.unshift(producto)
}
