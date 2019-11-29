import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'

Vue.use(VueRouter)

const routes = [
    {
        path: '/portfolio/test',
        name: 'test',
        component: HelloWorld
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router