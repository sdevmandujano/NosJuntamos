<template>
    <section id="Evento">
        <!-- Title -->

          <div class="container">
            <div class="row mb-3">
              <div class="col-lg-8 mx-auto">
                    <h2>Evento</h2>
                    <h5>Descripcion</h5>
                  </div>
            </div>

         <!-- Event  -->
          <div class="row mb-5">
            <div class="col-sm-4">
              <div class="card text-white bg-dark">
                <div class="card-body">
                  <h5 class="card-title">Fecha 1</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">Vota!</a>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card text-white bg-dark">
                <div class="card-body">
                  <h5 class="card-title">Fecha 2</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">Vota!</a>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card text-white bg-dark">
                <div class="card-body">
                  <h5 class="card-title">Fecha 3</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">Vota!</a>
                </div>
              </div>
            </div>
          </div>

      </div>
      <div class="card col-10 mx-auto">
        <div class="card-header">Resultados</div>
        <bars
          :height="300"
          :data="[ 2, 5, 9,]"
          :gradient="['#6fa8dc', '#42b983']"
          :barWidth="50"
          :growDuration="5">
        </bars>
      </div>
    </section>
</template>

<script>
import Vue from 'vue'
import bars from 'vuebars'
Vue.use(bars)

export default {
  name: 'GetEvent',
  data () {
    return {
      event
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
section {
  padding: 3rem 0;
}
</style>
