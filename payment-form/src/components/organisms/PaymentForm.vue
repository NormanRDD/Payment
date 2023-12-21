<template>
  <div>
    <PaymentCard
      :component-definition="dynamicComponentDefinition"
    ></PaymentCard>
  </div>
</template>

<script setup>
import { ref, defineComponent,computed } from "vue";
export default defineComponent({
  components: {
    PaymentCard,
  },
  setup() {
    const dynamicComponentDefinition = ref({
      template: `<div @click="showMessage">{{ message }}</div>`,
        message: "Hello, dynamically generated component!",
      data() {
        return {
        };
      },
      methods: {
        showMessage() {
          alert(this.message);
        },
      },
    });

    return {
      dynamicComponentDefinition,
    };
  },
});
</script>
