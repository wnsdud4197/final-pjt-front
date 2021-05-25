<template>
  <div>
    <input type="text" v-model="userInput" @input="searchMovie">
    <button class="btn btn-info">x</button>
  </div>
</template>

<script>
export default {
  name: 'MovieSearchForm',
  data() {
    return {
      userInput: '',
      searchMovieList: [],
    }
  },
  methods: {
    searchMovie() {
      this.$store.dispatch('SEARCH_MOVIE', this.userInput)
      .then(
        this.searchMovieList = this.$store.getters.getSearchMovieList
      )
    }
  }
}
</script>

<style>

</style>