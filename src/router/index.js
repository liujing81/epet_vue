import Vue from 'vue'
import VueRouter  from 'vue-router'

/*import Classify from '../pages/Classify/Classify.vue'
import Home from '../pages/Home/Home.vue'
import Profile from '../pages/Profile/Profile.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Type from '../pages/Classify/Type/Type.vue'
import Brand from '../pages/Classify/Brand/Brand.vue'
import AllBrand from '../pages/AllBrand/AllBrand.vue'*/

const Classify =()=>import('../pages/Classify/Classify.vue')
const Type =()=>import('../pages/Classify/Type/Type.vue')
const Brand =()=>import('../pages/Classify/Brand/Brand.vue')
const Home =()=>import('../pages/Home/Home.vue')
const Profile =()=>import('../pages/Profile/Profile.vue')
const ShopCart =()=>import('../pages/ShopCart/ShopCart.vue')
const AllBrand =()=>import('../pages/AllBrand/AllBrand.vue')


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
      children:[
        {
          path: '',
          redirect: '/classify/type'
        },
        {
          path: '/classify/type',
          component: Type,
        },
        {
          path: '/classify/brand',
          component: Brand,
        },
      ]
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/shopCart',
      component: ShopCart,
    },
    {
      path: '/allbrand',
      component: AllBrand,
    }
  ]
})
