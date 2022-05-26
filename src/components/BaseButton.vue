<template>
  <button @click="$emit('click')">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    label: String,
  },
};
</script>


