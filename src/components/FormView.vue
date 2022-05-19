<template>
  <div class="col2">
    <form action="">
      <h1 id="title2">
        ¡Completá el formulario <br />para finalizar el proceso!
      </h1>

      <div class="form-control">
        <label for="name">Nombre y apellido:</label>
        <input
          type="text"
          name="name"
          id="name"
          v-model="name"
          @blur="handleBlur"
        />

        <p class="error" v-if="nameAlert">Falta completar este campo</p>
      </div>

      <div class="form-control">
        <label for="email">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          v-model="email"
          @blur="handleBlur"
        />
        <p class="error" v-if="emailAlert">Falta completar este campo</p>
      </div>

      <div class="form-control">
        <label for="phone">Teléfono:</label>
        <input
          type="text"
          name="phone"
          id="phone"
          required
          v-model="phone"
          @blur="handleBlur"
        />
        <p class="error" v-if="phoneAlert">Falta completar este campo</p>
      </div>

      <div class="form-control">
        <label for="dni">DNI:</label>
        <input
          type="text"
          name="dni"
          id="dni"
          required
          v-model="dni"
          @blur="handleBlur"
        />
        <p class="error" v-if="dniAlert">Falta completar este campo</p>
      </div>

      <div class="form-control">
        <label for="message">Mensaje:</label>
        <textarea
          type="text"
          name="message"
          id="inputMessage"
          v-model="message"
          required
          @blur="handleBlur"
        ></textarea>
        <p class="error" v-if="messageAlert">Falta completar este campo</p>
      </div>

      <div class="boton">
        <button type="button" id="myButton" @click="submitForm">
          RESERVAR
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormComponent",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      dni: "",
      message: "",
      nameAlert: false,
      emailAlert: false,
      phoneAlert: false,
      messageAlert: false,
      dniAlert: false,
    };
  },

  methods: {
    submitForm() {
      const validacion = this.validateForm();
      if (validacion) {
        this.$emit("submitForm", {
          name: this.name,
          email: this.email,
          phone: this.phone,
          dni: this.dni,
          message: this.message,
        });
      }
    },
    handleBlur() {
      this.nameAlert = false;
      this.emailAlert = false;
      this.phoneAlert = false;
      this.messageAlert = false;
      this.dniAlert = false;
    },
    validateForm: function () {
      let resultadoValidacion = true;
      if (!this.name) {
        this.nameAlert = true;
        resultadoValidacion = false;
      }
      if (!this.email) {
        this.emailAlert = true;
        resultadoValidacion = false;
      }
      if (this.email && this.email.length < 5) {
        this.emailAlert = true;
        resultadoValidacion = false;
      }
      if (!this.phone) {
        this.phoneAlert = true;
        resultadoValidacion = false;
      }
      if (!this.dni) {
        this.dniAlert = true;
        resultadoValidacion = false;
      }
      if (!this.message) {
        this.menssageAlert = true;
        resultadoValidacion = false;
      }
      return resultadoValidacion;
    },
  },
};
</script>

<style scoped>
form {
  margin-left: 75px !important;
  margin-right: -96px !important;
}

#title2 {
  font-family: "Lexend Exa";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  margin-bottom: 10px;
  text-align: start;
  color: #ffffff;
  background: none;
  box-shadow: none;
}

input {
  width: 375px;
  height: 48px;
  background: #ffffff;
  border-radius: 0px;
  display: block;
  margin-bottom: 5px;
}

label {
  font-family: "Lexend Exa";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;

  display: block;
  color: #ffffff;
}

#inputMessage {
  width: 375px;
  height: 98px;
  background: #ffffff;
  border-radius: 0px;
  margin-bottom: 10px;
  display: block;
}

.boton {
  text-align: center;
  margin-left: 2px;
}

button {
  width: 171px;
  height: 48px;
  border: none;
  background: #1a579d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px;
  cursor: pointer;
  font-family: "Lexend Exa";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
  margin-left: -84px;
}

button:hover {
  box-shadow: 0 5px 10px 0 #6eb4fa;
  transition: 0.3s;
}

p.error {
  background: white;
  border-radius: 10px;
  box-shadow: none;
  font-size: 12px;
  text-align: left;
  line-height: 14px;
  color: rgb(196, 47, 47);
  display: inline;
  padding: 4px 10px;
}
.col2 {
  margin-left: -94px;
  margin-right: 89px;
}
</style>
