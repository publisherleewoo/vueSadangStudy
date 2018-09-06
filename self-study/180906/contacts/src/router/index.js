import Vue from 'vue'
import VueRouter from 'vue-router'
import A from '../components/A.vue'
import B from '../components/B.vue'
import C from '../components/C.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
      name: "A",
      path: '/A',
      component: A
    },
    {
      name: "B",
      path: '/B',
      component: B
    },
    {
      name: "C",
      path: '/C',
      component: C
    },

  ]
})

export default router
