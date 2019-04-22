import a from './src/main.js'
import b from './src/Message.vue'

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