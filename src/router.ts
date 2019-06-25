import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import GroceryDetail from '@/components/GroceryDetail.vue'; // @ is an alias to /src
import GroceryVisits from '@/components/GroceryVisits.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/visits',
      name: 'visits',
      component: GroceryVisits,
    },
    {
      path: '/visit/:visitId',
      name: 'visit',
      component: GroceryDetail,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
