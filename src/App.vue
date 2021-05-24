<template>
  <div id="app">
    <div id="nav">
      <div v-if="!isLoggedIn">
        <router-link to="/">Home</router-link> |
        <router-link to="/signup">Signup</router-link> |
        <router-link to="/login">Login</router-link> |
      </div>
      <div v-else>
        <router-link to="/">Home</router-link> |
        <router-link to="" @click.native="logout">Logout</router-link> |
        <router-link to="/movie">Movie</router-link> |
        <router-link to="/recommend">Recommend</router-link> |
        <router-link to="/community">Community</router-link> |
        <router-link to="/profile" class="profile">
          <img :src="profile" alt="" class="profileimage border border-3 rounded-circle">
        </router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated
    },
    profile() {
      return `http://localhost:8000${localStorage.getItem('image')}`
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.profile {
  position: absolute;
  right: 2rem;
}

.profileimage {
  height: 5rem;
  width: 5rem;
}
</style>
