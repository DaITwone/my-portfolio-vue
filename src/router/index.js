import { createRouter, createWebHistory } from 'vue-router'
import ProfileCard from '../components/ProfileCard.vue' // ✨ Thêm dòng này
import Summary from '../views/Summary.vue'
import About from '../views/About.vue'
import Skills from '../views/Skills.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'

const routes = [
  // ✨ Trang mặc định khi mở web là ProfileCard
  { path: '/', name: 'ProfileCard', component: ProfileCard },

  // ✨ Trang chính sau khi follow
  { path: '/summary', name: 'Summary', component: Summary },
  { path: '/about', name: 'About', component: About },
  { path: '/skills', name: 'Skills', component: Skills },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/contact', name: 'Contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(), //URL sạch (không có #)
  routes
})

export default router
