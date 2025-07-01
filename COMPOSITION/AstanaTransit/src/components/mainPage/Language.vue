<template>
  <div>
    <!-- Выбор языка -->
    <div class="text-center mb-12 mt-[30rem]">
      <p class="text-xl text-gray-600">Тілді таңдаңыз / Выберите язык</p>
    </div>
    <!-- Кнопки языков -->
    <div class="flex gap-8">
      <button
        @click="changeLanguage('kz')"
        class="w-32 h-32 bg-[#0077B6] text-white text-3xl font-bold rounded-full hover:bg-[#005a8b] transition-all shadow-lg active:scale-95"
      >
        KZ
      </button>
      <button
        @click="changeLanguage('ru')"
        class="w-32 h-32 bg-[#0077B6] text-white text-3xl font-bold rounded-full hover:bg-[#005a8b] transition-all shadow-lg active:scale-95"
      >
        RU
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import i18next from "@/i18n";

const currentLang = ref(i18next.language);
const t = ref((key, options) => i18next.t(key, options));

const updateTranslations = () => {
  t.value = (key, options) => i18next.t(key, options);
  currentLang.value = i18next.language;
};

const changeLanguage = (lang) => {
  i18next.changeLanguage(lang);
};

onMounted(() => {
  i18next.on("languageChanged", updateTranslations);
});

onBeforeUnmount(() => {
  i18next.off("languageChanged", updateTranslations);
});
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
