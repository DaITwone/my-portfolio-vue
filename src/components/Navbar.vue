<template>
  <nav class="navbar">
    <router-link to="/summary" class="logo">Dal's Portfolio</router-link>

    <!-- Hamburger icon -->
    <div class="hamburger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- Nav Links -->
    <ul class="nav-links" :class="{ active: isMenuOpen }">
      <li><router-link to="/about" @click="closeMenu">About</router-link></li>
      <li><router-link to="/skills" @click="closeMenu">Skills</router-link></li>
      <li><router-link to="/projects" @click="closeMenu">Projects</router-link></li>
      <li><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
      <li>
        <input
          type="checkbox"
          class="checkbox"
          id="checkbox"
          v-model="darkMode"
          @change="toggleDarkMode()"
        />
        <label for="checkbox" class="checkbox-label">
          <i class="fas fa-moon"></i>
          <i class="fas fa-sun"></i>
          <span class="ball"></span>
        </label>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const darkMode = ref(false)
const isMenuOpen = ref(false)

const toggleDarkMode = () => {
  if (darkMode.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    darkMode.value = true
    document.documentElement.classList.add('dark')
  }
})
const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.navbar {
  background: linear-gradient(to right, #85b3da, #3e84ba);
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1000;
}

.logo {
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  transition:
    transform 0.3s ease,
    color 0.3s ease;
  display: inline-block; /* Cần để transform hoạt động */
}

.nav-links a:hover {
  color: #f0f8ff;
  font-weight: 700;
  text-transform: uppercase;
}

/* 🌙 Toggle switch */
.checkbox {
  opacity: 0;
  display: none;
}

.checkbox-label {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50px;
  height: 26px;
  background: #ccc;
  border-radius: 50px;
  position: relative;
  padding: 5px;
}
.checkbox-label .ball {
  background-color: #fff;
  width: 22px;
  height: 22px;
  position: absolute;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
}
.checkbox:checked + .checkbox-label .ball {
  transform: translateX(24px);
}
.checkbox-label i {
  font-size: 13px;
}
.fa-moon {
  color: #5f99c6d7;
}
.fa-sun {
  color: #5f99c6dd;
}

/* 🍔 Hamburger icon */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
}
.hamburger span {
  width: 25px;
  height: 3px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* 📱 Responsive styles */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 60px;
    right: 0;
    background: #3e84ba;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    gap: 20px;
    display: none;
    z-index: 999;
  }

  .nav-links.active {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
