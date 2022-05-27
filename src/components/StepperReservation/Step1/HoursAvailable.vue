<template>
  <div>
    <div class="col-2">
      <div class="container-2">
        <h1>Estilista</h1>
        <p>Mariana martinez</p>
      </div>
      <div class="col">
        <BaseButton
          v-for="time in available"
          :key="time"
          :label="time"
          :value="time"
          @click="submitForm(time)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton";
export default {
  name: "HoursAvailable",
  components: { BaseButton },
  props: {
    available: {
      required: true,
      type: Array,
    },
  },

  data() {
    return {
      time: "",
      date: "",
      timeAlert: false,
      dateAlert: false,
    };
  },

  methods: {
    submitForm(time) {
      this.time = time;
      const validacion = this.validateForm();
      if (validacion) {
        // this.$router.push('/form')
        this.$emit("submitForm", {
          time: this.time,
        });
      }
    },
    validateForm: function () {
      let resultadoValidacion = true;
      if (!this.time) {
        this.timeAlert = true;
        resultadoValidacion = false;
      }
      return resultadoValidacion;
    },
  },
};
</script>


<style scoped>
.col {
  flex-flow: wrap column;
  display: flex;
  align-items: center;
  justify-content: center;
}

.col-2 {
  height: 92vh;
}
.container-2 {
  width: 412px;
  height: 75px;
  margin: 34px;
  /* background: rgba(26, 87, 157, 0.5); */
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
}
h1 {
  text-align: center;
  color: #ffffff;
  font-size: 27px;
  line-height: 24px;
}
p {
  text-align: center;
  color: #ffffff;
  font-size: 27px;
  line-height: 22px;
}
button {
  border-style: none;
  width: 171px;
  height: 42px;
  background: rgba(72, 183, 185, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px;
  font-family: "Lexend Exa";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  border: none;
  transition: 0.3s;
  margin: 10px;
  overflow: visible;
}

button:hover {
  box-shadow: 0 5px 10px 0 #6eb4fa;
  transition: 0.3s;
}
</style>