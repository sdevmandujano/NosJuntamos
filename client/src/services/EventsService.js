import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('events', {
      params: {
        search: search
      }
    })
  },
  show (songId) {
    return Api().get(`events/${event}`)
  },
  post (event) {
    return Api().post('events', event)
  },
  put (song) {
    return Api().put(`events/${event.id}`, event)
  }
}
