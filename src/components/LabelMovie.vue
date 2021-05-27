<template>
  <div>
    <div>
      <div class="alert alert-success" role="alert">
        <h2>{{ labelMovie.label }}</h2>
      </div>
    </div>
    <div class="d-flex">
      <MovieListItem
        v-for="(movie, idx) in labelMovie.movie"
        :key="idx"
        :movie="movie"
      />
    </div>
  </div>
</template>

<script>
import MovieListItem from '@/components/MovieListItem'

export default {
  name: "LabelMovie",
  components: {
    MovieListItem
  },
  props: {
    labelMovie: {
      type: Object
    }
  },
}
</script>

<style>

</style>