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
    mode: 'history', // 아마 url로 직접 접속하면 오류날 것
    routes: routes
})

export default router