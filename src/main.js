import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'

import { createApp } from 'vue'
import App from './App.vue'
import {store} from './store/index'

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior (to, from, savedPosition){
        return { top: 0 }
    }
})


const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')