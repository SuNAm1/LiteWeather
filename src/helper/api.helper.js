import * as R from "ramda";
import { getShortDay } from "./time.helper";

export const setForecastData = function(nextDays) {
  return R.compose(
    R.map(
      ({ Temperature, Day, Date }) => ({
        min: Math.floor(Temperature.Minimum.Value),
        max: Math.floor(Temperature.Maximum.Value),
        icon: Day.Icon,
        day: getShortDay(Date)
      })
      // ,
      // R.remove(0, 2),
    )
  )(nextDays);
};
