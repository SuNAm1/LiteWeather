<template>
   <div >
      <p>{{item.day}}</p>
      <img src="#">
      <div>{{item.max}}</div>
      <div>{{item.min}}</div>
   </div>
</template>

<script>
export default {
   name: 'ForecastCard',
   props: [
      'item'
   ],
}
</script>

<style scoped>
.days {
   display: flex;
   padding-top: 50px;
}
</style>