import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from "vue-router"
import totenergy from './components/totenergy'
import crudeoil from './components/crudeoil'
import electricity from './components/electricity'
import renewables from './components/renewables';
import totEnergyTrade from './components/totEnergyTrade';


Vue.use(VueRouter)
Vue.use(BootstrapVue);

Vue.config.productionTip = false

const routes = [
  { path: "/", redirect: 'total-energy' },
  {
    path: "/total-energy", component: totenergy, children: [
      { path: "production", component: totenergy }
    ]
  },
  { path: "/total-energy/trade", component: totEnergyTrade },
  { path: "/crude-oil", component: crudeoil },
  { path: "/electricity", component: electricity },
  { path: "/renewables", component: renewables }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
