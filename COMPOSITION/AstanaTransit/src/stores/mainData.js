import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainData = defineStore("mainData", () => {
  const path = ref("api/v1/merchandise");
  // Убрали лишние скобки
  const language = ref("");
  return {
    path,
    language,
  };
});
