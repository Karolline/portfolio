import Vue from 'vue'
import VueRouter from 'vue-router'
import Intro from '@/Views/Intro'
import Projects from '@/Views/Projects'
import Blog from '@/Views/Blog'

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
    },
    {
        path: '/portfolio/blog',
        name: 'blog',
        component: Blog
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router