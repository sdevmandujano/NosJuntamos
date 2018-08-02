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
    Api().post(`/api/event`, event).then(function (response) {
      console.log(response)
      return response
    })
  },
  put (song) {
    return Api().put(`/api/event/${event.id}`, event)
  }
}
