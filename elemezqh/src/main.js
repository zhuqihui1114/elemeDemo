import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';

import './common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

//配置路由路径
const routes = [
  {
    path:'/goods',
    component:goods
  },
  {
    path:'/ratings',
    component:ratings
  },
  {
    path:'/seller',
    component:seller
  },
  {path:'*', redirect:'/goods'}, //404
  {path:'/', redirect:'/seller'} //404
];

const router=new VueRouter({
  routes: routes //key 必须是routes
});


new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
