import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('events', {
      params: {
        id: search
      }
    })
  },
  show (id) {
    return Api().get('/apì/getevent', {params: {id: id}})
  },
  post (event) {
    return Api().post('/api/event', event)
  },
  put (song) {
    return Api().put(`/api/event/${event.id}`, event)
  }
}
