©
<template>
  <!-- Create Event Section -->
    <section id="createEvent">
     <div class="container">
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <h2>Crea Tu Evento</h2>
                    <form>
                        <div class="form-group">
                            <label for="labeldescripcion">Descripcion:</label>
                            <input type="name" class="form-control" id="descripcion" placeholder="Describe el evento a realizar" required>
                        </div>
                        <div class="card m-3" v-for="(row, index) in rows" :key=index>
                          <div class="card-header">Fecha Propuesta {{index+1}} </div>
                          <div class="card-body">
                            <div class="form-group">
                                <label for="labelfecha">Fecha:</label>
                                <datepicker class="form-control" v-model="row.fecha" :value="date"></datepicker>
                            </div>
                            <div class="form-group">
                                <label for="labelhora">Hora:</label>
                                <input type="hora" class="form-control" v-model="row.hora" placeholder="Hora propuesta para el evento" required>
                            </div>
                            <div class="form-group">
                                <label for="labelLugar">Lugar:</label>
                                <input type="lugar" class="form-control" v-model="row.lugar" placeholder="¿Donde va a ser?" required>
                            </div>
                            <button class ="btn btn-primary" @click=removePlace(index)>Eliminar fecha</button>
                          </div>
                        </div>
                         <div class="">
                            <button class ="btn btn-primary" @click=addPlace>Agregar fecha</button>
                            <button class="btn btn-primary" @click=create>Submit</button>
                          </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import EventsService from '@/services/EventsService'
import Datepicker from 'vuejs-datepicker'
import Vue from 'vue'
Vue.use(Datepicker)

export default {

  data () {
    return {
      date: new Date(2016, 9, 18),
      rows: [],
      event: {
        description: 'hola',
        invites: 0,
        rows: [
        ]
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  components: {
    Datepicker
  },
  methods: {
    async create () {
      this.error = null
      this.event.rows = this.rows
      try {
        await EventsService.post(this.event)
      } catch (err) {
        console.log(err)
      }
    },
    addPlace: function () {
      this.rows.push({
        fecha: ' ',
        hora: ' ',
        lugar: ' '
      })
    },
    removePlace: function (index) {
      this.rows.splice(index, 1)
    }
  }
}
</script>

<style>
datepicker{
  width:100%;
  margin:0;
}
section {
  padding: 3rem 0;
}

section h2 {
  font-size: 2.25rem;
  line-height: 2rem;
}

@media (min-width: 992px) {
  section h2 {
    font-size: 3rem;
    line-height: 2.5rem;
  }
}

form .row:first-child .floating-label-form-group {
  border-top: 5px solid #e9ecef;
}
</style>
