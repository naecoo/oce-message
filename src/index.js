import notify from './notify.js'
import Message from './Message.vue'

export { notify, Message }

let installed = false;
export default {
  install(Vue) {
    if (installed) return;
    installed = true;
    Vue.prototype.$notify = notify
    Vue.component('oce-message', Message)
  }
}