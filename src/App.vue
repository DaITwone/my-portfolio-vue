<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import ProfileCard from './components/ProfileCard.vue'

const router = useRouter()

const hasFollowed = ref(false)
const darkMode = ref(false)

const followerCount = ref(0)

// Load follower từ localStorage
onMounted(() => {
  const savedCount = localStorage.getItem('followerCount')
  followerCount.value = savedCount ? parseInt(savedCount) : 0
})

// Khi nhấn Follow ở ProfileCard
function handleFollowed() {
  // Tăng follower, lưu vào localStorage
  followerCount.value++
  localStorage.setItem('followerCount', followerCount.value)

  // Điều hướng sang trang chính
  hasFollowed.value = true
  router.push('/summary')
}
</script>

<template>
  <div>
    <!-- Khi chưa follow: hiện card -->
    <ProfileCard
      v-if="!hasFollowed"
      :initialCount="followerCount"
      @followed="handleFollowed"
    />

    <!-- Khi đã follow: hiện app chính -->
    <div v-else class="app" :class="{ 'dark-mode': darkMode }">
      <Navbar />
      <main class="main-content">
        <router-view />
      </main>
      <Footer />
    </div>
  </div>
</template>




<style scoped> /* scoped: CSS chỉ áp dụng cho component này, không lan ra ngoài */
.app {
  font-family: Arial, sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
  min-height: 100vh; /* Đảm bảo chiều cao tối thiểu bằng màn hình */
  display: flex;
  flex-direction: column; /* Sắp xếp các phần tử thoe cột (Navbar - Content - Footer) */
}

.main-content {
  flex: 1; /* Chiếm phần còn lại của giữa header và footer */
  padding: 20px;
  max-width: 960px;
  margin: 0 auto;
}
</style>
