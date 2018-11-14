<template>
  <div id="app">
   
    <div id="nav">
       <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>

   <div class="app-spinner-circle" v-if="spinner.show">
      <spinner-circle :size="36"/>
    </div>

    <transition name="bounce">
      <toast :message="toast.message" v-if="toast.show"/>
    </transition>

  </div>
</template>

<script>
import spinnerCircle from '@/components/spinner-circle'
import toast from '@/components/toast'

export default {
  name: "App",
  data() {
    return {
      spinner: {
        show: false
      },
      toast: {
        message: "",
        show: false
      }
    }
  },
    components: {
    'spinner-circle': spinnerCircle,
    'toast': toast
  }
}
</script>



<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app-spinner-circle {
  position: fixed;
  top: 40%;
  left: 50%;
  margin-top: -18px;
  margin-left: -18px;
  width: 36px;
  height: 36px;
  z-index: 9999;
}
</style>
