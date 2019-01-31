<template>
   <section>
      <div class="city"> {{city}}, {{country}}</div>
      <div class="date">{{day}} , {{date.getDate()}} {{month}} {{date.getFullYear()}}</div>
   </section>
</template>
  
<script>
import { getDay, getMonth} from '../helper/time.helper'
import { mapState } from 'vuex'

export default {
  name: 'Header',

  computed: {
    ...mapState(['date', 'city', 'country', 'day', 'month']),
  },

  created() {
    this.$store.commit('changeDay', getDay())
    this.$store.commit('changeMonth', getMonth())
  }
}
</script>