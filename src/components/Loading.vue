<template>
      <div class="load-4">
         <div class="ring-1"></div>
      </div>
</template>

<style>
.ring-1 {
    width: 70px;
    height: 70px;
    margin: 0 auto;
    padding: 10px;
    border: 7px dashed #4b9cdb;
    border-radius: 100%;
}

.load-4 .ring-1 {animation: loadingD 1.5s .3s cubic-bezier(.17,.37,.43,.67) infinite;}

@keyframes loadingD {
    0% {transform: rotate(0deg);}
    50% {transform: rotate(180deg);}
    100% {transform: rotate(360deg);}
}
</style>