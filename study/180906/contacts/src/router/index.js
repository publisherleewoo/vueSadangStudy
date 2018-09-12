import Vue from 'vue'
import VueRouter from 'vue-router'
import A from '../components/A.vue'
import B from '../components/B.vue'
import contactsList from '../components/contactsList.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
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
      name: "contactsList",
      path: '/contactsList',
      component: contactsList
    },
  ]
})

export default router
