<template>
  <div>
    <LoginForm/>
    <div class="background d-flex">
      <img src="@/assets/marvle.png" style="height: 100%;">
      <img src="@/assets/marvle.png" style="height: 100%;">
    </div> 
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'

export default {
  name: 'LoginViews',
  components: {
    LoginForm,
  },
}
</script>

<style scoped>
.background {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.5;
  overflow: hidden;
}
</style>