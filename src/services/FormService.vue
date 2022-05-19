<template>
  <div id="container">
    <h1>Placeholder</h1>
    <div
      style="
        max-width: 600px;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      "
    >
      <img
        v-for="(placeholder, i) in placeholders"
        :key="i"
        :src="placeholder.thumbnailUrl"
        :alt="placeholder.title"
      />
    </div>
  </div>
</template>


<script>
import PlaceholderService from "@/services/PlaceholderService";

export default {
  name: "PlaceholderComponent",
  data() {
    return {
      placeholders: [],
    };
  },
  mounted() {
    this.getPlaceholders();
  },

  methods: {
    getPlaceholders() {
      const response = PlaceholderService.getPlaceholders();
      this.getPlaceholders = response.data;
    },
  },
};
</script>