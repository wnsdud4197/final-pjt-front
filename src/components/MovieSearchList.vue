<template>
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
</template>

<script>
import MovieListItem from '@/components/MovieListItem'
import MovieModal from '@/components/MovieModal'

export default {
  name: 'MovieSearchList',
  components: {
    MovieListItem,
    MovieModal,
  },
  data() {
    return {
      modalMovie: [],
    }
  },
  methods: {
    closeModal() {
      this.$store.commit('SHOW_MODAL')
    }
  },
  computed: {
    movieList() {
      return this.$store.getters.getSearchMovieList
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