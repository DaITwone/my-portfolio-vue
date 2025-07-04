<template>
  <section class="summary">
    <Transition name="fade" appear>
      <div class="content">
        <p class="intro">Hi! I'm</p>
        <h1 class="name-heading">NGUYEN VAN DAT</h1>
        <p class="title">{{ displayText }}<span class="cursor">|</span></p>

        <p class="description">
          I am a passionate and motivated second-year student looking for a frontend development internship. I have a
          growing foundation in HTML, CSS, JavaScript, and basic knowledge of Vue.js. I am seeking an internship where I
          can apply the technical skills I have learned, combined with my real-world work experience. I am a disciplined
          and responsible person with strong attention to detail and a positive attitude toward learning from colleagues
          in the workplace who can guide and support me to grow and prepare for my future as a professional developer.
          <br>My goal is to become a skilled Frontend Developer within the next year. I always try to acquire and update
          knowledge for self-development, with further learning toward Full-stack development.
        </p>
        <div class="btn-container mt-3">
          <button class="btn btn-color-2 btn-black"
            onclick="location.href='https://drive.google.com/file/d/19toy4W3Z8gAqvlCvWj23QAv8h9xO5u9_/view?usp=sharing'">
            View Resume
          </button>
          <router-link to="/contact">
            <button class="btn btn-color-1">Contact Info</button>
          </router-link>
        </div>
      </div>
    </Transition>
    <Transition name="fade" appear>
      <img src="/avatar.png" alt="My Avatar" class="avatar" />
    </Transition>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const fullText = 'INTERN FRONTEND DEVELOPER'
const displayText = ref('') // biến dùng để hiển thị từng ký tự, sẽ cập nhật liên tục
let index = 0 // biến đếm vị trí ký tự đang gõ

const typeSpeed = 70 // thời gian giữa mỗi lần gõ (ms) → càng nhỏ càng nhanh
const delayAfterTyping = 1000 // chờ sau khi gõ xong (ms)
const resetDelay = 300 // chờ trước khi bắt đầu gõ lại từ đầu

function startTypingLoop() {
  displayText.value = ''
  index = 0
  typeChar()
}

function typeChar() {
  if (index < fullText.length) {
    displayText.value += fullText[index] // thêm ký tự vào cuối
    index++
    setTimeout(typeChar, typeSpeed) // gọi lại chính nó sau delay
  } else {
    // Gõ xong thì chờ rồi reset để gõ lại
    setTimeout(() => {
      displayText.value = '' // xóa hết chữ đang hiển thị
      setTimeout(() => {
        startTypingLoop() // bắt đầu lại
      }, resetDelay)
    }, delayAfterTyping)
  }
}

// Chạy lần đầu tiên khi component được hiển thị
onMounted(() => {
  startTypingLoop()
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 1s ease 0.2s,
    transform 1s ease 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.summary {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  padding: 40px 20px;
  flex-wrap: wrap;
  /* Cho phép các phần tử con xuống hàng nếu không đủ không gian trên 1 dòng (tức là responsive tốt trên màn hình nhỏ). */
  text-align: left;
}

.intro {
  margin-bottom: 0.2rem;
  font-size: 1rem;
  font-weight: 400;
  color: gray;
  font-family: 'Segoe UI', 'Helvetica Neue', sans-serif;
}

.name-heading {
  font-size: 3rem;
  /* Cỡ chữ lớn */
  font-weight: 800;
  /* Siêu đậm */
  text-transform: uppercase;
  /* In hoa toàn bộ */
  color: #5a9bd4;
  /* Màu xanh dương nhẹ (bạn có thể đổi mã màu) */
  letter-spacing: 2px;
  /* Giãn chữ một chút */
  margin-left: -2px;
}

.content {
  flex: 1;
  min-width: 250px;
}

.avatar {
  margin-left: 30px;
  /* hoặc margin-top nếu ở mobile */
  max-width: 280px;
  width: 100%;
  aspect-ratio: 4 / 5;
  /* Tỷ lệ chân dung như CV hoặc poster */
  border-radius: 60px;
  /* Bo góc nhẹ, không phải hình tròn */
  object-fit: cover;
  /* border: 4px solid #ffffff; */
  box-shadow: 0 8px 20px #8ab4d5;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.avatar:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px #8ab4d5;
}

.title {
  font-size: 1.2rem;
  color: #625f5f;
  margin: 10px 0;
  white-space: pre;
}

.description {
  color: gray;
  font-size: 0.99em;
  font-weight: 200;
  /* hoặc 200 nếu muốn mỏng hơn nữa */
  font-family: 'Segoe UI', 'Helvetica Neue', sans-serif;
  text-align: justify;
}

.cursor {
  display: inline-block;
  animation: blink 1s steps(1) infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.btn-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn {
  font-weight: 600;
  transition: all 300ms ease;
  padding: 1rem;
  border-radius: 2rem;
}

.btn-color-1,
.btn-color-2 {
  border: rgba(53, 53, 53, 0.555) 0.1rem solid;
}

.btn-color-1:hover,
.btn-color-2:hover {
  cursor: pointer;
}

.btn-color-1,
.btn-color-2:hover {
  background: rgb(53, 53, 53);
  color: white;
}

.btn-color-1:hover {
  background: rgb(0, 0, 0);
}

.btn-color-2:hover {
  border: rgb(255, 255, 255) 0.1rem solid;
}

.btn-container {
  gap: 1rem;
  /* 0.5rem = 8px, 1rem = 16px */
}

/* Tương thích với mobile, ipad */
@media (max-width: 768px) {
  .summary {
    flex-direction: column;
    padding: 30px 15px;
    text-align: center;
  }

  .content {
    text-align: center;
  }

  .intro {
    margin: 3px;
  }

  .name-heading {
    font-size: 1.8rem;
  }

  .title {
    font-size: 1rem;
  }

  .description {
    font-size: 0.86em;
    text-align: justify;
  }

  .avatar {
    width: 250px;
    height: 250px;
    max-width: 100%;
    margin-top: 20px;
  }

  .btn-container {
    flex-direction: column;
    /* Biến các nút button thành xếp dọc thay vì nằm ngang. Mỗi button nằm trên một dòng riêng. */
    gap: 0.75rem;
    margin-top: 1rem;
    /* Cách phần description */
    align-items: center;
    /* Căn giữa */
  }

  .btn {
    width: 100%;
    max-width: 200px;
  }
}
</style>
