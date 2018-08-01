<template>
  <!-- Index for main info, login? and the createEvent button -->
  <div class="container">
    <div class="row fixed-height">

    </div>
    <div class="align-middle">
      <div class="row">
        <img class="mx-auto" src="../assets/300x300.png" alt="Logo Placeholder">
      </div>
      <div class="row">
        <p class="">Nos Juntamos es una aplicación que nace de la necesidad de organizar un grupo grande de personas con distintas disponibilidades de tiempo. </p>
        <p>Nuestra aplicación te permite enviarle un enlace a tus amigos con hasta 4 opciones de días y lugares, para que puedan votar, y así decidir dónde y cuándo juntarse!</p>
        <p>Entonces... nos juntamos?</p>
      </div>
    </div>
    <div class="row">
      <button type="button" class="btn btn-primary btn-lg mx-auto" @click="createEvent">Crea un evento (gratis!)</button>
    </div>
    <div class="row fixed-height">
      
    </div>
  </div>
  
  
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {

    }
  },
  methods: {
    createEvent() {
      this.$router.push('event')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.fixed-height {
  height: 10vh;
}

</style>
