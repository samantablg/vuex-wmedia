<template>
  <section>
    <productos></productos>
    <carro></carro>
  </section>
</template>

<script>
  import Carro from './components/Carro.vue';
  import Productos from './components/Productos.vue';
  export default {
    components: { Carro, Productos },
  }
</script>

<style>
</style>
