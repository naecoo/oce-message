import OceMessage from './src/index';
import Vue from 'vue';

Vue.use(OceMessage);

const app = new Vue({
  mounted() {
    this.$notify('ss');
  }
}).$mount('#app');