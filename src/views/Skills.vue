<template>
  <section class="skills-section fade-in">
    <h2>SKILLS.</h2>
    <div class="skills-grid">
      <div class="skill-category fade-in" v-for="(item,index) in skills" :key="item.title" :style="{animationDelay: (index * 0.15) + 's' }"> <!-- index: vị trí 0,1,2,.. animation-delay: mỗi item xuất hiện trễ hơn 0.2s so với item trước -->
        <i :class="item.icon"></i><br>
        <h3>{{ item.title }}</h3>
        <p>{{ item.details }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import skills from '@/assets/data/skills.js'
</script>


<style scoped>
.skills-section {
  text-align: center;
  padding: 25px 20px;
}

.skills-section h2 {
  font-size: 3rem;           /* Cỡ chữ lớn */
  font-weight: 800;            /* Siêu đậm */
  margin-bottom: 40px;
  color: #5a9bd4;
  letter-spacing: 2px;        /*Giãn chữ nhẹ*/
}

.skills-grid {
  display: grid;            /* grid: hai chiều (hàng và cột) - block: một chiều dọc(top->bottom) - flex: một chiều (ngang & dọc) */
  grid-template-columns: repeat(3, 1fr);          /*Xác định số lượng và độ rộng các cột trong grid*/
  gap: 30px;
  justify-content: center;

}

.skill-category {
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  min-width: 300px;
}
.skill-category:hover {
  transform: translateY(-10px) scale(1.03);
  background-color: #f0f8ff; /* Nền xanh nhạt nhẹ */
  border-color: #4186BB;
  box-shadow: 0 12px 20px rgba(65, 134, 187, 0.2); /* Shadow theo màu chính */
}

/* Đổi màu icon khi hover */
.skill-category:hover i {
  color: #4186BB;
  transform: scale(1.2);
  transition: transform 0.3s ease, color 0.3s ease;
}

/* Đổi màu tiêu đề khi hover */
.skill-category:hover h3 {
  color: #4186BB;  transform: translateY(-2px); /* trượt nhẹ lên */
}

.skill-category i {
  font-size: 24px;
  color: #629CC7;
  margin-bottom: 10px;
  transition: all 0.3s ease;
}

.skill-category h3 {
  font-size: 18px;
  margin-bottom: 10px;
  text-transform: capitalize;       /* lowercase: chữ thường - uppercase: chữ hoa - capitalize: viết hoa chữ cái đầu mỗi từ */
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);      /* ✅ đường line mờ */
  padding-bottom: 10px;       /* Khoảng cách chữ và đường kẻ */
  display: inline-block;      /* Border dài bằng chữ */
  transition: all 0.3s ease;
  display: inline-block; /* cần để transform hoạt động */
}

.skill-category p {
  font-size: 14px;
  color: #666;
}
.fade-in {
  opacity: 0;
  transform: translateY(30px);      /* Dịch phần tử xuống dưới 30px lúc bắt đầu */
  animation: fadeInUp 0.8s ease forwards;       /* Gọi animation tên fadeInUp, thời gian chạy là 0.8 giây, kiểu mượt ease, và giữ lại trạng thái cuối cùng (forwards) */
}

/* Tạo hiệu ứng keyframes */
@keyframes fadeInUp {
  to {
    opacity: 1;       /* Hiện ra hoàn toàn */
    transform: translateY(0);       /* Trở lại vị trí ban đầu (không dịch xuống nữa) */
  }
}
@media (max-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr); /* Tablet: 2 cột */
  }
}

@media (max-width: 640px) {
  .skills-grid {
    grid-template-columns: 1fr; /* Mobile: 1 cột */
  }

  .skill-category {
    min-width: unset;   /* Cho phép co nhỏ theo màn hình */
  }

  .skills-section h2 {
    font-size: 2rem; /* Nhỏ lại để phù hợp mobile */
  }

  .skill-category h3 {
    font-size: 16px;
  }

  .skill-category p {
    font-size: 13px;
  }
}

</style>
