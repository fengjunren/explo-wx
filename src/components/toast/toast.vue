<template>
  <div class="toast">
    <p class="toast-p">{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'toast',
  props: {
    message: {
      type: String
    }
  }
}
</script>

<style scoped>
.toast {  
  background-color: #000;
  color: #fff;
  position: fixed;
  width: 256px;
  max-width: 256px;
  word-wrap: break-word;  
  word-break: normal;
  top: 40%;  
  left: 0;
  right: 0;
  margin: 0 auto; /*水平居中*/
  padding: 8px;
  border-radius: 8px;
  z-index: 1000000;
}
.toast .toast-p {
  text-align: center;
}
</style>
