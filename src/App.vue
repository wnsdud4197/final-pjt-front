<template>
  <div id="app">    
    <Navbar/>
    <router-view class="body"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar,
  },  
  data() {
    return {
      imageURL: '',
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
  created() {
    this.imageURL = localStorage.getItem('image')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  height: 100%;
}

.body {
  padding-top: 60px;
}
</style>
