/* eslint-disable */ 
import Vue from 'vue';
import Router from 'vue-router';
import blank1 from '@/components/blank';
import HelloLSQ from '@/components/HelloLSQ';
import validate from '@/components/validate';
import validate2 from '@/components/validate2';

Vue.use(Router); // 告诉vue使用vue-router
export default new Router({
  routes: [{
    path: '/blank',
    name: 'blank1',
    component: blank1
  },
  {
    path: '/test',
    name: 'Helloworld2',
    component: HelloLSQ
  },
  {
    path: '/validate',
    name: 'validate',
    component: validate
  },
  {
    path: '/validate2',
    name: 'validate2',
    component: validate2
  }
  ]
});
