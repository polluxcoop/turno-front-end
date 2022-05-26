<template>
  <div class="container">
    <section style="display: flex" v-if="step === 1">
      <Step1CalendarComponent v-model="selectedDate" @onDayClick="onDayClick" />
      <Step1HoursAvailable
        :available="available"
        v-if="available.length > 0"
        @next="next"
        @submitForm="handleSubmit"
      />
      <!-- <div
        v-if="this.selectedDate !== null"
        style="color: red; text-align: center"
      >
        No hay horarios disponibles para la fecha seleccionada
      </div> -->
    </section>

    <!-- 
    <div style="color: red; font-size: 18px; text-align: center">
      {{ errorMessage }}
    </div> -->

    <section v-if="step === 2">
      <Step2UserData
        :time="time"
        :formatted-date="formattedDate"
        @back="back"
        @next="next"
      />
    </section>

    <section v-if="step === 3">
      <Step3Congratulations />
    </section>
  </div>
</template>

<script>
import moment from "moment";
import Step1CalendarComponent from "./Step1CalendarComponent";
import Step1HoursAvailable from "./Step1HoursAvailable";
import Step2UserData from "@/components/StepperResevation/Step2UserData";
import { turnosServices } from "@/services/turnosServices";
import Step3Congratulations from "@/components/StepperResevation/Step3Congratulations";

export default {
  name: "StepperReservation",
  components: {
    Step3Congratulations,
    Step2UserData,
    Step1HoursAvailable,
    Step1CalendarComponent,
  },
  data() {
    return {
      selectedDate: null,
      day: null,
      step: 1,
      date: null,
      time: null,
      available: [],
      formattedDate: null,
      datosTurno: null,
      errorMessage: "",
    };
  },
  methods: {
    back() {
      if (this.step > 0) this.step -= 1;
    },
    next() {
      this.step += 1;
    },
    handleSubmit(time) {
      this.time = time.time;
      this.next();
    },
    async onDayClick() {
      try {
        this.formattedDate = moment(this.selectedDate).format("YYYY-MM-DD");
        const response = await turnosServices.getAvailableSlots(
          this.formattedDate
        );
        this.available = response;
      } catch (e) {
        this.errorMessage = `La fecha debe ser igual o posterior al ${moment().format(
          "YYYY-MM-DD"
        )}`;
      }
    },
  },
};
</script >

<style scoped>
.container {
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: rgba(26, 87, 157, 0.5);
  margin-right: 246px;
  margin-left: 246px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}
</style>
