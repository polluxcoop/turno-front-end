<template>
  <div class="col-2">
    <div class="container-2">
      <h1>Estilista</h1>
      <p>Mariana martinez</p>
    </div>

    <div class="col">
      <h3 for="">¿En qué horario?</h3>
      <button
        id="col-1"
        v-for="time in available"
        :key="time.value"
        :value="time.value"
        required="true"
        type="button"
        @click="submitForm(time.value)"
      >
        {{ time.label }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
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
h1 {
  text-align: center;
  color: #ffffff;
  font-size: 29px;
  line-height: 42px;
}
h2 {
  text-align: center;
  color: #ffffff;
  font-family: "Lexend Exa";
}

h3 {
  text-align: center;
  color: #ffffff;
  font-family: "Lexend Exa";
  font-size: 25px;
}

.col {
  flex-flow: wrap column;
  display: flex;
  align-items: center;
  justify-content: center;
}
#col-1 {
  background: rgba(72, 183, 185, 0.5);
}

.col-2 {
  height: 92vh;
}

button {
  border-style: none;
  width: 171px;
  height: 48px;
  background: #195a9c;
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
}

button:hover {
  box-shadow: 0 5px 10px 0 #6eb4fa;
  transition: 0.3s;
}
</style>
