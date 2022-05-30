<template>
  <div class="col1">
    <v-date-picker
      :min-date="new Date()"
      :value="value"
      :mode="mode"
      color="blue"
      title-position="center"
      locale="es"
      :masks="{ input: ['YYYY-MM-DD'] }"
      :disabled-dates='{ weekdays: [1, 7] }'
      :attributes="attributes"
      @input="updateValue"
      ref="input"
    />
  </div>
   <div v-else style="color: white; font-size: 22px">
        Selecione una fecha del calendario
      </div>
</template>

<script>
import moment from "moment";
import { turnosServices } from "@/services/turnosServices";

export default {
  name: "CalendarComponent",
  props: {
    value: {
      type: [Date, String],
    },
    mode: {
      type: String,
      default: "single",
    },
  },
  data() {
    return {
      startDate: null,
      endDate: null,
      attributes: [],
      loading: false,
    };
  },
  mounted() {
    this.startDate = moment().startOf("month").format("YYYY-MM-DD");
    this.endDate = moment().endOf("month").format("YYYY-MM-DD");

    const nextMonthButton = document.querySelector(
      "body > section > div > section > div > div > div.vc-pane-container > div.vc-arrows-container.title-center > div.vc-arrow.is-right > svg"
    );
    const backMonthButton = document.querySelector(
      "body > section > div > section > div > div > div.vc-pane-container > div.vc-arrows-container.title-center > div.vc-arrow.is-left > svg"
    );
    nextMonthButton.addEventListener("click", this.nextMonth);
    backMonthButton.addEventListener("click", this.backMonth);
    this.loadAttributes();
  },
  methods: {
    async loadAttributes() {
      const response = await turnosServices.getAvailableDates(
        this.startDate,
        this.endDate
      );
      this.attributes = response.map((date) => ({
        key: date,
        highlight: {
          color: "blue",
          fillMode: "solid",
          contentClass: "italic",
        },
        dates: `${date}T12:00:00Z`,
      }));
    },
    nextMonth() {
      this.startDate = moment(this.startDate).add(1, "months");
      this.endDate = moment(this.endDate).add(1, "months");
      this.loadAttributes();
    },
    backMonth() {
      this.startDate = moment(this.startDate).subtract(1, "months");
      this.endDate = moment(this.endDate).subtract(1, "months");
      this.loadAttributes();
    },
    
    updateValue(value) {
      this.$emit("input", value);
      this.$emit("onDayClick");
    },
  },
};
</script>


<style scoped>
.vc-header {
  padding: 10px 0;
}
.vc-week{
   color: rgb(20, 19, 19) !important;
}
.vc-weekday {
  color :none !important;
}
.vc-arrow  {
    color: rgb(20, 19, 19) !important;
}

.vc-day-box-center-center {
  text-align: center !important;
}
.col1 {
  display: flex;
  justify-content: end;
  margin-right: 118px;
  margin-left: 118px;
  align-items: center;
  font-family: "Lexend Exa";
}

</style>