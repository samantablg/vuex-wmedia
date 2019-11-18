<template>
<section>
  <h2>Carro</h2>
  <h3>Total compra: {{ totalCompra.toFixed(2) }} €</h3>
  <ul>
    <li v-for="(producto, indice) in carro" v-bind:key="producto" v-bind:type="indice">
      {{ producto.nombre }}
      <button @click="quitarProducto(indice)">X</button>
    </li>
  </ul>
</section>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapState(['carro']),
      ...mapGetters(['totalCompra'])
    },
    methods: mapMutations(['quitarProducto'])
  }
</script>
