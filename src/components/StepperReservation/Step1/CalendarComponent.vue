<template >
  <div class="col1">
    <v-date-picker
      v-show="!loading"
      :timezone="timezone"
      :min-date="new Date()"
      :value="value"
      :mode="mode"
      title-position="center"
      locale="es"
      :masks="{ input: ['YYYY-MM-DD'] }"
      :disabled-dates="{ weekdays: [1, 7] }"
      :attributes="attributes"
      @input="updateValue"
      @update:to-page="loadAttributes"
      ref="input"
    />
    <div
      v-show="loading"
      style="color: white; font-size: 22px; align-items: center"
    >
      Cargando....
    </div>
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
      attributes: [],
      timezone: "America/Buenos_Aires",
      loading: false,
      selectedMonth: 0,
    };
  },

  methods: {
    async loadAttributes(page) {
      if (page.month !== Number(this.selectedMonth)) {
        this.loading = true;
        this.selectedMonth = page.month;
        const startDate = moment()
          .month(page.month - 1)
          .startOf("month")
          .format("YYYY-MM-DD");
        const endDate = moment()
          .month(page.month - 1)
          .endOf("month")
          .format("YYYY-MM-DD");
        const response = await turnosServices.getAvailableDates(
          startDate,
          endDate
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
        this.loading = false;
      }
    },
    updateValue(value) {
      if (value) {
        this.$emit("input", value);
        this.$emit("onDayClick");
      }
    },
  },
};
</script>

<style scoped>
.vc-header {
  padding: 10px 0;
}
.vc-week {
  color: rgb(20, 19, 19) !important;
}
.vc-weekday {
  color: none !important;
}
.vc-arrow {
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