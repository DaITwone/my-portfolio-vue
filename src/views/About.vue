<template>
  <section class="about-page" data-aos="fade-up" data-aos-delay="100" data-aos-once="false">
    <h2 class="section-title">About Me</h2>
    <!-- Education -->
    <div class="section-block">
      <h3 class="block-title" data-aos="fade-up" data-aos-delay="100" data-aos-once="false">
        EDUCATION
      </h3>
      <div class="timeline-container" data-aos="fade-up" data-aos-delay="100" data-aos-once="false">
        <div class="timeline-left">
          <p class="date">Sept 2023 - Present</p>
        </div>
        <div class="timeline-right">
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h4>Ho Chi Minh City College Of Economics</h4>
                <p class="subtitle">Information Technology - Software Applications</p>
                <p class="desc">
                  Second-year Information Technology student majoring in Software Applications, with
                  a focus on Frontend Development. Acquired fundamental knowledge of HTML, CSS,
                  JavaScript, and basic programming through coursework at school. Currently seeking
                  internship opportunities to apply and further develop my skills in a real-world
                  environment.
                </p>
                <div class="tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>Vue.js</span>
                  <span>C#</span>
                  <span>C++</span>
                  <span>PHP</span>
                  <span>Bootstrap</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Experience -->
    <div class="section-block" data-aos="fade-up" data-aos-delay="100" data-aos-once="false">
      <h3 class="block-title">OTHER EXPERIENCE</h3>
      <div class="timeline-container" data-aos="fade-up" data-aos-delay="300" data-aos-once="false">
        <div class="timeline-left">
          <p class="date">2021 - 2022</p>
        </div>
        <div class="timeline-right">
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h4>Deputy Store Manager – WinMart+</h4>
                <p class="subtitle">Retail Operations | Inventory & Customer Service</p>
                <ul class="desc-list">
                  <li>
                    Managed store staff: assigned work schedules, provided training, checked work
                    performance, evaluated staff, and handled conflicts <strong>→ This helped me improve communication
                      and teamwork skills.</strong>
                  </li>
                  <li>
                    Ordered goods, received products, transferred stock between stores, and
                    contacted suppliers for returns or exchanges <strong>→Followed clear workflows and managed tasks with accuracy. Communicated clearly with different people to solve problems.</strong>
                  </li>
                  <li>
                    Controlled inventory: tracked
                    stock in/out, ensured correct and timely data recording, and developed plans to
                    reduce loss <strong>→ Paid attention to detail when managing data and records. Learned how to solve
                      problems and improve processe.</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="timeline-container" data-aos="fade-up" data-aos-delay="300" data-aos-once="false">
        <div class="timeline-left">
          <p class="date">2022 - 2023</p>
        </div>
        <div class="timeline-right">
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h4>Store Manager – WinMart+</h4>
                <p class="subtitle">Operations | Staff Management | Inventory Control</p>
                <ul class="desc-list">
                  <li>
                    Inventory Management: Managed stocktaking, supplier returns, inventory
                    discrepancies, and product shelf-life control to minimize loss and waste.
                    Handled quality issues and customer claims for fresh products <strong>→ This experience helped improve my attention to detail and responsibility. These skills are useful when checking code, fixing UI issues, and working with data.</strong>
                  </li>
                  <li>
                    SAP Operations: Created POs, managed stock in/out, and processed returns to the
                    distribution center (DC) <strong>→ Working with SAP gave me experience following structured systems and workflows, which helps when using developer tools or following project guidelines.

</strong>
                  </li>
                  <li>
                    Conducted regular and ad-hoc stock and asset checks. Took shared responsibility
                    for any losses or damage beyond company limits <strong>→ I developed strong problem-solving and accountability-skills that support debugging, testing, and ensuring quality in web projects.</strong>
                  </li>
                  <li>
                    Controlled daily cash flow: submitted sales revenue, managed the cash fund, and
                    handled payment records <strong>→ Gained experience in managing numbers and accuracy, helpful when working with APIs, data binding, and dynamic content in frontend applications.</strong>
                  </li>
                  <li>Created and managed staff work schedules to match business needs <strong>→ Learned how to plan, prioritize, and organize tasks-important for working on frontend projects with deadlines and multiple requirements.</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { onMounted, watchEffect } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: false,
    easing: 'ease-in-out',
  })

  // Đợi DOM render xong hoàn toàn rồi gọi refresh
  setTimeout(() => {
    AOS.refresh()
  }, 500)
})
</script>

<style scoped>
.about-page {
  padding: 40px;
  max-width: 720px;
  margin: auto;
}

.section-title {
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
  text-align: center;
  margin-bottom: 50px;
}

.section-block {
  margin-bottom: 200px;
}

.block-title {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #007acc;
}

h4 {
  font-family: 'Roboto', sans-serif;
  color: #5f9ac6;
}

.timeline-container {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.timeline-left {
  width: 100px;
  text-align: right;
  padding-right: 1rem;
  flex-shrink: 0;
}

.timeline {
  border-left: 3px solid #ccc;
  padding-left: 20px;
  position: relative;
}

.timeline-item {
  position: relative;
  margin-bottom: 30px;
}

.timeline-dot {
  width: 14px;
  height: 14px;
  background-color: #007acc;
  border-radius: 50%;
  position: absolute;
  left: -8px;
  top: 6px;
}

.timeline-content {
  padding-left: 10px;
}

.timeline-content h4 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
}

.subtitle {
  font-size: 1rem;
  margin: 4px 0;
}

.date {
  font-size: 0.9rem;
  color: #99999992;
  margin-bottom: 10px;
}

.desc {
  font-size: 1rem;
  line-height: 1.5;
  text-align: justify;
  color: gray;
  margin-left: 35px;
}

.tags {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 7.5px;
  /* margin-left: 20px; */
}

.tags span {
  background-color: #e0f0ff;
  color: #007acc;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.85rem;
}

.desc-list {
  padding-left: 1.5rem;
  list-style-type: disc;
  color: gray;
  line-height: 1.6;
  font-size: 0.81rem;
  text-align: justify;
  margin-left: 8px;
}

.desc-list li {
  margin-bottom: 8px;
}

@media (max-width: 768px) {
  .timeline-container {
    flex-direction: column;
  }

  .timeline-left {
    width: 100%;
    text-align: left;
    padding-right: 0;
    margin-bottom: 10px;
  }

  .timeline {
    border-left: 2px solid #ccc;
    padding-left: 15px;
  }

  .timeline-content {
    padding-left: 10px;
    width: 100%;
  }

  .tags {
    flex-wrap: wrap;
  }

  .tags span {
    white-space: nowrap;
    font-size: 0.75rem;
    padding: 3px 8px;
    max-width: 100%;
  }

  .desc,
  .desc-list {
    font-size: 0.59rem;
    width: 100%;
    text-align: left;
    word-wrap: break-word;
    overflow-wrap: break-word;
    text-align: justify;
    /* Căn đều hai bên */
  }

  .desc-list li {
    word-break: break-word;
    margin-bottom: 8px;
    text-align: justify;
    text-align-last: left;
    /* ✅ Dòng cuối canh trái để tránh bị dãn cách */
  }
}
</style>
