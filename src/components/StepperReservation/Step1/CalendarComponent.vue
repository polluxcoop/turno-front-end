<template>
  <div class="col1">
    <v-date-picker
      v-model="range"
      :min-date="new Date()"
      :value="value"
      :mode="mode"
      :disabled-dates="[
        {
          start: null,
          end: new Date(2022, 6, 31),
        },
        {
          start: new Date(2022, 6, 1),
          end: null,
        },
      ]"
      title-position="center"
      locale="es"
      :masks="{ input: ['YYYY-MM-DD'] }"
      :key="calendarKey"
      :attributes="attrs"
      @input="updateValue"
      ref="input"
      is-range
    />
  </div>
</template>

<script>
import moment from "moment";
import vModelMixin from "../../../mixins/vModelMixin";
import { turnosServices } from "@/services/turnosServices";
// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();

export default {
  name: "CalendarComponent",
  props: {
    // value: {
    //   type: [Date, String],
    //   required: true,
    // },
    mode: {
      type: String,
      default: "single",
    },
    disabledDates: {
      type: [Object, Function],
      default: () => moment("2022-06-02").toDate(),
    },
  },
  mixins: [vModelMixin],
  data() {
    return {
      calendarKey: 0,
      availableDates: [moment("2022-06-02").toDate()],
      range: {
        start: new Date(),
        end: new Date(),
      },
      attrs: [
        {
          // highlight: {
          //   color: "green",
          //   fillMode: "solid",
          //   contentClass: "italic",
          // },
          // dates: this.availableDates,
        },
        //     {
        //       key: "today",
        //       highlight: {
        //         color: "blue",
        //         fillMode: "solid",
        //         contentClass: "italic",
        //       },
        //       dates: new Date(year, month, 13),
        //     },
        //     {
        //       key: "today",
        //       highlight: {
        //         color: "blue",
        //         fillMode: "solid",
        //         contentClass: "italic",
        //       },
        //       dates: new Date(year, month, 11),
        //     },
        //     {
        //       key: "today",
        //       highlight: {
        //         color: "blue",
        //         fillMode: "solid",
        //         contentClass: "italic",
        //       },
        //       dates: new Date(year, month, 17),
        //     },
        //     {
        //       key: "today",
        //       highlight: {
        //         color: "blue",
        //         fillMode: "solid",
        //         contentClass: "italic",
        //       },
        //       dates: new Date(year, month, 20),
        //     },
        //     {
        //       key: "today",
        //       highlight: {
        //         color: "blue",
        //         fillMode: "solid",
        //         contentClass: "italic",
        //       },
        //       dates: new Date(year, month, 16),
        //     },
      ],
    };
  },
  watch: {
    range(newVal) {
      const startDate = moment(newVal.start).format("Y-M-D");
      const endDate = moment(newVal.end).format("Y-M-D");
      if (startDate !== endDate) {
        this.onDayClick(startDate, endDate);
      }
    },
  },
  methods: {
    async onDayClick(startDate, endDate) {
      // console.log(this.range.start);
      // console.log(this.range.end);
      const response = await turnosServices.getDates(startDate, endDate);
      this.availableDates = response.map((date) => moment(date).toDate());
      // let attrs = {
      //   highlight: {
      //     color: "green",
      //     fillMode: "solid",
      //     contentClass: "italic",
      //   },
      //   dates: this.availableDates,
      // };
      // this.attrs = [attrs];
      // console.log(this.availableDates);
      this.attrs = response.map((date) => ({
        highlight: {
          color: "green",
          fillMode: "solid",
        },
        dates: moment(date).toDate(),
      }));
      console.log(response);
      this.calendarKey++;
    },
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>


<style scoped>
.vc-header {
  padding: 10px 0;
}

.vc-weekday {
  color: rgb(63, 62, 62) !important;
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