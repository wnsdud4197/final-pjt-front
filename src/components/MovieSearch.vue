<template>
  <div>
    <div class="my-3">
      <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked
          @click="onClickGenre()"
        >
        <label class="btn btn-outline-primary" for="btnradio1">장르별</label>

        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"
          @click="onClickLanguage()"
        >
        <label class="btn btn-outline-primary" for="btnradio2">언어별</label>

        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
        <label class="btn btn-outline-primary" for="btnradio3">전체 영화</label>
      </div>
    </div>
    <MovieSearchForm/>
    <div class="row">
      <MovieCategory
        v-for="categoryItem in category"
        :key="categoryItem.id"
        :categoryItem="categoryItem"
      />
    </div>
  </div>
</template>

<script>
import MovieSearchForm from '@/components/MovieSearchForm'
import MovieCategory from '@/components/MovieCategory'

export default {
  name: 'MovieSearch',
  components: {
    MovieSearchForm,
    MovieCategory,
  },
  data() {
    return {
      category: [],
    }
  },
  methods: {
    onClickLanguage() {
      this.category = this.$store.getters.getLanguageList
    },
    onClickGenre() {
      this.category = this.$store.getters.getGenreList
    }
  },
  async created() {
    this.$store.dispatch('FETCH_GENRE_LIST')
      .then(() => {
        this.category = this.$store.getters.getGenreList
      })
    this.$store.dispatch('FETCH_LANGUAGE_LIST')
  }
}
</script>

<style>

</style>