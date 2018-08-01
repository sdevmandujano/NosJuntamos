<template>
  <!-- Contact Section -->
    <section id="createEvent">
     <div class="container">
            <div class="row">
                <div class="col-lg-8 mx-auto transbox">
                    <h2>Crea Tu Evento</h2>
                    <form>
                        <div class="form-group">
                            <label for="labeldescripcion">Descripcion:</label>
                            <input type="name" class="form-control" id="descripcion" placeholder="Describe el evento a realizar" required>
                        </div>
                        <div class="card">
                          <div class="card-header">Fecha Propuesta </div>
                          <div class="card-body">
                            <div class="form-group">
                                <label for="labelfecha">Fecha:</label>
                                <input type="fecha" class="form-control" id="fecha1" placeholder="Fecha propuesta para el event" required>
                                
                            </div>
                            <div class="form-group">
                                <label for="labelhora">Hora:</label>
                                <input type="hora" class="form-control" id="hora1" placeholder="Hora propuesta para el event" required>
                            </div>
                            <div class="form-group">
                                <label for="labelLugar">Lugar:</label>
                                <input type="lugar" class="form-control" id="form-subject" placeholder="Donde va a ser" required>
                            </div>
                
                          </div>
                        </div>
                         <div class="">   
                            <button type="submit" class="btn btn-primary" @click=add>Agregar otra fecha</button>
                            <button type="submit" class="btn btn-primary" @click=create>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
import EventsService from '@/services/EventsService'

export default {
  data () {
    return {
      event: {
        description: null,
        invites: 0,
        Date1: null,
        Location1: null,
        Time1: null,
        Date2: null,
        Location2: null,
        Time2: null,
        Date3: null,
        Location3: null,
        Time3: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      /*
      this.error = null
       const areAllFieldsFilledIn = Object
      .keys(this.event)
      .every(key => !!this.event[key])
      if (!areAllFieldsFilledIn) {
      this.error = 'Please fill in all the required fields.'
      return
      }
      */
      try {
        await EventsService.post(this.event)
    
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->



<style>
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
