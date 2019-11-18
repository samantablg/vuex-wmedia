<template>
  <section>
    <h1>Nuevo producto</h1>
    <form @submit.prevent="insertar"> <!-- .prevent para que no se recargue la página -->
      <input type="text" placeholder="Nombre" v-model="nombre" required>
      <input type="text" placeholder="Precio" v-model="precio" required>
      <input type="submit" value="Insertar">
    </form>
    <hr>
    <ul>
      <li v-for="(producto, indice) in productos.productos" v-bind:key="indice">
        {{ producto.nombre }} - {{ producto.precio.toFixed(2) + '€' }}
        <button @click="comprarProducto(indice)">+</button>
      </li>
    </ul>
  </section>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';
  export default {
    data() {
      return {
        nombre: '',
        precio: 0
      }
    },
    computed: {
      ...mapState(['productos'])
    },
    methods: {
      ...mapMutations(['comprarProducto']), // ... para poder añadir métodos locales
      insertar() {
        this.$store.commit('nuevoProducto', {
          nombre: this.nombre,
          precio: Number(this.precio) // ?
        });
        this.nombre = '',
        this.precio = 0
      }
    }
  }
</script>

<style>
</style>
