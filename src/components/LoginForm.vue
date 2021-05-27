<template>
  <div class="container mt-5 pt-5">
    <div class="d-flex justify-content-center mt-5">
      <div v-if="loginError" class="alert alert-danger error" role="alert" style="width: 40%;">
        <i class="fas fa-exclamation-triangle"></i> 
        이메일이나 비밀번호가 정확하지 않습니다.
      </div>
    </div>

    <div class="d-flex justify-content-center mt-2">
      <div class="box d-flex justify-content-center align-items-center">
        <form>
          <h1 class="h3 mb-4 mt-5 fw-normal fw-bold">로그인</h1>
          <div class="form-floating my-3">
            <input v-model="userInfo.username" type="text" class="form-control" id="username" placeholder="name@example.com">
            <label for="username">유저이름</label>
          </div>
          <div class="form-floating my-3">
            <input v-model="userInfo.password" type="password" class="form-control" id="password" placeholder="Password">
            <label for="password">비밀번호</label>
          </div>
          <button @click.prevent="onClick" class="w-100 btn btn-lg btn-primary my-3" type="submit">로그인</button>
          <p class="mt-5 mb-2 text-white">&copy; SSAFY GJ</p>
        </form>
      </div>
    </div>    
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
  computed: {
    loginError() {
      return this.$store.getters.getLoginError
    }
  },
}
</script>

<style scoped>
  .container {
    height: 100%;
  }

  .box {
    width: 40%;
    height: 27rem;
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