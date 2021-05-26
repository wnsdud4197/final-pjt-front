<template>
  <div class="overflow-auto">
    <SignupForm class="h-100"/>
    <div class="background d-flex">
      <img src="@/assets/signup.png" style="width:100%; height: 100%;">
      <!-- <img src="@/assets/signup.png" style="width:100%;"> -->
    </div> 
  </div>
</template>

<script>
import SignupForm from '@/components/SignupForm'

export default {
  name: 'SignupView',
  components: {
    SignupForm,
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

img {
  object-fit: fill;
}
</style>