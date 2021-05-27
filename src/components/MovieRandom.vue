<template>
  <div>
    <div class="card bg-dark text-white">
      <img src="@/assets/background.jpg" class="card-img" alt="...">
      <div class="card-img-overlay d-flex flex-column align-items-center justify-content-center">
        <div class="mb-4">
          <img src="@/assets/random.png" style="width: 80%; height: auto;">
        </div>
        <div>
          <button class="btn" @click="onClick()">
            <h3 class="mx-3">
               Click <i class="fas fa-mouse"></i>
            </h3>
          </button>
        </div>
      </div>
    </div>
    <MovieModal v-if="showModal" @close="closeModal">
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <h3 slot="header">{{ MovieModal.title }}</h3>
    </MovieModal>
  </div>
</template>

<script>
import MovieModal from '@/components/MovieModal'

export default {
  name: 'MovieRandom',
  components: {
    MovieModal,
  },
  data() {
    return {
      movieRandom: [],
    }
  },
  methods: {
    onClick() {
      this.$store.dispatch('FETCH_MOIVE_RANDOM')
      .then(() => {
        this.movieRandom = this.$store.getters.getMovieRandom
        this.$store.dispatch('MOVIE_CHECK', this.movieRandom)
        this.$store.commit('UPDATE_MODAL_MOVIE', this.movieRandom)
        this.$store.commit('SHOW_MODAL')
      })
    },
    closeModal() {
      this.$store.commit('SHOW_MODAL')
    },
  },
  computed: {
    movieList() {
      return this.$store.getters.getMovieList
    },
    MovieModal() {
      return this.$store.getters.getModalMovie
    },
    showModal() {
      return this.$store.getters.getShowModal
    }
  },
}
</script>

<style scoped>
.btn {
  background-color: #2f7cf6 !important;
  opacity: 0.9;
}
</style>