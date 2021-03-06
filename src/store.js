// modules
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
// helper
//import { getTime } from './helper/time.helper'
import { setForecastData } from "./helper/api.helper";

Vue.use(Vuex);

const APIKeys = [
  "dlvy0XdTc4RtJlM0vaZtHkV6j33PAvCp",
  "OfWFrZZZQYAO5LFH00vcY7yYWUHPAwZA",
  "lFuSK9wOmnkBHgxS4fYwIrcikInYgYUL",
  "axUS5QYKVes7MHRtW9Fn9GAt9CSPhm6O",
  "mGqmK8sqeUGhuRKAveOFZ86cEhAPiNAd",
  "g2XxGTm8w9qkGAkzBY7ZdwHoKaIXxEOe"
];

const getCurrentConditionURL = APIKey =>
  `https://dataservice.accuweather.com/currentconditions/v1/210841?apikey=${APIKey}&details=true`;

const getForecastsURL = APIKey =>
  `https://dataservice.accuweather.com/forecasts/v1/daily/5day/210841?apikey=${APIKey}&metric=true`;

const requestAndGetWeatherData = getURLFunction =>
  new Promise((resolve, reject) => {
    const requestForData = APIKeyIndex => {
      if (APIKeyIndex >= APIKeyIndex.length) reject("Request limit exceeded!");
      axios
        .get(getURLFunction(APIKeys[APIKeyIndex]))
        .then(resolve)
        .catch(() => requestForData(APIKeyIndex + 1));
    };

    requestForData(0);
  });

export default new Vuex.Store({
  state: {
    currentTemp: "",
    minTemp: "",
    maxTemp: "",
    sunrise: "",
    sunset: "",
    humidity: "",
    wind: "",
    overcast: "",
    icon: "",
    city: "",
    country: "",
    day: "",
    month: "",
    date: new Date(),
    loading: true,
    forecastData: [],
    isDay: false
  },

  mutations: {
    changeDay(state, day) {
      state.day = day;
    },
    changeMonth(state, month) {
      state.month = month;
    },
    changeCurrentTemp(state, currentTemp) {
      state.currentTemp = currentTemp;
    },
    changeMinTemp(state, minTemp) {
      state.minTemp = minTemp;
    },
    changeMaxTemp(state, maxTemp) {
      state.maxTemp = maxTemp;
    },
    changeHumidity(state, humidity) {
      state.humidity = humidity;
    },
    changeWind(state, wind) {
      state.wind = wind;
    },
    changeOvercast(state, overcast) {
      state.overcast = overcast;
    },
    changeIcon(state, icon) {
      state.icon = icon;
    },
    changeSunrise(state, sunrise) {
      state.sunrise = sunrise;
    },
    changeSunset(state, sunset) {
      state.sunset = sunset;
    },
    changeCity(state, city) {
      state.city = city;
    },
    changeCountry(state, country) {
      state.country = country;
    },
    changeLoading(state, loading) {
      state.loading = loading;
    },
    changeForecastData(state, forecastData) {
      state.forecastData = forecastData;
    },
    changeIsDay(state, isDay) {
      state.isDay = isDay;
    }
  },
  actions: {
    getWeather({ commit } /* , url */) {
      requestAndGetWeatherData(getCurrentConditionURL)
        .then(response => {
          //{ data: { WeatherText, /*WeatherIcon, */Temperature, Past24HourRange, RelativeHumidity, Wind  } }
          commit("changeIsDay", response.data[0].IsDayTime);
          commit(
            "changeCurrentTemp",
            Math.floor(response.data[0].Temperature.Metric.Value)
          );
          commit(
            "changeMinTemp",
            Math.floor(
              response.data[0].TemperatureSummary.Past24HourRange.Minimum.Metric
                .Value
            )
          );
          commit(
            "changeMaxTemp",
            Math.floor(
              response.data[0].TemperatureSummary.Past24HourRange.Maximum.Metric
                .Value
            )
          );
          commit("changeHumidity", response.data[0].RelativeHumidity + "%");
          commit(
            "changeWind",
            response.data[0].Wind.Speed.Metric.Value + "km/h"
          );
          commit("changeOvercast", response.data[0].WeatherText);
          commit("changeIcon", response.data[0].WeatherIcon);
          //commit('changeSunrise', getTime(sys.sunrise*1000))
          //commit('changeSunset', getTime(sys.sunset*1000))
          //commit('changeCity', name)
          //commit('changeCountry', sys.country)
          commit("changeLoading", false);
          requestAndGetWeatherData(getForecastsURL)
            .then(({ data: { DailyForecasts } }) => {
              commit("changeForecastData", setForecastData(DailyForecasts));
            })
            .catch(console.log);
        })
        .catch(console.log);
    }
  }
});
