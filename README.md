### install

```javascript
yarn install oce-message
// 或者
npm install oce-message --save

```

```javascript
// main.js
import Vue from 'vue'
import msgPlugin from 'oce-message'

Vue.use(msgPlugin)

```



### usage

组件有两种用法，分别是声明式和命令式

1. 声明式

   ```javascript
   <oce-message message="这是一条消息提示" type="success" />
   ```

   

2. 命令式

   ```javascript
   // 装插件后，方法已经挂载在Vue实例上，可以全局访问
   
   // 最简单的用法
   vm.notify('这是一条消息提示')
   
   // 更多配置
   vm.notify({
     message: '这是一条消息提示'，
     type: 'success',
     showCloseButton: true
   })
   
   // notify方法返回了一个手动销毁的组件方法
   const close = vm.notify(...)
   close()
   ```



### options

|      参数       | 说明                                  |  类型   |                            可选值                            |   默认值   |
| :-------------: | ------------------------------------- | :-----: | :----------------------------------------------------------: | :--------: |
|     message     | 消息文字                              | String  |                              —                               |     —      |
|      type       | 主题                                  | String  |                 normal/success/warning/error                 |   normal   |
|    location     | 消息出现的位置                        | String  | top-center/top-right/top-left/bottom-center/bottom-right/bottom-left | top-center |
|    className    | 自定义类名                            | String  |                              —                               |     —      |
|    duration     | 显示时间, 毫秒。设为 0 则不会自动关闭 | Number  |                              —                               |    2000    |
| showCloseButton | 是否显示关闭按钮                      | Boolean |                              —                               |   false    |

