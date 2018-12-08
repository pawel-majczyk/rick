import Vue from 'vue'
import Router from 'vue-router'
import EpisodesList from './views/EpisodesList.vue'
import EpisodeView from './views/EpisodeView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'episodes',
      component: EpisodesList
    },
    {
      path: '/episode/:id',
      name: 'episode',
      component: EpisodeView,
      props: true,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
