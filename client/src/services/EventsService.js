import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('events', {
      params: {
        search: search
      }
    })
  },
  show (event) {
    return Api().get(`/api/event`)
  },
  post (event) {
    console.log('sending post')
    return Api().post('/api/event', event)
  },
  put (song) {
    return Api().put(`/api/event/${event.id}`, event)
  }
}
