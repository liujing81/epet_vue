import Vue from 'vue'
import VueRouter  from 'vue-router'

import Classify from '../pages/Classify/Classify.vue'
import Home from '../pages/Home/Home.vue'
import Profile from '../pages/Profile/Profile.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/profile',
      component: Profile,
    },
    {
      path: '/classify',
      component: Classify,
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/shopCart',
      component: ShopCart,
    },
  ]
})
