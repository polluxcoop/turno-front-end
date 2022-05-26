<template>
  <div class="col1">
    <v-date-picker
      :value="value"
      :mode="mode"
      title-position="center"
      color="blue"
      locale="es"
      :masks="{ input: ['YYYY-MM-DD'] }"
      :disabled-dates="disabledDates"
      :attributes="attrs"
      @dayclick="onDayClick"
      @input="updateValue"
      ref="input"
    />
  </div>
</template>

<script>
// import moment from "moment";
import vModelMixin from "../../mixins/vModelMixin";
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();

export default {
  name: "Step1CalendarComponent",
  props: {
    value: {
      type: [Date, String],
      required: true,
    },
    mode: {
      type: String,
      default: "single",
    },
    disabledDates: {
      type: [Object, Function],
      default: () => ({ weekdays: [1, 7] }),
    },
  },
  mixins: [vModelMixin],
  data() {
    return {
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
    onDayClick() {
      // this.$emit('next')
      // console.log(this.value);
      // this.available = AVAILABLE_SCHEDULES;
      // this.formattedDate = moment(this.selectedDate).format("DD-MM-YYYY");
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