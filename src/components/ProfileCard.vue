<template>
  <div class="profile-wrapper">
    <div class="card">
      <div class="imgBX">
        <img src="/card.JPG" alt="Avatar" />
      </div>
      <div class="content">
        <div class="details">
          <h2>
            Nguyen Van Dat<br />
            <span>Intern Frontend Developer</span>
          </h2>
          <div class="data">
            <h3>4<br /><span>Post</span></h3>
            <div class="follower-wrapper">
              <h3>{{ followerCount }}<br /><span>Follower</span></h3>
              <transition name="float-up">
                <span v-if="showPlusOne" class="plus-one">+1</span>
              </transition>
            </div>
            <h3>1<br /><span>Following</span></h3>
          </div>

          <div class="actionBtn">
            <button class="follow-btn" @click="handleFollow">Follow</button>

            <div class="message-tooltip-wrapper">
              <button class="message-btn" @click="handleMessage">Message</button>

              <transition name="fade">
                <div v-if="showMessageHint" class="simple-tooltip">
                  Click Follow to unlock the portfolio.
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Nhận props từ App.vue
const props = defineProps({
  initialCount: Number,
})

// Emit event để App.vue xử lý điều hướng
const emit = defineEmits(['followed'])

// Biến trạng thái
const followerCount = ref(props.initialCount || 0)
const showPlusOne = ref(false)
const showMessageHint = ref(false)
const hasFollowed = ref(false) // Kiểm tra đã follow chưa

// Xử lý khi nhấn Follow
function handleFollow() {
  followerCount.value++
  showPlusOne.value = true
  hasFollowed.value = true

  setTimeout(() => {
    showPlusOne.value = false
  }, 1000)

  setTimeout(() => {
    emit('followed')
  }, 1200)
}

// Xử lý khi nhấn Message
function handleMessage() {
  if (!hasFollowed.value) {
    showMessageHint.value = true
    setTimeout(() => {
      showMessageHint.value = false
    }, 2500)
  }
}
</script>

<style scoped>
.profile-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(45deg, #a3c4de, #3384d7);
  background-size: 400% 400%;
  animation: gradientAnimation 10s ease infinite;
}
@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.card {
  position: relative;
  width: 350px;
  height: 190px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 50px rgba(0, 0, 0.15);
  transition: 0.5s;
}
.card:hover {
  height: 450px;
}
.imgBX {
  position: absolute;
  left: 50%;
  top: -50px;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 50px rgba(0, 0, 0.15);
  overflow: hidden;
  transition: 0.5s;
}
.card:hover .imgBX {
  width: 250px;
  height: 250px;
}
.imgBX img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
}
.details {
  padding: 40px;
  text-align: center;
  width: 100%;
  transition: 0.5s;
  transform: translateY(150px);
}
.card:hover .details {
  transform: translateY(0);
}
.details h2 {
  font-size: 1.25em;
  font-weight: 600;
  color: #555;
  line-height: 1.2em;
}
.details h2 span {
  font-size: 0.75em;
  font-weight: 500;
  opacity: 0.5;
}
.data {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}
.data h3 {
  font-size: 1em;
  color: #555;
  line-height: 1.2em;
  font-weight: 600;
}
.data h3 span {
  font-size: 0.85em;
  font-weight: 400;
  opacity: 0.5;
}
.actionBtn {
  display: flex;
  justify-content: space-between;
}
.follow-btn {
  padding: 10px 30px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 1em;
  font-weight: 500;
  background: #2b79b5;
  color: #fff;
  cursor: pointer;
}
.actionBtn button:disabled {
  background: #999;
  cursor: not-allowed;
}
.follower-wrapper {
  position: relative;
}
.plus-one {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1rem;
  color: red;
  opacity: 1;
  animation: floatUp 1s ease-out forwards;
  pointer-events: none;
}

@keyframes floatUp {
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(-30px);
  }
}
.message-tooltip-wrapper {
  position: relative;
}
.message-btn {
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 1em;
  font-weight: 500;
  background: #fff;
  color: #999;
  cursor: pointer;
  border: 1px solid #999;
}
.simple-tooltip {
  position: absolute;
  bottom: -40px;
  right: 1px;
  background: #e1f5fe;
  color: #0277bd;
  padding: 8px 12px;
  border-radius: 15px 0px 15px 15px;
  font-size: 0.85em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
