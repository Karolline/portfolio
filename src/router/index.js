import Vue from 'vue'
import VueRouter from 'vue-router'
import Intro from '@/Views/Intro'

Vue.use(VueRouter)

const routes = [
    {
        path: '/portfolio/intro',
        name: 'intro',
        component: Intro
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router