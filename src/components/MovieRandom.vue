<template>
  <div>
    <div class="card bg-dark text-white">
      <img src="@/assets/background.jpg" class="card-img" alt="...">
      <div class="card-img-overlay d-flex align-items-center justify-content-center">
        <button class="btn btn-white" @click="onClick()">
          <img src="@/assets/random.png" style="width: 80%;">
        </button>
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
        // console.log(this.movieRandom.title)
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

<style>

</style>