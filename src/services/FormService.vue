<template>
  <div id="container">
    <h1>Placeholder</h1>
    <div
      style="
        width: 150px !important;

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
  data() {
    return {
      placeholders: [],
    };
  },

  methods: {
    async getPlaceholders() {
      const response = await PlaceholderService.getPlaceholder();
      this.placeholders = response.data;
      //console.log(response);
    },
  },
  created() {
    this.getPlaceholders();
  },
};
</script>