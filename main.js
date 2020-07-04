import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;
//定义公共模块全局变量的值和函数
Vue.prototype.apiurl = "http://c.m.163.com/nc/article/headline/T1348649580692/0-40.html"

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
