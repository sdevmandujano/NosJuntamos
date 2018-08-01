<template>
  <v-layout>
    <h1>Create Event</h1>
    <v-flex xs4>
      <panel title="event Metadata">

        <v-text-field
          label="Description"
          required
          :rules="[required]"
          v-model="event.description"
        ></v-text-field>

        <v-text-field
          label="Invites"
          required
          :rules="[required]"
          v-model="event.invite"
        ></v-text-field>

        <v-text-field
          label="Date1"
          required
          :rules="[required]"
          v-model="event.Date1"
        ></v-text-field>

        <v-text-field
          label="Location1"
          required
          :rules="[required]"
          v-model="event.Location1"
        ></v-text-field>

        <v-text-field
          label="Time1"
          required
          :rules="[required]"
          v-model="event.Time1"
        ></v-text-field>
       
        <v-btn
          dark
          class="cyan"
          @click="create">
          Create event
        </v-btn>
      
        </panel>
      </v-flex> 
    </v-layout>
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
        this.$router.push({
          name: 'events'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
