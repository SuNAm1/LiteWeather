// modules
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// helper
import { getTime } from './helper/time.helper'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentTemp: '',
    minTemp: '',
    maxTemp:'',
    sunrise: '',
    sunset: '',
    humidity: '',
    wind: '',
    overcast: '',
    icon: '',
    city: '',
    country: '',
    day: '',
    month: '',
    date: new Date(),
  },

  mutations: {
    changeDay(state, day) {
      state.day = day
    },
    changeMonth(state, month) {
      state.month = month
    },
    changeCurrentTemp(state, currentTemp) {
      state.currentTemp = currentTemp
    },
    changeMinTemp(state, minTemp) {
      state.minTemp = minTemp
    },
    changeMaxTemp(state, maxTemp) {
      state.maxTemp = maxTemp
    },
    changeHumidity(state, humidity) {
      state.humidity = humidity
    },
    changeWind(state, wind) {
      state.wind = wind
    },
    changeOvercast(state, overcast) {
      state.overcast = overcast
    },
    changeIcon(state, icon) {
      state.icon = icon
    },
    changeSunrise(state, sunrise) {
      state.sunrise = sunrise
    },
    changeSunset(state, sunset) {
      state.sunset = sunset
    },
    changeCity(state, city) {
      state.city = city
    },
    changeCountry(state, country) {
      state.country = country
    },
  },
  actions: {
    getWeather({ commit } /* , url */) {
      axios
        .get('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=tehran&units=metric&APPID=390e4e6a63e039237f1b345548b99954')
        .then(({ data: { main, sys, wind, weather, name } }) => {
          commit('changeCurrentTemp', Math.floor(main.temp))
          commit('changeMinTemp', main.temp_min)
          commit('changeMaxTemp', main.temp_max)
          commit('changeHumidity', main.humidity + '%')
          commit('changeWind', wind.speed + 'm/s')
          commit('changeOvercast', weather[0].description)
          commit('changeIcon', require("./assets/" + weather[0].icon.slice(0, 2) + ".svg"))
          commit('changeSunrise', getTime(sys.sunrise*1000))
          commit('changeSunset', getTime(sys.sunset*1000))
          commit('changeCity', name)
          commit('changeCountry', sys.country)
      })
      .catch(console.log)
    }
  }
})
