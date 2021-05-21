<template>
  <div class="col m-3">
    <div class="card" style="width: 18rem;">
      <img :src="poster_path" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">{{ movie.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieListItem',
  props: {
    movie: {
      type: Object
    }
  },
  computed: {
    poster_path() {
      return `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`
    }
  },
}
</script>

<style>

</style>