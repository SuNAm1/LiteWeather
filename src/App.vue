<template>
  <div class="container-base" :class="container">
    <div :class="currentCard" v-if="!loading">
      <Header />
      <Middle />
      <Footer />
    </div>
    <Loading v-if="loading"> </Loading>
    <div class="forecast-panel">
      <div :class='forecastItem' v-for="item in forecastData" :key="item.day">
        <ForecastCard :item="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import { getTheme, getForecastTheme } from './helper/time.helper'
import { mapState, mapActions } from 'vuex'
import Header from './components/Header.vue'
import Middle from './components/Middle.vue'
import Footer from './components/Footer.vue'
import Loading from './components/Loading.vue'
import ForecastCard from './components/ForecastCard.vue'

export default {
  components: {
    Header,
    Middle,
    Footer,
    Loading,
    ForecastCard,
  },

  methods: {
    ...mapActions([ 'getWeather', 'getForecasts' ]),

    // geolocation() {
    //   navigator.geolocation.getCurrentPosition(this.buildUrl, this.geoError);
    // },

    // buildUrl(position) {
    //   const lat = position.coords.latitude;
    //   const lon = position.coords.longitude;

    //   this.getWeather(API + '&lat=' + lat + '&lon=' + lon + KEY);
    // },

    // geoError() {
    //   this.getWeather("http://api.openweathermap.org/data/2.5/weather?zip=94027&units=metric&APPID=390e4e6a63e039237f1b345548b99954");
    // }
  },

  beforeMount() {
    // this.geolocation()
    this.$store.dispatch('getWeather')
  },

  computed: {
    ...mapState(['date','loading','forecastData', 'isDay']),

    currentCard() {
      return getTheme(this.date, this.isDay, true)
    },

    container() {
      return getTheme(this.date, this.isDay, false)
    },
    forecastItem() {
      return getForecastTheme(this.date, this.isDay)
    },
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

body {
  margin: 0px;
}

.container-base {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container-day {
  background: #6CB9C8;
}

.container-night {
  background: #484F60;
}

.card-day {
  margin-top: 50px;
  width: 300px;
  background: #9ACED8;
  margin: 50px auto;
  box-shadow: 6px 12px 6px #3E6972;
  border-radius: 10px;
  padding-top: 10px;
}
.card-night {
  margin-top: 50px;
  width: 300px;
  background: #565E6B;
  margin: 50px auto;
  box-shadow: 6px 12px 6px #1B2024;
  border-radius: 10px;
  padding-top: 10px;
}

.days {
   display: flex;
   justify-content: center;
   flex-direction: row;
}

.forecast-panel {
  text-align: center;
  width: 300px;
  height: 134px;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;
}

.forecast-item-day {
  width: 60px;
  height: 134px;
  display: flex;
  color: white;
  font-family: roboto;
  flex-direction: row;
}

.forecast-item-night {
  width: 60px;
  height: 134px;
  display: flex;
  color: white;
  font-family: roboto;
  flex-direction: row;
}

.forecast-item-day:nth-child(even) {
  background: #6DB9C6;
}

.forecast-item-night:nth-child(even) {
  background: #606D7B;
}

.forecast-item-day:nth-child(odd) {
  background: #9BCDD7;
}

.forecast-item-night:nth-child(odd) {
  background: #565E6B;
}

.forecast-item-day:first-child {
  border-top-left-radius: 10px; 
  border-bottom-left-radius: 10px; 
}

.forecast-item-night:first-child {
  border-top-left-radius: 10px; 
  border-bottom-left-radius: 10px; 
}

.forecast-item-day:last-child {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;       
}

.forecast-item-night:last-child {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;       
}
</style>