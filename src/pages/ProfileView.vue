<template>
  <div>
    <h1>Profile</h1>
    <div class="d-flex align-items-center">
      <div>
        <img :src="profilePicture" alt="">
      </div>
      <div>
        <h2>{{ loginUser }}</h2>
      </div>      
    </div>
    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
      <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" @click="onKeep(loginUser)">
      <label class="btn btn-outline-primary" for="btnradio1">찜한 영화</label>

      <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" @click="onLike(loginUser)">
      <label class="btn btn-outline-primary" for="btnradio2">좋아요한 영화</label>
    </div>
    <div class="row">
      <!-- use the modal component, pass in the prop -->
      <MovieModal v-if="showModal" @close="closeModal">
        <!--
          you can use custom content here to overwrite
          default content
        -->
        <h3 slot="header">{{ MovieModal.title }}</h3>
      </MovieModal>
      <MovieListItem
        v-for="movie in movieList"
        :key="movie.id"
        :movie="movie"
      />
    </div>
    <div>

    </div>
  </div>
</template>

<script>
import MovieListItem from '@/components/MovieListItem'
import MovieModal from '@/components/MovieModal'

export default {
  name: 'ProfileView',
  components: {
    MovieListItem,
    MovieModal,
  },
  data() {
    return {
      keep: [],
      like: [],
      movieList: [],
    }
  },
  methods: {
    onKeep() {
      this.$store.dispatch('USER_KEEP_LIKE', this.loginUser)
      .then(() => {
        this.keep = this.$store.getters.getUserKeepLike.keep_movies
        this.like = this.$store.getters.getUserKeepLike.like_movies
        this.movieList = this.keep
      })
    },
    onLike() {
      this.$store.dispatch('USER_KEEP_LIKE', this.loginUser)
      .then(() => {
        this.keep = this.$store.getters.getUserKeepLike.keep_movies
        this.like = this.$store.getters.getUserKeepLike.like_movies
        this.movieList = this.like
      })
    },
    closeModal() {
      this.$store.commit('SHOW_MODAL')
    },
  },
  computed: {
    profilePicture() {
      return `http://localhost:8000${localStorage.getItem('image')}`
    },
    loginUser() {
      return localStorage.getItem('user')
    },
    MovieModal() {
      return this.$store.getters.getModalMovie
    },
    showModal() {
      return this.$store.getters.getShowModal
    },
  }
}
</script>

<style>
h1, h2 {
  color: #d3d3d3;
}
</style>