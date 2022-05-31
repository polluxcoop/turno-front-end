<template>
  <section>
    <router-view> </router-view>
  </section>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
section {
  overflow: hidden;
  background-repeat: no-repeat;
  background-image: url(@/assets/background.png);
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>