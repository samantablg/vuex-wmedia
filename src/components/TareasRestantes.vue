<template>
  <h1>{{ tareasCompletadas }} tareas completadas.</h1>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    /* computed: {
       tareasCompletadas() {
        return this.$store.getters.tareasCompletadas;
      }
    } */
    computed: mapGetters(['tareasCompletadas'])
  }
</script>
