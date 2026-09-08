import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoriteStore = defineStore("favorite", () => {
  const username = ref("");
  const favorites = ref<any[]>([]);

  const setUsername = (name: string) => {
    username.value = name;
  };

  const addFavorite = (course: any) => {
    favorites.value.push(course);
  };

  return { username, favorites, setUsername, addFavorite };
});
