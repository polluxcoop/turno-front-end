<template>
  <div class="col1">
    <div id="datos">
      <img id="arrow" src="../../../assets/Arrow.svg"
      @click="$emit('back')"/>  
      <h1 id="dato">Datos de la reserva:</h1>
      <p id="time">{{ time }}</p>
      <p id="date">{{ formattedDate }}</p>
    </div>
    <UserDataForm :time="time" :date="formattedDate" @next="$emit('next')" />
  </div>
</template>

<script>
import UserDataForm from "@/components/StepperReservation/Step2/UserDataForm";

export default {
  name: "UserData",
  props: {
    time: String,
    formattedDate: String,
  },
  components: {
    UserDataForm,
  },
};
</script>

<style scoped>
.col1 {
  display: flex;
  justify-content: end;
  margin-right: 118px;
  margin-left: 118px;
  align-items: center;
  font-family: "Lexend Exa";
}
#arrow {
  position: absolute;
  left: 234px;
  top: 135px;
  height: 40px;
  cursor: pointer;
}
#datos {
  width: 382px;
  height: 172px;
  font-family: "Lexend Exa";
  align-items: center;
  font-style: normal;
  font-weight: 400 bolder;
  text-align: center;
  color: #ffffff;
  line-height: 15px;
  background: rgba(72, 183, 185, 0.5);
  font-size: 22px;
}
#dato {
  font-size: 20px;
}
</style>





