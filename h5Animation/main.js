import Vue from 'vue'
import App from './App'
// import  from '@/common/pc.js'




Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
