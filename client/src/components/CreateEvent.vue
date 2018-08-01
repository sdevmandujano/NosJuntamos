<template>
  <h1>CreateEvent</h1>
  <!-- Page to create an event, should include a POST to the API -->
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
        Time2:null,
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
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.event)
        .every(key => !!this.event[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }

      try {
        await EventService.post(this.event)
        this.$router.push({
          name: 'event'
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
