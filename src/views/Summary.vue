<template>
  <div class="page-container">
    <h2>📋 Summary</h2>
    <p v-if="!favoriteStore.username || favoriteStore.favorites.length === 0">
      ยังไม่มีข้อมูลการเลือกคอร์ส
    </p>
    <template v-else>
      <p>ชื่อผู้ใช้: {{ favoriteStore.username }}</p>
      <p>จำนวนคอร์สที่ถูกใจ: {{ favoriteStore.favorites.length }}</p>
    </template>
    <RouterLink to="/">กลับไปหน้า Course</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useFavoriteStore } from "../stores/favorite";

const favoriteStore = useFavoriteStore();
</script>

<style scoped>
.page-container {
  text-align: center;
  padding: 40px;
}
</style>
