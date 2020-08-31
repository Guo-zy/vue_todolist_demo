import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const ToDo = () => import('views/todo/ToDo');
const Finshed = () => import('views/finished/Finished');

const routes = [
  {
    path: '/',
    redirect: '/ToDo',
  },
  {
    path: '/ToDo',
    component: ToDo,
  },
  {
    path: '/Finished',
    component: Finshed,
  },
];

export default new Router({
  routes,
  mode: 'history',
});
