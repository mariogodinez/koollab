// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import store from './store.js'
import App from './App.vue'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Projects from './components/Projects.vue'
import Calendar from './components/Calendar.vue'
import AddProject from './components/AddProject.vue'
import Hours from './components/Hours.vue'
import Messages from './components/Messages.vue'

import VueRouter from 'vue-router'
import Vuesax from 'vuesax'




window.axios = require('axios')
window.Is = require('is_js')

// window.onbeforeunload = function(){
//   localStorage.removeItem('tokenKK')
// }

let prodApi = '---'
let domain = '---'
let devApi = null

window.apiUrl =  devApi

axios.defaults.baseURL = 'https://kollab-dac69.firebaseapp.com/api/'
axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.tokenKK;
// axios.defaults.timeout                         = 8000;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Content-Type'] = 'application/json'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
// axios.defaults.headers.common['Accept'] = 'application/json, text/plain, */*'
// axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


Vue.use(VueRouter)
Vue.use(Vuesax)


function scrollTop (to,from,next){
  let body = document.querySelector('body')
  let html = document.querySelector('html')
  body.scrollTop = 0
  html.scrollTop = 0
  next()
}


let routes = [
  {path: '/login', component: Login, beforeEnter:scrollTop},
  {path: '/inicio', component: Home, beforeEnter:scrollTop},
  {path: '/proyectos', component: Projects, beforeEnter:scrollTop},
  {path: '/agenda', component: Calendar, beforeEnter:scrollTop},
  {path: '/agregar-proyecto', component: AddProject, beforeEnter:scrollTop},
  {path: '/horarios', component: Hours, beforeEnter:scrollTop},
  {path: '/mensajes', component: Messages, beforeEnter:scrollTop},

]

let router = new VueRouter({
	routes,
	//mode: 'history',
	//history: true
})

let VueApp = new Vue({ 
  el: '#app',
  router,
  store,
  render: (h) => h(App),
  created(){

  }
})


