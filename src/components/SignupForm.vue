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
      <div class="mb-3">
        <label for="password-confirmation" class="form-label">비밀번호 확인</label>
        <input v-model="userInfo.password_confirmation" type="password" class="form-control" id="password-confirmation">
      </div>
      <div class="my-4">
        <input ref="image" type="file" @change="onChangeImages"><br>
        <img v-if="imageUrl" :src="imageUrl" style="height: 150px; width: 150px;" class="mt-2">
      </div>
      <button @click.prevent="onClick" type="submit" class="btn btn-primary">회원가입</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignupForm',
  data() {
    return {
      userInfo: {
        username: '',
        password: '',
        password_confirmation: '',
      },
      imageUrl: '',
    }
  },
  methods: {
    onChangeImages(event) {
      const file = event.target.files[0]
      // 이미지 미리보기
      this.imageUrl = URL.createObjectURL(file)
    },
    onClick() {
      // 이미지 담기
      const form = new FormData() 
      const file = this.$refs['image'].files[0]
      form.append('image', file)
      form.append('username', this.userInfo.username)
      form.append('password', this.userInfo.password)
      form.append('password_confirmation', this.userInfo.password_confirmation)
    
      // { header: { 'Content-Type': 'multipart/form-data' }}
      // const userInfo = new FormData()
      // userInfo.append('form', this.form)
      // userInfo.append('others', this.others)
      // this.$store.dispatch('CREATE_USER', this.userInfo)
      this.$store.dispatch('CREATE_USER', form)
      .then(() => {
        this.$router.push('/')
      })      
    },
  },  
}
</script>

<style>

</style>