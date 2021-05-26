<template>
  <div>
    <h1></h1>
    <div class="d-flex align-items-center justify-content-center my-5">
      <div class="mx-4">
        <img v-if="profilePicture === 'http://localhost:8000null'" src="@/assets/profile.png" style="height: 250px; width: 250px;" class="profileimage border border-3 rounded-circle">
        <img v-else :src="profilePicture" style="height: 250px; width: 250px;" class="profileimage border border-3 rounded-circle">
      </div>
      <div class="mx-4">
        <h2><span style="font-size:40pt; color: #c490bf;" class="fw-bold">{{ loginUser }}</span>님 <i class="fas fa-user"></i></h2>
      </div>      
    </div>
    <div class="btn-group mt-4" role="group" aria-label="Basic radio toggle button group">
      <input type="radio" class="btn-check px-3" name="btnradio" id="btnradio1" autocomplete="off" @click="onKeep(loginUser)">
      <label :class="{ checked: isKeep }" class="btn btn-outline-white check" for="btnradio1">찜한 영화</label>

      <input type="radio" class="btn-check px-3" name="btnradio" id="btnradio2" autocomplete="off" @click="onLike(loginUser)">
      <label :class="{ checked: isLike }" class="btn btn-outline-white check" for="btnradio2">좋아요한 영화</label>
    </div>
    <div class="row" style="background-color: #c490bf;">
      <!-- use the modal component, pass in the prop -->
      <MovieModal v-if="showModal" @close="closeModal">
        <!--
          you can use custom content here to overwrite
          default content
        -->
        <h3 slot="header">{{ MovieModal.title }}</h3>
      </MovieModal>
      <MovieListItem
        class="my-5"
        v-for="movie in movieList"
        :key="movie.id"
        :movie="movie"
      />
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
      isKeep: false,
      isLike: false,
    }
  },
  methods: {
    onKeep() {
      this.$store.dispatch('USER_KEEP_LIKE', this.loginUser)
      .then(() => {
        this.keep = this.$store.getters.getUserKeepLike.keep_movies
        this.like = this.$store.getters.getUserKeepLike.like_movies
        this.movieList = this.keep
        this.isKeep = true
        this.isLike = false
      })
    },
    onLike() {
      this.$store.dispatch('USER_KEEP_LIKE', this.loginUser)
      .then(() => {
        this.keep = this.$store.getters.getUserKeepLike.keep_movies
        this.like = this.$store.getters.getUserKeepLike.like_movies
        this.movieList = this.like
        this.isLike = true
        this.isKeep = false
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

<style scoped>
h1, h2 {
  color: #d3d3d3;
}

.btn-group {
  border-radius: 0;
}

.check {
  border-color: #c490bf;
  color: #c490bf;
}

.check:hover,
.check:focus {
  background-color: #a73b90;
  color: #d3d3d3;
  border-color: #a73b90;
}

.checked {
  background-color: #c490bf;
  color: #121212;
  border-color: #c490bf;
}
</style>