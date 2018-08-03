import Api from '@/services/Api'

export default {
  showOptions (id) {
    console.log(id)
    return Api().get(`/api/events/${id}/options`)
  },
  postOptions (id, options) {
    return Api().post(`/api/events/${id}/options`, options)
  },
  putOption (id, opId) {
    return Api().put(`/api/events/${id}/options/${opId}`)
  }
}
