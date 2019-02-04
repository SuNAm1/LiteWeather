import * as R from 'ramda'
import { getDay } from './time.helper'

export const setForecastData = function(nextDays) {
   return R.compose(
      R.remove(0, 2),
      R.map(item => ({
      min: item.Temperature.Minimum.Value, 
      max: item.Temperature.Maximum.Value,
      icon: item.Day.Icon,
      day: getDay(item.Date),
   }),
   ))(nextDays)
}