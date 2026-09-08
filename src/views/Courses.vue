<template>
  <div class="page-container">
    <header>
      <h2>📚 Course List</h2>
      <p>❤️ ถูกใจแล้ว {{ favoriteStore.favorites.length }} คอร์ส</p>
      <RouterLink to="/summary">ไปหน้า Summary</RouterLink>
    </header>

    <div class="form-section">
      <label>ชื่อผู้ใช้:</label>
      <input
        :value="favoriteStore.username"
        placeholder="กรอกชื่อของคุณ"
        @input="favoriteStore.setUsername($event.target.value)"
      />
    </div>

    <div class="course-list">
      <CourseCard
        v-for="course in courses"
        :key="course.id"
        :course="course"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { RouterLink } from "vue-router";
import CourseCard from "../components/CourseCard.vue";
import { useFavoriteStore } from "../stores/favorite";

const favoriteStore = useFavoriteStore();

const courses = ref([]);

onMounted(async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  courses.value = response.data;
});
</script>

<style scoped>
.page-container {
  max-width: 600px;
  margin: auto;
  text-align: center;
}
.course-list {
  margin-top: 24px;
}
</style>
