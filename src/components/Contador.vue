<template>
  <section>
    <h1>Cantidad: {{ cantidad }}</h1>
    <button @click="reducirAsync({cantidad: 15})">Reducir</button>
    <button @click="aumentarAsync(12)">Aumentar</button>
  </section>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';
  export default {
    computed: mapState(['cantidad']),
    methods: mapActions(['aumentarAsync', 'reducirAsync'])
    /* methods: {
      aumentar() {
        // this.$store.state.cantidad++
        this.$store.commit('aumentar')
      },
      reducir() {
        // this.$store.state.cantidad--
        this.$store.commit('reducir')
      }
    } */
    /* methods: mapMutations(['aumentar', 'reducir']) */
    /* methods: {
      aumentar() {
        this.$store.dispatch('aumentarAsync')
      },
      reducir() {
        this.$store.dispatch('reducirAsync')
      }
    } */
  }
</script>

<style>
</style>
