<template>
   <section>
      <div class="des">{{overcast}}</div>
      <div class="Bottom">
          <div class="left">
            <img src="../assets/humidity.svg"> {{humidity}}
            <img src="../assets/wind.svg"> {{wind}}
          </div>

          <div class="mid">
            <img :src="icon" :alt="icon"> 
          </div>

          <div class="right">
            <img src="../assets/sunrise.svg">{{sunrise}}
            <img src="../assets/sunset.svg">{{sunset}}
          </div>
        </div>
   </section>
</template>
  
<script>
import { mapState } from 'vuex'

export default {
  name: 'Middle',

  computed: {
    ...mapState(['overcast', 'humidity', 'wind','icon', 'sunrise', 'sunset']),
  },
}
</script>