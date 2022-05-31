<template>
  <div class="container">
    <section style="display: flex" v-if="step === 1">
      <CalendarComponent v-model="selectedDate" @onDayClick="onDayClick" />
      <HoursAvailable
        :available="available"
        :loading="loading"
        @next="next"
        @submitForm="handleSubmit"
      />
    </section>
    <section style="display: flex" v-if="step === 2">
      <UserData
        :time="time | friendlyTime"
        :formatted-date="formattedDate"
        @back="back"
        @next="next"
      />
    </section>
    <section style="display: flex" v-if="step === 3">
      <Congratulations />
    </section>
  </div>
</template>

<script>
import moment from "moment";
import CalendarComponent from "./Step1/CalendarComponent";
import HoursAvailable from "./Step1/HoursAvailable";
import UserData from "@/components/StepperReservation/Step2/UserData";
import { turnosServices } from "@/services/turnosServices";
import Congratulations from "@/components/StepperReservation/Step3/Congratulations";

export default {
  name: "StepperReservation",
  components: {
    Congratulations,
    UserData,
    HoursAvailable,
    CalendarComponent,
  },
  data() {
    return {
      loading: false,
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
  filters: {
    friendlyTime: function (value) {
      if (!value) return "";
      return value.substring(5, -2);
    },
  },
  watch: {
    loading: function () {
      if (this.loading) console.log("true");
      else console.log("false");
    },
  },
  methods: {
    back() {
      if (this.step > 0) this.step -= 1;
      if (this.step === 1) this.available = [];
    },
    next() {
      this.step += 1;
    },
    handleSubmit(time) {
      this.time = time.time;
      this.next();
    },
    async onDayClick() {
      this.loading = true;
      this.available = [];
      try {
        this.formattedDate = moment(this.selectedDate).format("DD-MM-YYYY");
        const response = await turnosServices.getAvailableSlots(
         this.formattedDate
        );
        this.available = response;
        this.loading = false;
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
