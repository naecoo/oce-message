import notify from './notify.js'
import Message from './Message.vue'

export { notify, Message }

export default {
  install (Vue) {
    Vue.prototype.notify = notify
    Vue.component('oce-message', Message)
  }
}