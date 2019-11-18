<template>
<h1> Hola me llamo {{ nombre }} {{ apellido }} y vivo en {{ ciudad }}</h1>
</template>

<script>
  import { mapState } from 'vuex';
export default {
  /* computed: mapState({
      nombre: (state) => state.nombre,
      apellido: (state) => state.apellido
  }) */
  computed: mapState(['nombre', 'apellido', 'ciudad']) // me trae esos atributos del state
}
</script>

<!--nombre: function(state) {
      return state.nombre
    }-->

<style>
</style>
