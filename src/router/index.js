import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Home from '../components/home.vue'
import Meetups from '../components/meetup/meetups.vue'
import CreateMeetup from '../components/meetup/createmeetup.vue'
import Profile from '../components/user/profile.vue'
import Signin from '../components/user/signin.vue'
import Signup from '../components/user/signup.vue'
import Meetup from '../components/meetup/meetup.vue'
//  import Meetups from '../components/meetup/meetups.vue'
/*
import Createmeetup from '../components/meetup/createmeetup.vue'
import Profile from '../components/user/profile.vue'
import Signin from '../components/user/signin.vue'
import Signup from '../components/user/signup.vue'
*/

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/meetups',
    name: 'Meetups',
    component: Meetups
  },
  {
    path: '/meetup/new',
    name: 'CreateMeetup',
    component: CreateMeetup
  },
  {
    path: '/meetups/:id',
    name: 'Meetup',
    component: Meetup
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
  // mode: history
})

export default router
