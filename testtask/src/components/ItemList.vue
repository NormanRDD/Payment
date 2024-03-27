<template>
  <div class="list">
    <span
      v-for="(item, i) in items"
      :key="i"
      class="item"
      :class="{ itemSelected: item === selectedItem }"
      @click="() => selectItem(item)"
    >
      {{ item.name }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, reactive } from "vue";
import { Product } from "./types"; // Добавлен импорт интерфейсов

defineProps<{
  items: {
    id: string;
    name: string;
  }[];
}>();

const emit = defineEmits(["click"]);

const selectedItem = reactive<Product>(null);

const selectItem = (item: Product) => {
  selectedItem.value = item;
  emit("click", item);
};
</script>

<style lang="css">
.list {
  display: flex;
  flex-direction: column;
  border: 1px solid lightblue;
}

.item {
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  min-width: 250px;
}

.itemSelected {
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  min-width: 250px;
  background: lightskyblue;
}

.item:hover {
  background: #f0f0ff;
}
</style>
