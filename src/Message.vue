<template>
  <transition name="msg-fade" @after-leave="afterLeave">
    <div v-show="visible" class="msg-container" role="alert" :class="classes"  @mouseenter="clearTimer" @mouseleave="startTimer">
      <span>{{ message }}</span>
      <i class="msg-icon-wrapper" v-if="showCloseButton" @click="close">
        <img class="msg-icon" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTU1ODI4NjQwMTgzIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE5ODciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU4My4xNjggNTIzLjc3Nkw5NTguNDY0IDE0OC40OGMxOC45NDQtMTguOTQ0IDE4Ljk0NC01MC4xNzYgMC02OS4xMmwtMi4wNDgtMi4wNDhjLTE4Ljk0NC0xOC45NDQtNTAuMTc2LTE4Ljk0NC02OS4xMiAwTDUxMiA0NTMuMTIgMTM2LjcwNCA3Ny4zMTJjLTE4Ljk0NC0xOC45NDQtNTAuMTc2LTE4Ljk0NC02OS4xMiAwbC0yLjA0OCAyLjA0OGMtMTkuNDU2IDE4Ljk0NC0xOS40NTYgNTAuMTc2IDAgNjkuMTJsMzc1LjI5NiAzNzUuMjk2TDY1LjUzNiA4OTkuMDcyYy0xOC45NDQgMTguOTQ0LTE4Ljk0NCA1MC4xNzYgMCA2OS4xMmwyLjA0OCAyLjA0OGMxOC45NDQgMTguOTQ0IDUwLjE3NiAxOC45NDQgNjkuMTIgMEw1MTIgNTk0Ljk0NCA4ODcuMjk2IDk3MC4yNGMxOC45NDQgMTguOTQ0IDUwLjE3NiAxOC45NDQgNjkuMTIgMGwyLjA0OC0yLjA0OGMxOC45NDQtMTguOTQ0IDE4Ljk0NC01MC4xNzYgMC02OS4xMkw1ODMuMTY4IDUyMy43NzZ6IiBwLWlkPSIxOTg4IiBmaWxsPSIjZTZlNmU2Ij48L3BhdGg+PC9zdmc+" alt="close-icon" />
      </i>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Message',
  props: {
    // 要显示的消息
    message: {
      type: String,
      require: true
    },
    // 主题
    type: {
      type: String,
      default: 'normal',
      validator (t) {
        const types = ['normal', 'success', 'error', 'warning']
        return types.some(v => v === t)
      }
    },
    // 是否显示关闭按钮
    showCloseButton: {
      type: Boolean,
      default: false
    },
    // 组件出现的位置
    location: {
      type: String,
      default: 'top-center',
      validator (l) {
        const places = ['top-center', 'top-right', 'top-left', 'bottom-center', 'bottom-right', 'bottom-left']
        return places.some(v => v === l)
      }
    },
    // 自定义样式名
    className: {
      type: String,
      default: ''
    },
    // 持续时间
    duration: {
      type: Number,
      default: 2000
    }
  },
  data () {
    return {
      visible: false,
      closed: false,
      timer: null
    }
  },
  computed: {
    classes() {
      return [
        {
          'msg-icon-padding': this.showCloseButton
        }, 
        `msg-${this.type}`,
        `msg-${this.location}`,
        this.className
      ];
    }
  },
  watch: {
    closed (newVal) {
      if (newVal) {
        this.visible = false
      }
    }
  },
  methods: {
    close () {
      this.closed = true
    },
    afterLeave () {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
    clearTimer () {
      clearTimeout(this.timer)
    },
    startTimer () {
      const timeout = this.duration
      if (timeout > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, timeout);
      }
    }
  },
  mounted () {
    this.startTimer()
    this.visible = true
  },
  beforeDestroy () {
    this.clearTimer()
  }
}
</script>

<style scoped>
.msg-container{
  display: flex;
  position: fixed;
  padding: 7px 15px;
  box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);
  user-select: none;
  border-radius: 3px;
  font-size: 12px;
  line-height: 1.5;
  color: #fff;
}
.msg-top-center{
  left: 50%;
  top: 10px;
  transform: translateX(-50%);
}
.msg-top-right{
  top: 5vh;
  right: 3vw;
}
.msg-top-left{
  top: 5vh;
  left: 3vw;
}
.msg-bottom-center{
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
}
.msg-bottom-right{
  bottom: 5vh;
  right: 3vw;
}
.msg-bottom-left{
  bottom: 5vh;
  left: 3vw;
}
.msg-normal{
  background-color: #313131;
}
.msg-success{
  background-color: #43a047;
}
.msg-warning{
  background-color: #ffa000;
}
.msg-error{
  background-color: #d32f2f;
}
.msg-placeholder{
  height:120vh;
}
.msg-icon-wrapper{
  display: inline-block;
  margin-left: 20px;
  cursor: pointer;
}
.msg-icon-padding {
  /* 出现关闭按钮时候添加 */
  padding-right: 7px; 
}
.msg-icon{
  width:12px;
  vertical-align: -1px;
  transition: all 0.3s;
}
.msg-icon:hover{
  background-color: rgba(255,255,255, 0.1);
}
.msg-fade-enter-active, .msg-fade-leave-active {
  transition: opacity .7s ease-in-out;
}
.msg-fade-enter, .msg-fade-leave-to{
  opacity: 0
}
</style>