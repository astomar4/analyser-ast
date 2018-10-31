import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from "vue-router"
import totenergy from './components/totenergy'
import naturalgas from './components/naturalgas'
import coal from './components/coal'
import oilproducts from './components/oilproducts'
import crudeoil from './components/crudeoil'
import electricity from './components/electricity'
import renewables from './components/renewables';
import totEnergyTrade from './components/totEnergyTrade';
import 'mdbootstrap/css/bootstrap.css'


Vue.use(VueRouter)
Vue.use(BootstrapVue);

Vue.config.productionTip = false

const routes = [
  { path: "/", redirect: 'total-energy' },
  { path: "/total-energy", component: totenergy },
  { path: "/total-energy/trade", component: totEnergyTrade },
  { path: "/crude-oil", component: crudeoil },
  { path: "/electricity", component: electricity },
  { path: "/renewables", component: renewables },
  { path: "/coal", component : coal},
  {path: "/natural-gas", component: naturalgas},
  {path: "/oil-products", component: oilproducts}
];

const router = new VueRouter({
  routes,
});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
