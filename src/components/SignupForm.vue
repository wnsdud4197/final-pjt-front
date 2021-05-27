<template>
  <div class="container pt-4 mt-5">
    <div class="d-flex justify-content-center">
      <div v-if="signupError" class="alert alert-warning error" role="alert" style="width: 40%;">
        <i class="fas fa-exclamation-triangle"></i> 
        입력정보를 확인해주세요.
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="box d-flex mb-5 justify-content-center align-items-center">
        <form>
          <h1 class="h3 mt-4 fw-normal fw-bold">회원가입</h1>
          <div class="form-floating my-3">
            <input v-model="userInfo.username" type="text" class="form-control" id="username" placeholder="name@example.com">
            <label for="username">유저이름</label>
          </div>
          <div class="form-floating my-3">
            <input v-model="userInfo.password" type="password" class="form-control" id="password">
            <label for="password">비밀번호</label>
          </div>
          <div class="form-floating mb-3">            
            <input v-model="userInfo.password_confirmation" type="password" class="form-control" id="password-confirmation">
            <label for="password-confirmation">비밀번호 확인</label>
          </div>
          <div class="my-2">
            <input class="mb-2" ref="image" type="file" @change="onChangeImages"><br>
            <img v-if="imageUrl" :src="imageUrl" style="height: 150px; width: 150px;" class="mt-2">
            <img v-else src="@/assets/profile.png" style="height: 150px; width: 150px;" class="mt-2">
          </div>
          <button @click.prevent="onClick" class="w-100 btn btn-lg btn-success my-3" type="submit">회원가입</button>
          <p class="mt-3 mb-0 text-white">&copy; SSAFY GJ</p>
        </form>
      </div>
    </div>    
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
      signupError: false,
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
      if (file) {
        form.append('image', file)
      }      
      form.append('username', this.userInfo.username)
      form.append('password', this.userInfo.password)
      form.append('password_confirmation', this.userInfo.password_confirmation)
    
      this.$store.dispatch('CREATE_USER', form)
      .then(() => {
        this.$store.dispatch('AUTH_USER', this.userInfo)
        .then(() => {
          this.$router.push('/')
        })
      })
      .catch(() => {
        this.signupError = true
      })      
    },
  },  
}
</script>

<style scoped>
  .container {
    height: 100%;
  }

  .box {
    width: 40%;
    height: 41rem;
    background-color: rgba( 0, 0, 0, 0.8);
  }

  .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
  }

  body {
    height: 100%;
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
  }

  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }

  .form-signin .checkbox {
    font-weight: 400;
  }

  .form-signin .form-floating:focus-within {
    z-index: 2;
  }

  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  form {
    font-family: 'InfinitySans-RegularA1';
    width: 75%;
  }

  .error {
    opacity: 0.9;
  }

  h1 {
    color: #d3d3d3
  }
</style>
