<template>
<section>
  <h2>Carro</h2>
  <h3>Total compra: {{ totalCompra }} €</h3>
  <ul>
    <li v-for="(producto, indice) in carro" v-bind:key="indice">
      {{ producto.nombre }}
      <button @click="quitarProducto(indice)">X</button>
    </li>
  </ul>
</section>
</template>
<!-- {{ totalCompra.toFixed(2) }} -->
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
