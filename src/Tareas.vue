<template>
  <main>
    <tareas-restantes></tareas-restantes>
    <ul>
      <li v-for='tarea in tareas' v-bind:key="tarea.id" @click="tarea.completado=!tarea.completado">{{ tarea.nombre }}</li>
    </ul>
  </main>
</template>

<!--Aunque lo tentador sea hacer operaciones y cálculos sobre las propiedades alojadas en el store centralizado de Vuex,
lo mejor es utilizar getters, que son como computed properties para Vuex. -->

<script>
  import TareasRestantes from './components/TareasRestantes.vue';
  import { mapState } from 'vuex';
  export default {
    components: { TareasRestantes },
    computed: mapState(['tareas'])
  }
</script>

<style>
  ul li {
    cursor: pointer;
  }
</style>
