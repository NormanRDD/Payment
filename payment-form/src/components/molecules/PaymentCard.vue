<template>
  <component :is="dynamicComponent"></component>
</template>

<script>
import { ref, defineComponent } from "vue";
// import form from "@/json/form.json";
export default defineComponent({
  props: {
    componentDefinition: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const dynamicComponent = ref(props.componentDefinition);

    return {
      dynamicComponent,
    };
  },
});
</script>
