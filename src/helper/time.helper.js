
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ]
// export const API = 'http://api.openweathermap.org/data/2.5/weather?units=metric'
// export const KEY = '&APPID=390e4e6a63e039237f1b345548b99954'
export const url = 'http://api.openweathermap.org/data/2.5/weather?q=tehran&units=metric&APPID=390e4e6a63e039237f1b345548b99954'

export const getDay = function() {
   return days[new Date().getDay()]
}

export const getMonth = function() {
   return months[new Date().getMonth()]
}

export const getTime = function(milisecond) {
   return new Date(milisecond).toLocaleTimeString("en-GB").slice(0,5)
}

export const getTheme = function(date, isCard) {
   const hour = date.getHours()

   if (isCard) return (hour > 5 && hour < 18)? 'card-day': 'card-night'
   return (hour > 5 && hour < 18)? 'container-day': 'container-night'
}