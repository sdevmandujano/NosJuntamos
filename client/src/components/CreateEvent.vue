
<template>
  <!-- Create Event Section -->
    <section id="createEvent">
     <div class="container">
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <h2>Crea Tu Evento</h2>
                    <form>
                      <div class="form-group">
                            <label for="labeldescripcion">Nombre:</label>
                            <input type="name" class="form-control" v-model="event.name" placeholder="Nombre del evento" required>
                        </div>
                        <div class="form-group">
                            <label for="labeldescripcion">Descripcion:</label>
                            <input type="name" class="form-control" v-model="event.description" placeholder="Describe el evento a realizar" required>
                        </div>
                        <div class="card m-3" v-for="(row, index) in rows" :key=index>
                          <div class="card-header">Fecha Propuesta {{index+1}} </div>
                          <div class="card-body">
                            <div class="form-group">
                                <label for="labelfecha">Fecha:</label>
                                <datepicker class="form-control" v-model="rows[index].fecha"  :rules="[required]" required></datepicker>
                            </div>
                            <div class="form-group">
                                <label for="labelhora">Hora:</label>
                                <datetime class="form-control" format="H:i:s"  name='dob'></datetime>
                            </div>
                            <div class="form-group">
                                <label for="labelLugar">Lugar:</label>
                                <input type="lugar" class="form-control" v-model="rows[index].lugar" :rules="[required]" required>
                            </div>
                            <button class ="btn btn-primary" @click=removePlace(index)>Eliminar fecha</button>
                          </div>
                        </div>
                         <div class="">
                            <button class ="btn btn-primary" @click.prevent=addPlace>Agregar fecha</button>
                            <button class="btn btn-primary" @click=create>Submit</button>
                            <div>{{rows}}</div>
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
import datetime from 'vuejs-datetimepicker'
import Vue from 'vue'
Vue.use(Datepicker)
Vue.use(datetime)

export default {

  data () {
    return {
      date: new Date(2016, 9, 18),
      rows: [],
      event: {
        name: null,
        description: null,
        rows: []
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  components: {
    Datepicker,
    datetime
  },
  methods: {
    async create () {
      console.log(this.rows.toString())
      this.error = null
      this.event.rows = this.rows

      if (this.rows.length !== 0) {
        const areAllFieldsFilledIn = Object
          .keys(this.rows)
          .every(key => !!this.rows[key])
        if (!areAllFieldsFilledIn) {
          this.error = 'Please fill in all the required fields.'
          return
        }
      }
      try {
        var eventid = (await EventsService.post(this.event)).data.id
        this.$router.push({name: 'GetEvent', params: { id: eventid }})
      } catch (err) {
        console.log(err)
      }
    },
    addPlace: function () {
      this.rows.push({
        fecha: null,
        hora: null,
        lugar: null
      })
    },
    removePlace: function (index) {
      this.rows.splice(index, 1)
    },
    getLatlog: function () {
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
