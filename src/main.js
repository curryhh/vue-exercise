import './assets/css/base.css';
import Vue from 'vue';
import App from './App.vue';
import "./mintConfig.js";

import VueRouter from "vue-router";
import routes from './routerConfig.js'
import store from "./store/index.js";
Vue.use(VueRouter);

import axios from "axios";
Vue.prototype.$ajax = axios;

import filters from "./filters";
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

const router=new VueRouter({
	mode: 'history', //切换路径模式，变成history模式
    scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
	routes
});

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})
