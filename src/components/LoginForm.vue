<template>
  <div class="container">
    <form>
      <div class="mb-3">
        <label for="username" class="form-label">유저이름</label>
        <input v-model="userInfo.username" type="text" class="form-control" id="username" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">비밀번호</label>
        <input v-model="userInfo.password" type="password" class="form-control" id="password">
      </div>
      <button @click.prevent="onClick" type="submit" class="btn btn-success">로그인</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      userInfo: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    onClick() {
      this.$store.dispatch('AUTH_USER', this.userInfo)
      .then(() => {
        this.$router.push('/')
      })   
    },
  },
}
</script>

<style>

</style>