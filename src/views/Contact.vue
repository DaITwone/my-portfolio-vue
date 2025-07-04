<template>
  <div class="center-wrapper fade-in">
    <div class="contact-container">
      <form class="contact-form" action="https://formspree.io/f/mzzgynlp" method="POST">
        <div class="form-group">
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Email Address" required />
        </div>
        <div class="form-group">
          <input type="text" name="phone" placeholder="Phone Number" />
          <input type="text" name="subject" placeholder="Subject" />
        </div>
        <textarea name="message" placeholder="Message" rows="4" required></textarea>
        <button type="submit" class="send-btn">
          <span class="plane-icon">
            <i class="fas fa-paper-plane"></i>
          </span>
        </button>
      </form>

      <!-- Right side - Contact Info -->
      <div class="info-section">
        <h3 class="info-title">CONTACT ME</h3>

        <div class="info-list">
          <div class="info-item">
            <div class="info-icon">
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path
                  fill="currentColor"
                  d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"
                />
              </svg>
            </div>
            <span class="info-text">Distric 7, Ho Chi Minh City</span>
          </div>

          <div class="info-item">
            <div class="info-icon">
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path
                  fill="currentColor"
                  d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
                />
              </svg>
            </div>
            <span class="info-text">09 68 612 632</span>
          </div>

          <div class="info-item">
            <div class="info-icon">
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path
                  fill="currentColor"
                  d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
                />
              </svg>
            </div>
            <span class="info-text">daittwone@gmail.com</span>
          </div>

          <div class="info-item">
            <div class="info-icon">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path
                  d="M12 0.5C5.73 0.5 0.5 5.73 0.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.03c-3.2.7-3.87-1.54-3.87-1.54-.53-1.35-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.52.11-3.16 0 0 .98-.31 3.2 1.2a11.1 11.1 0 0 1 5.82 0c2.2-1.5 3.19-1.2 3.19-1.2.63 1.64.23 2.86.11 3.16.75.81 1.2 1.84 1.2 3.1 0 4.42-2.7 5.4-5.28 5.68.42.36.8 1.09.8 2.2v3.26c0 .31.21.67.8.56A10.99 10.99 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z"
                />
              </svg>
            </div>
            <span class="info-text">https://github.com/DaITwone</span>
          </div>
        </div>

        <div class="divider"></div>

        <div class="social-links">
          <a href="#" class="social-link facebook">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path
                fill="currentColor"
                d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18L18.5,11H15V9A1,1 0 0,1 16,8H18V5Z"
              />
            </svg>
          </a>
          <a href="#" class="social-link twitter">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path
                fill="currentColor"
                d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
              />
            </svg>
          </a>
          <a href="#" class="social-link linkedin">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path
                fill="currentColor"
                d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    submitForm() {
      alert('Gửi thành công! Cảm ơn bạn đã liên hệ.')
    },
  },
}
</script>

<style scoped>
.center-wrapper {
  min-height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact-container {
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
}
.contact-form {
  flex: 2;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.form-group {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

input,
textarea {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
}

.send-btn {
  align-self: flex-end;
  background: linear-gradient(135deg, #4a90e2, #357abd);
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(33, 203, 243, 0.4);
  margin-top: 20px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.send-btn:hover {
  transform: scale(1.1);
}

.info-section {
  flex: 1;
  background: linear-gradient(135deg, #4a90e2, #357abd);
  color: white;
  padding: 40px 30px;
  position: relative;
}

.info-title {
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 30px 0;
  color: white;
}

.info-list {
  margin-bottom: 30px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 20px;
}

.info-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin-top: 2px;
}

.info-icon svg {
  fill: white;
}

.info-text {
  font-size: 14px;
  line-height: 1.4;
  color: white;
}

.divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.3);
  margin: 30px 0 20px 0;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.social-link svg {
  fill: white;
}
.fade-in {
  opacity: 0;
  transform: translateY(30px); /* Dịch phần tử xuống dưới 30px lúc bắt đầu */
  animation: fadeInUp 0.8s ease forwards; /* Gọi animation tên fadeInUp, thời gian chạy là 0.8 giây, kiểu mượt ease, và giữ lại trạng thái cuối cùng (forwards) */
}

/* Tạo hiệu ứng keyframes */
@keyframes fadeInUp {
  to {
    opacity: 1; /* Hiện ra hoàn toàn */
    transform: translateY(0); /* Trở lại vị trí ban đầu (không dịch xuống nữa) */
  }
}
@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
  }

  .contact-form,
  .info-section {
    flex: 1 1 100%;
    padding: 20px;
  }

  .form-group {
    flex-direction: column;
    gap: 10px;
  }

  input,
  textarea {
    font-size: 16px;
  }

  .send-btn {
    align-self: flex-end; /* ✅ giữ bên phải */
    margin-top: 15px;
  }

  .info-title {
    font-size: 18px;
    text-align: center;
  }

  .info-list,
  .social-links {
    justify-content: center;
    text-align: center;
  }

  .info-item {
    flex-direction: row; /* giữ layout ngang */
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }

  .info-text {
    text-align: left;
  }
}
</style>
