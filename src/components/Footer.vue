<template>
   <section>
      <div class="des">{{overcast}}</div>
      <div class="Bottom">
          <div class="left">
            <abbr title="Humidity"> <img src="../assets/humidity.svg"> </abbr> {{humidity}}
            
          </div>

          <div class="mid">
            <img :src="icon" :alt="icon"> 
          </div>

          <div class="right">
            <abbr title="Wind Speed"> <img src="../assets/wind.svg"> </abbr> {{wind}} 
          </div> 
        </div>
        <div class="share">
          <abbr title="Share Weather"><button @click="sendWeather">
            <img src="../assets/share.svg"></button> </abbr>  
        </div>
   </section>
</template>
  
<script>
import { mapState } from 'vuex'

export default {
  name: 'Footer',

  methods: {
    sendWeather() {
      return {
        overcast: this.overcast,
        currentTemp: this.currentTemp,
        icon: this.icon,
        minTemp: this.minTemp,
        maxTemp: this.maxTemp,
      }
    }
  },

  computed: {
    ...mapState(['overcast', 'humidity', 'wind','icon', 'sunrise', 'sunset']),
  },
}
</script>

<style scoped>
  
.des {
  color: white;
  font-family: Segoe UI;
  text-align: center;
  font-size: 27px;
}

.des:first-letter {
  text-transform: uppercase;
}

.more {
  display: flex;
}

.Bottom {
    width: 100%;
    padding-top: 5px;
    display: flex;
    justify-content: space-evenly;
}

.left { 
  font-family: Segoe UI;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5px;
}

.left img {
  vertical-align: middle;
}

.mid {
  color: rgba(255, 255, 255, 0.75);
}

.mid img {
  width: 130px;
  height: 130px;
  vertical-align: middle;
  margin-left: 17px;
}

.right {
  font-family: Segoe UI;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.right img {
  vertical-align: middle;  
}

.share {
  margin: 0 auto;
  margin-left: 15px;
  margin-bottom: 10px;
  margin-top: -20px;
}

button {
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  overflow: hidden;
  outline:none;
}
</style>