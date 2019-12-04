import Vue from 'vue'
import VueRouter from 'vue-router'
import Intro from '@/Views/Intro'
import Projects from '@/Views/Projects'

Vue.use(VueRouter)

const routes = [
    {
        path: '/portfolio/intro',
        name: 'intro',
        component: Intro
    },
    {
        path: '/portfolio/projects',
        name: 'projects',
        component: Projects
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router