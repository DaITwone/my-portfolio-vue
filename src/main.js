import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.min.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()
createApp(App).use(router).mount('#app')
