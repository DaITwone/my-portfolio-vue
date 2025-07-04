<template>
  <section class="projects fade-in">
    <h2 class="projectsh2">MY PROJECTS.</h2>
    <div class="project-list fade-in">
      <div class="card fade-in" v-for="(project, index) in projects" :key="project.title"
        :style="{ animationDelay: `${index * 0.2}s` }">
        <div class="imgBX">
          <img :src="project.image" :alt="project.title" />
        </div>
        <div class="content">
          <div class="details">
            <h2>
              {{ project.title }}<br />
              <span>{{ project.description }}</span>
            </h2>
            <div class="data">
              <h3 v-for="tech in project.tech" :key="tech" :style="{ color: getIconColor(tech) }">
                <i :class="getIconClass(tech)"></i><br />
                <span>{{ tech }}</span>
              </h3>
            </div>
            <div class="actionBtn">
              <a :href="project.github" target="_blank">
                <button><i class="fab fa-github"></i> GitHub</button>
              </a>
              <a :href="project.live" target="_blank">
                <button><i class="fas fa-external-link-alt"></i> Live Demo</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { projects } from '@/assets/data/projects'

const getIconClass = (tech) => {
  const icons = {
    HTML: 'fab fa-html5',
    CSS: 'fab fa-css3-alt',
    JavaScript: 'fab fa-js-square',
    'Vue.js': 'fab fa-vuejs',
    Supabase: 'fas fa-database',
  }
  return icons[tech] || 'fas fa-code'
}

const getIconColor = (tech) => {
  const colors = {
    HTML: '#e34c26',
    CSS: '#2965f1',
    JavaScript: '#f7df1e',
    'Vue.js': '#42b883',
    Supabase: '#3ecf8e',
  }
  return colors[tech] || '#999'
}
</script>

<style scoped>
.projects {
  padding: 10px 20px;
  height: 550px;
}

.projectsh2 {
  text-align: center;
  font-size: 3rem;
  /* Cỡ chữ lớn */
  font-weight: 800;
  /* Siêu đậm */
  margin-bottom: 80px;
  color: #5a9bd4;
  letter-spacing: 2px;
  /*Giãn chữ nhẹ*/
}

.project-list {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
}

.card {
  position: relative;
  width: 350px;
  height: 200px;
  border-radius: 20px;
  transition: 0.5s;
}

.card:hover {
  height: 400px;
  box-shadow: 0 3px 30px #70a5d1;
}

.imgBX {
  position: absolute;
  left: 50%;
  top: -50px;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  border-radius: 20px;
  box-shadow: 0 2px 20px #70a5d1;
  overflow: hidden;
  /* Ẩn phần tử con bị tràn ra ngoài phần tử cha */
  transition: 0.5s;
}

.card:hover .imgBX {
  width: 280px;
  height: 180px;
}

.imgBX img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Ảnh bao phủ toàn khung không bị méo. Ảnh sẽ giữ tỷ lệ gốc và cắt bớt phần dư nếu cần thiết */
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
  /* ← Trả lại vị trí ban đầu */
}

.card:hover .details h2 span {
  font-size: 0.8em;
  color: rgba(0, 0, 0, 0.816);
}

.details h2 {
  font-size: 1.25em;
  /* em: tương đối với kích thước font phần tử cha (if not: body). Phần tử cha: 16px -> 16px * 1.25em = 20px */
  font-weight: 600;
  /* Độ đậm chữ */
  color: #5a9bd4;
  line-height: 1.2em;
  /* Khoảng cách giữa các dòng chữ */
}

.details h2 span {
  font-size: 0.8em;
  font-weight: 500;
  opacity: 0.5;
  color: #555;
}

.data {
  display: flex;
  justify-content: space-between;
  margin: 14px 0;
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
  gap: 10px;
}

.actionBtn button {
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  outline: none;
  font-size: 0.9em;
  font-weight: 200;
  background: #5a9bd4;
  color: #fff;
  cursor: pointer;
}

.actionBtn button:nth-child(2) {
  border: 1px solid #999;
  color: #999;
  background: #fff;
}

.actionBtn i {
  margin-right: 8px;
  font-size: 1em;
}

.fade-in {
  opacity: 0;
  transform: translateY(30px);
  /* Dịch phần tử xuống dưới 30px lúc bắt đầu */
  animation: fadeInUp 0.8s ease forwards;
  /* Gọi animation tên fadeInUp, thời gian chạy là 0.8 giây, kiểu mượt ease, và giữ lại trạng thái cuối cùng (forwards) */
}

/* Tạo hiệu ứng keyframes */
@keyframes fadeInUp {
  to {
    opacity: 1;
    /* Hiện ra hoàn toàn */
    transform: translateY(0);
    /* Trở lại vị trí ban đầu (không dịch xuống nữa) */
  }
}

@media (max-width: 768px) {
  .projects {
    padding: 40px 20px;
    min-height: auto;
    height: auto;
    /* ✅ tránh cắt nội dung */
    overflow: visible;
    /* đề phòng overflow bị ẩn */
  }

  .projectsh2 {
    font-size: 2rem;
    margin-bottom: 40px;
  }

  .project-list {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 90%;
    height: auto !important;
    margin-bottom: 40px;
    box-shadow: 0 3px 20px #70a5d1;
    overflow: hidden;
  }

  .imgBX {
    position: relative !important;
    top: 0 !important;
    left: 0 !important;
    transform: none !important;
    width: 100% !important;
    height: 180px !important;
    border-radius: 20px 20px 0 0;
    margin: 0;
    box-shadow: none;
  }

  .imgBX img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    position: relative !important;
    display: block;
    width: 100%;
  }

  .details {
    transform: none !important;
    padding: 20px;
    text-align: center;
  }

  .data {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin: 20px 0;
  }

  .actionBtn {
    flex-direction: column;
    gap: 10px;
    align-items: stretch;
  }

  .actionBtn button {
    width: 100%;
    font-size: 1em;
  }
}
</style>
