<template>
  <div :class="bg">
      <div :class="period">
        <Header />
        <Middle />
        <Footer />
      </div>
  </div>
</template>

<script>
import { getTheme, API, KEY  } from './helper/time.helper'
import { mapState, mapActions } from 'vuex'
import Header from './components/Header.vue'
import Middle from './components/Middle.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Middle,
    Footer,
  },

  methods: {
    ...mapActions([ 'getWeather' ]),

    geolocation() {
      navigator.geolocation.getCurrentPosition(this.buildUrl, this.geoError);
    },

    buildUrl(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      this.getWeather(API + '&lat=' + lat + '&lon=' + lon + KEY);
    },

    geoError() {
      this.getWeather("http://api.openweathermap.org/data/2.5/weather?zip=94027&units=metric&APPID=390e4e6a63e039237f1b345548b99954");
    }
  },

  beforeMount() {
    this.geolocation()
  },

  computed: {
    ...mapState([
       'date'
    ]),

    period() {
      return getTheme(this.date, true)
    },

    bg() {
      return getTheme(this.date, false)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

body {
  margin: 0
}

.container-day {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #6CB9C8;
}

.container-night {
  width: 100%;
  height: 754px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #484F60;
}

.card-day {
  width: 300px;
  height: 350px;
  background: #9ACED8;
  margin: 50px auto;
  box-shadow: 6px 12px 6px #3E6972;
  border-radius: 10px;
  padding-top: 10px;
}
.card-night {
  width: 300px;
  height: 350px;
  background: #565E6B;
  margin: 50px auto;
  box-shadow: 6px 12px 6px #1B2024;
  border-radius: 10px;
  padding-top: 10px;
}

</style>