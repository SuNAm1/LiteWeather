<template>
   <section>
      <div class="temps">
          <div class="temp">{{currentTemp}}</div> 

          <div class="temp_right">
            <div class="temp_scale">
                <span>&deg;C</span>
            </div>
            <div class="high"> <img src="../assets/high.svg" alt=""> {{maxTemp}} &deg; </div>
            <div class="low"> <img src="../assets/low.svg"> {{minTemp}} &deg; </div>
          </div>
      </div>
   </section>
</template>
  
<script>
import { mapState } from 'vuex'

export default {
  name: 'Middle',

  computed: {
    ...mapState(['currentTemp', 'maxTemp', 'minTemp']),
  },
}
</script>

<style scoped>
   .temps {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.temp {
  color: rgba(255, 255, 255, 0.75);
  font-family: 'Open Sans';
  font-size: 96px;
}

.temp_right {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.temp_scale {
    padding-top: 5px;
    color: rgba(255, 255, 255, 0.75);
    font-family: 'Open Sans';
    font-size: 26px;
}

.high {
  padding-top: 5px;
  font-family: Segoe UI;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.75);
}

.high img {
  vertical-align: middle;
}

.low {
  font-family: Segoe UI;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.75);
}

.low img {
  vertical-align: middle;
}
     
</style>