<template>
  <v-layout>
    <h1>Create Event</h1>
    <v-flex xs4>
      <panel title="event Metadata">

        <input label="Description" v-model="event.description">

        <input label="Invites" v-model="event.invite">

        <input
          label="Date1"
          required
          :rules="[required]"
          v-model="event.Date1"
        >

        <input
          label="Location1"
          required
          :rules="[required]"
          v-model="event.Location1"
        >

        <input
          label="Time1"
          required
          :rules="[required]"
          v-model="event.Time1"
        >
        <button
          class="cyan"
          @click="create">
          Create event
        </button>
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
