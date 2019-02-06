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
           <!-- <img src="../assets/sunrise.svg">{{sunrise}}
            <img src="../assets/sunset.svg">{{sunset}} -->
          </div> 
        </div>
   </section>
</template>
  
<script>
import { mapState } from 'vuex'

export default {
  name: 'Footer',

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
</style>