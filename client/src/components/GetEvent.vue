<template>
    <section id="Evento">
        <!-- Title -->

          <div class="container mx-auto text-center">
            <div class="row mb-3">
              <div class="col-lg-8 mx-auto">
                    <h2>Evento: {{ name }} </h2>
                    <h5>Vínculo: <a class="text-left"> {{ url }}</a><vue-goodshare-facebook button_design="outline" has_icon title_social="Facebook"></vue-goodshare-facebook></h5>
                    <h5>Descripción: {{ description }} (id: {{ id }} ) </h5>
                  </div>
            </div>

         <!-- Event  -->
        <div class="text-left">Elige una opción</div>
          <div class="row mb-5 mx-auto">
            <div v-for="(option, index) in options" :key=index class="col-lg-4 col-md-4 col-10 mb-2 mx-auto ">
              <div class="card text-white bg-dark" >
                <div class="card-body">
                  <h5 class="card-title">Opción {{index + 1 }} </h5>
                   <!-- este primer span tiene que cambiar a un link a maps  -->
                  <p class="card-text">Total Votes: {{options[index].votes}}</p>
                  <p class="card-text">Lugar: {{options[index].place}}</p>
                  <p class="card-text">Fecha: {{options[index].date}}</p>
                  <p class="card-text">Hora: {{options[index].time}}</p>
                  <a @click.prevent=addVote(index) class="btn btn-primary">Vota!</a>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div class="card col-10 mx-auto">
        <div class="card-header">Resultados</div>
        <bars
          :height="300"
          :data="vdata"
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
import VueGoodshareFacebook from 'vue-goodshare/src/providers/Facebook.vue'
import EventsService from '@/services/EventsService'
import OptionsService from '@/services/OptionsService'

Vue.use(bars)

export default {
  name: 'GetEvent',
  data () {
    return {
      vdata: [],
      id: null,
      name: null,
      description: null,
      event,
      options: [],
      url: window.location.href
    }
  },
  components: {
    VueGoodshareFacebook
  },
  methods: {
    async addVote (index) {
      var success = (await OptionsService.putOption(this.id, this.options[index].id)).data[0]
      if (success === 1) {
        this.$router.push({name: 'votoexitoso'})
      }
    }
  },
  created () {
    this.id = this.$route.params.id
  },
  async mounted () {
    try {
      this.event = (await EventsService.show(this.id)).data
      this.description = this.event.description
      this.name = this.event.name

      // get the options
      this.options = (await OptionsService.showOptions(this.id)).data
      for (var i = 0; i < this.options.length; i++) {
        this.vdata.push(this.options[i].votes)
      }
    } catch (err) {
      console.log(err)
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
