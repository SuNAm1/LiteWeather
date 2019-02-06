const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
const shortDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT" ]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ]
// export const API = 'http://api.openweathermap.org/data/2.5/weather?units=metric'
// export const KEY = '&APPID=390e4e6a63e039237f1b345548b99954'
//export const url = 'http://api.openweathermap.org/data/2.5/weather?q=tehran&units=metric&APPID=390e4e6a63e039237f1b345548b99954'

export const getDay = (date = null) => days[new Date(date).getDay()]

export const getMonth = () => months[new Date().getMonth()]

export const getTime = milisecond =>
   new Date(milisecond).toLocaleTimeString("en-GB").slice(0,5)

export const getTheme = function(date, isDay, isCard) {
   if (isCard) return isDay ? 'card-day': 'card-night'
   return isDay ? 'container-day': 'container-night'
}

export const getForecastTheme = function(date, isDay, section) {
   if (section == 'min') return isDay ? 'min-day': 'min-night'
   if (section == 'max') return isDay ? 'max-day': 'max-night'
   return isDay ? 'forecast-item-day': 'forecast-item-night'
} 

export const getShortDay = (date = null) => shortDays[new Date(date).getDay()]