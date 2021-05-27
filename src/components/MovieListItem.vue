<template>
  <div class="col m-3">
    <div class="card d-flex justify-content-center ms-2" style="width: 18rem;" @click="onClick(movie)">
      <div style="text-align: center;">
        <img v-if="movie.poster_path" :src="poster_path" class="card-img-top" style="display: block; margin: 0px auto;">
        <img v-else src="@/assets/zzanggu.png" class="card-img-top" style="display: block; margin: 0px auto;">
      </div>      
      <div class="card-body">
        <h4 class="card-text movie-title">{{ movie.title }}</h4>
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
  methods: {
    async onClick(movie) {
      this.$store.dispatch('MOVIE_CHECK', movie)
      this.$store.commit('UPDATE_MODAL_MOVIE', movie)
      this.$store.commit('SHOW_MODAL')
    }
  }
}
</script>

<style scoped>
.card {
  background-color: #2C2F32;
  cursor: pointer;
}

.card:hover {
  animation: heartBeat;
  animation-duration: 2s;
  opacity: 0.90;
}

.movie-title {
  /* background-color: #121212; */
  color: #f8f9fa;
  margin-top: 3px;
  font-weight: bold;
}
</style>