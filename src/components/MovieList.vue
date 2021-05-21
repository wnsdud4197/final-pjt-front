<template>
  <div class="row">
    <MovieListItem
      v-for="movie in movieList"
      :key="movie.id"
      :movie="movie"
    />
  </div>
</template>

<script>
import MovieListItem from '@/components/MovieListItem'

export default {
  name: 'MovieList',
  components: {
    MovieListItem
  },
  computed: {
    movieList() {
      return this.$store.getters.getMovieList
    }
  }
}
</script>

<style>

</style>