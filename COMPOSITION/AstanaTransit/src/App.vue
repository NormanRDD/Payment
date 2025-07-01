<template>
  <div>
    <RouterView />
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { useMainData } from "@/stores/mainData.js";

onMounted(() => {
  useMainData();
});
</script>

<style scoped></style>
