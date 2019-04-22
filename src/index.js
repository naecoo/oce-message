import a from './core/main.js'
import b from './core/Message.vue'

export const notify = a
export const Message = b

class Plugin {
  static install (Vue) {
    Vue.prototype.notify = notify
    Vue.mixin({
      components: {
        'oce-message': Message
      }
    })
  }
}
export default Plugin