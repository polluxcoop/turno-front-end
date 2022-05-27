<template>
  <section>
    <div class="col1">
      <h1 class="title">¡Tu reserva se ha realizado con éxito!</h1>
    </div>
    <div class="col2"><img src="@/assets/Womenday-rafiki1.svg" /></div>
  </section>
</template>

<script>
export default {
  name: "congratulations-components",
};
</script>

<style scoped>
section {
  display: flex;
}
.title {
  width: 335px;
  height: 59px;

  font-family: "Lexend Exa";
  font-style: normal;
  font-weight: bolder;
  font-size: 29px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
}
.col1 {
  display: flex;
  justify-content: end;
  margin-right: 118px;
  margin-left: 118px;
  align-items: center;
  font-family: "Lexend Exa";
}

.col2 img {
  width: 591px;
  align-items: center;
  height: 583px;
}
</style>