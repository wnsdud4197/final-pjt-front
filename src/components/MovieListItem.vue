<template>
  <div class="col m-3">
    <div class="card" style="width: 18rem;" @click="onClick(movie)">
      <img v-if="movie.poster_path" :src="poster_path" class="card-img-top" alt="...">
      <img v-else src="@/assets/zzanggu.png" class="card-img-top" alt="...">
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
.card:hover {
  animation: heartBeat;
  animation-duration: 2s;
  opacity: 0.90;
}
</style>