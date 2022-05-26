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
  name: "Step3Congratulations",
};
</script>

<style scoped>
/* .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: rgba(26, 87, 157, 0.5);
  margin-right: 246px;
  margin-left: 246px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px; 
} */

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