<template>
  <div class="col-2">
    <div class="container-2">
      <h1>Estilista</h1>
      <p>Mariana Martinez</p>
    </div>
    <div class="col">
      <template v-if="available.length > 1">
        <BaseButton
          v-for="time in available"
          :key="time"
          :label="time | friendlyTime"
          :value="time"
          @click="submitForm(time)"
        />
      </template>
      <div v-else style="color: white; font-size: 22px">
        Selecione una fecha del calendario
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
  filters: {
    friendlyTime: function (value) {
      if (!value) return "";
      return value.substring(5, -2);
    },
  },
  methods: {
    submitForm(time) {
      this.time = time;
      const validacion = this.validateForm();
      if (validacion) {
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
  height: 97vh;
}
.container-2 {
  width: 412px;
  height: 75px;
  margin: 34px;
  background: rgba(26, 87, 157, 0.5);
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
}
h1 {
  text-align: center;
  color: #ffffff;
  font-size: 27px;
  line-height: 24px;
  font-family: "Lexend Exa";
}
p {
  text-align: center;
  color: #ffffff;
  font-size: 27px;
  line-height: 22px;
  font-family: "Lexend Exa";
}
button {
  border-style: none;
  width: 177px;
  height: 37px;
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