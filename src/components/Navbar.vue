<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container-fluid mx-5">
        <div>
          <router-link to="/"><img src="@/assets/Logo.png" style="height: 55px;"></router-link>
        </div>
        <div v-if="!isLoggedIn" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item mx-2">
              <router-link to="/signup">
                <button class="btn btn-outline-white signup-button px-4">Signup</button> 
              </router-link>
            </li>
            <li class="nav-item mx-1">
              <router-link to="/login">
                <button class="btn btn-outline-secondary px-4">Login</button>
              </router-link>
            </li>
          </ul>
        </div>
        <div v-else id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item mx-2">
              <router-link to="/movie" id="nav-btn">Movie</router-link>
            </li>
            <li class="nav-item mx-2">
              <router-link to="/recommend" id="nav-btn">Recommend</router-link>
            </li>
            <li class="nav-item mx-2">
              <router-link to="/community" id="nav-btn">Community</router-link>
            </li>
            <li class="nav-item mx-4">
              <router-link to="" id="nav-btn" @click.native="logout">
                <button class="btn btn-outline-danger" style="height: 55%; width: 120%; font-size: 85%;">Logout</button> 
              </router-link>
            </li>
            <li class="nav-item ms-1">
              <router-link to="/profile" class="profile" id="nav-btn">
                <img v-if="profile === 'http://localhost:8000'" src="@/assets/profile.png" alt="" class="profileimage border border-3 rounded-circle">
                <img v-else :src="profile" alt="" class="profileimage border border-3 rounded-circle">          
              </router-link>
            </li>          
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      imageURL: this.$store.getters.getImageUrl,
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated
    },
    profile() {
      return `http://localhost:8000${this.$store.getters.getImageUrl}`
    },
  },
  methods: {
    logout() {
      this.$store.commit('AUTH_LOGOUT')
      this.$router.push('/login')
    }
  },
}
</script>

<style>
nav {
  background-color: #000000;
  height: 60px;
  z-index: 1000;
}

#nav {
  position: fixed;
  z-index: 1000;
}

#nav-btn {
  font-weight: bold;
  color: #2c3e50;
  line-height: 60px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.profile {
  /* position: absolute; */
  right: 2rem;
}

.profileimage {
  height: 3rem;
  width: 3rem;
}

.signup-button {
  background-color: #c490bf;
  border-radius: 5px;
  /* border-color: #a73b90; */
}

.signup-button:hover {
  background-color: #a73b90;
  color: #f8f9fa;
}
</style>