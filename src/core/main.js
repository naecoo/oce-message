import Vue from 'vue'
import Message from './Message.vue'

const messageConstructor = Vue.extend(Message)
let count = 1

const notify = (options = {}) => {
  // 如果Vue运行在服务端，放弃调用
  if (Vue.prototype.$isServer) {
    return
  }
  
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }

  // 创造实例
  const instance = new messageConstructor({
    propsData: options
  })

  // 渲染并挂载到body上
  const vm = instance.$mount()
  document.body.appendChild(vm.$el)
  vm.$el.style.zIndex = count

  // 返回一个主动关闭的方法
  const close = () => {
    vm.closed = true
  }
  return close
}

export default notify