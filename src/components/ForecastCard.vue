<template>
  <div class="container">
    <p class="text">{{item.day}}</p>
    <img :src="`./assets/${item.icon}.svg`">
    <div temps>
      <div :class="max">{{item.max}}</div>
      <div :class="min">{{item.min}}</div>
    </div>
  </div>
</template>

<script>
import { getForecastTheme } from "../helper/time.helper";
import { mapState } from "vuex";

export default {
  name: "ForecastCard",
  props: ["item"],

  computed: {
    ...mapState(["isDay"]),
    max() {
      return getForecastTheme(this.date, this.isDay, "max");
    },
    min() {
      return getForecastTheme(this.date, this.isDay, "min");
    }
  }
};
</script>

<style scoped>
.container {
  width: 60px;
  height: 134px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text {
  margin: 8px 0px 0px 0px;
  font-family: roboto;
  font-size: 15px;
}

.min-day {
  background: #4e98a6;
  width: 42px;
  height: 25px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: 0px 9px 7.4px 9px;
}

.min-night {
  background: #656c74;
  width: 42px;
  height: 25px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: 0px 9px 7.4px 9px;
}

.max-day {
  background: #074b58;
  width: 42px;
  height: 25px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin: 0px 9px;
}

.max-night {
  background: #4d565f;
  width: 42px;
  height: 25px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin: 0px 9px;
}

img {
  margin-top: -5px;
}
</style>