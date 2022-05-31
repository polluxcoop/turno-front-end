import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../views/MainPage.vue';
import Congratulations from '../views/Congratulations.vue';


Vue.use(VueRouter);

const routes = [
    {
       path: '/',
       name: 'MainPage',
       component: MainPage
    },

   {
    path: '/congratulations',
    name: 'Congratulations',
    component:Congratulations
   },
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
