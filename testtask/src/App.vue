<template>
  <div class="main">
    <item-list :items="items" class="sidebar" @click="selectItem" />
    <item-content
      v-if="selectedItem"
      :item="selectedItem"
      @click="handleItemClick"
    />
  </div>
</template>

<script setup lang="ts">
import ItemList from "./components/ItemList.vue";
import ItemContent from "./components/ItemContent.vue";
import Data from "./components/mockData";
import { reactive } from "vue";
import { Product, Color, Size, Weight } from "./components/types"; // Добавлен импорт интерфейсов
 
const items = reactive(Data);
const selectedItem = reactive(null);
 
const selectItem = (item: Product) => {
  selectedItem.value = item;
};
 
const handleItemClick = (value: keyof Product["attributes"]) => {
  switch (value) {
    case "color":
      selectedItem.attributes.push({
        code: "new code",
        name: "new field",
        color: "color",
      } as Color);
      break;
    case "size":
      selectedItem.attributes.push({
        code: "new code",
        name: "new field",
        size: { width: 0, height: 0 },
      } as Size);
      break;
    case "weight":
      selectedItem.attributes.push({
        code: "new code",
        name: "new field",
        weight: 0,
      } as Weight);
      break;
    default:
      break;
  }
};
</script>

<style lang="css">
.main {
  display: flex;
  gap: 20px;
}
.sidebar {
  width: auto;
}
</style>
