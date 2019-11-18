<template>
  <contador></contador>
</template>

<!-- <contador :cantidad="cantidad"
            @aumentar="cantidad++"
            @reducir="cantidad--">
  </contador> -->

  <!-- data() {
    return {
      cantidad: 0
    }
  } -->

<script>
import Contador from "./components/Contador.vue";
export default {
  components: { Contador },
}
</script>

<style>
</style>
