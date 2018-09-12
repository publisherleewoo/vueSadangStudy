import Vue from 'vue';
import VueRouter from 'vue-router';
import TodoDetail from '../components/TodoDetail/TodoDetail.vue'
import TodoIndex from '../components/TodoIndex.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
      path: '/',
      name: 'TodoIndex',
      component: TodoIndex
    },
    {
      path: '/TodoDetail',
      name: 'TodoDetail',
      component: TodoDetail
    }
  ]
})

export default router
