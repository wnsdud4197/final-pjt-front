<template>
  <div class="home">
    <h1>{{ username }}님 환영합니다.</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  computed: {
    username() {
      const userInfo = this.$store.state.userInfo.username
      console.log(userInfo.username)
      return userInfo
    }
  },
}
</script>
