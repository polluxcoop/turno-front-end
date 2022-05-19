<template>
  <body>
    <!-- VISTA 1 -->
    <section v-if="view === 1">
      <div class="container-1">
        <div class="col1">
          <v-date-picker
            v-model="selectedDate"
            :mode="mode"
            title-position="center"
            color="blue"
            locale="es"
            :value="null"
            :masks="{ input: ['YYYY-MM-DD'] }"
            :disabled-dates="dates"
            :attributes="attrs"
            @dayclick="onDayClick"
          ></v-date-picker>
        </div>
        <selects-view
          :available="available"
          @submitForm="handleSubmit"
          key=""
        />
      </div>
    </section>
    <!-- VISTA 2 -->
    <section v-if="view === 2">
      <div class="container">
        <div class="col1">
          <div id="datos">
            <img id="arrow" src=./assets/Arrow.svg alt="arrow" v-on:click="view
            = 1" />

            <h1 id="dato">Datos de la reserva:</h1>
            <p id="time">{{ datosTurno.time }}</p>
            <p id="date">{{ formattedDate }}</p>
          </div>
        </div>
        <form-service @submitForm="handleSubmit" key="" />
      </div>
    </section>
    <!-- VISTA 3 -->
    <section v-if="view === 3">
      <div class="container">
        <div class="col1">
          <h1 class="title">¡Tu reserva se ha realizado con éxito!</h1>
        </div>
        <div class="col2"><img src="./assets/Womenday-rafiki1.svg" /></div>
      </div>
    </section>
  </body>
</template>




<script>
import SelectsView from "./components/SelectsView.vue";
import moment from "moment";
import FormService from "./services/FormService.vue";
const AVAILABLE_SCHEDULES = [
  {
    label: "09:00 hs.",
    value: "09:00 hs.",
  },
  {
    label: "10:00 hs.",
    value: "10:00 hs.",
  },
  {
    label: "11:00 hs.",
    value: "11:00 hs.",
  },
  {
    label: "12:00 hs.",
    value: "12:00 hs.",
  },
  {
    label: "13:00 hs.",
    value: "13:00 hs.",
  },
  {
    label: "14:00 hs.",
    value: "14:00 hs.",
  },
  {
    label: "15:00 hs.",
    value: "15:00 hs.",
  },
  {
    label: "16:00 hs.",
    value: "16:00 hs.",
  },
  {
    label: "17:00 hs.",
    value: "17:00 hs.",
  },
];

export default {
  name: "App",
  components: {
    SelectsView,
    FormService,
  },
  data() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();

    return {
      selectedDate: new Date(),
      mode: "single",
      day: null,
      view: 1,
      date: null,
      time: null,
      available: [],
      formattedDate: null,

      dates: {
        weekdays: [1, 7],
      },

      attrs: [
        {
          key: "today",
          highlight: {
            color: "blue",
            fillMode: "solid",
            contentClass: "italic",
          },
          dates: new Date(year, month, 12),
        },
        {
          key: "today",
          highlight: {
            color: "blue",
            fillMode: "solid",
            contentClass: "italic",
          },
          dates: new Date(year, month, 13),
        },
        {
          key: "today",
          highlight: {
            color: "blue",
            fillMode: "solid",
            contentClass: "italic",
          },
          dates: new Date(year, month, 11),
        },
        {
          key: "today",
          highlight: {
            color: "blue",
            fillMode: "solid",
            contentClass: "italic",
          },
          dates: new Date(year, month, 17),
        },
        {
          key: "today",
          highlight: {
            color: "blue",
            fillMode: "solid",
            contentClass: "italic",
          },
          dates: new Date(year, month, 20),
        },
        {
          key: "today",
          highlight: {
            color: "blue",
            fillMode: "solid",
            contentClass: "italic",
          },
          dates: new Date(year, month, 16),
        },
      ],
    };
  },

  methods: {
    handleSubmit(datos) {
      this.datosTurno = datos;
      this.view = this.view + 1;
    },
    onDayClick() {
      console.log(this.selectedDate);
      this.available = AVAILABLE_SCHEDULES;

      this.formattedDate = moment(this.selectedDate).format("DD-MM-YYYY");
    },
  },
};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@300&display=swap");

* {
  margin: 0;
  padding: 0;
}
.vc-header {
  padding: 10px 0;
}
.vc-title {
  font-family: "Lexend Exa" !important;
  font-weight: bolder !important;
}

.vc-weekday {
  color: rgb(63, 62, 62) !important;
  font-family: "Lexend Exa" !important;
  font-weight: bolder !important;
}
.vc-day-content {
  font-family: "Lexend Exa" !important;
  font-weight: bolder !important;
}
.vc-day-box-center-center {
  text-align: center !important;
}
.vc-svg-icon path {
  color: rgb(63, 62, 62) !important;
}
body {
  overflow: hidden;

  background-repeat: no-repeat;
  background-image: url(@/assets/background.png);
  background-size: cover;
}

section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: rgba(26, 87, 157, 0.5);
  margin-right: 246px;
  margin-left: 246px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}
.container-1 {
  display: flex;
  background: rgba(26, 87, 157, 0.5);
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  border-radius: 8px;
  margin: 21px;
}

/* VISTA 1 */
/* IZQUIERDA */

#arrow,
img {
  width: 480px;
  /*height: 583px;*/
}

/* DERECHA */

.col1 {
  display: flex;
  justify-content: end;
  margin-right: 118px;
  margin-left: 110px;
  align-items: center;
  font-family: "Lexend Exa";
}
.col2 img {
  width: 591px;
  align-items: center;
  height: 583px;
}

button {
  border-style: none;
  width: 171px;
  height: 48px;
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

/* VISTA 2 */
/* IZQUIERDA */

#arrow {
  position: absolute;
  left: 6px;
  top: 135px;
  height: 40px;
  cursor: pointer;
}

#dato {
  font-family: "Lexend Exa";
  align-items: center;
  font-style: normal;
  font-weight: 400 bolder;
  text-align: center;
  color: #ffffff;
  line-height: 79px;
  background: rgba(72, 183, 185, 0.5);
  box-shadow: none;
  font-size: 20px !important;
}
#time {
  background: rgba(72, 183, 185, 0.5) !important;
  box-shadow: none;
  font-size: 20px !important;
}
#date {
  background: rgba(72, 183, 185, 0.5) !important;
  box-shadow: none;
  font-size: 20px !important;
}
p,
h1 {
  font-family: "Lexend Exa";
  align-items: center;
  font-style: normal;
  font-size: 27px;
  font-weight: bolder;
  text-align: center;
  color: #ffffff;
  line-height: 40px;
  width: 485px;
  background: #1a579d;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
}

/* DERECHA */
.title {
  background: none;
  box-shadow: none;
  font-size: 29px !important;
  margin-left: 42px;
}
</style>
