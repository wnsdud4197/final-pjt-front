<template>
  <div>
    <h1>무비</h1>
    <MovieSearch/>
    <MovieList/>
  </div>
</template>

<script>
import MovieSearch from '@/components/MovieSearch'
import MovieList from '@/components/MovieList'

export default {
  name: 'MovieView',
  components: {
    MovieSearch,
    MovieList,
  }
}
</script>

<style>

</style>