<template>
  <div>
    <p>리뷰할 영화</p>
    <MovieSearchForm/>
    <div class="list-group overflow-auto" style="max-height: 300px">
      <button 
        v-for="(searchItem, idx) in searchMovieList"
        :key="idx"
        type="button"
        @click="selectMovie(searchItem)"
        class="list-group-item list-group-item-action"
      >
        {{ searchItem.title }}
      </button>
    </div>
    <div v-if="this.article.movie" class="card">
      <div class="row g-0">
        <div class="col-4">
          <img :src="tmdbImage + searchMovie.poster_path" height="500px">
        </div>
        <div class="col-8">
          <div class="card-body">
            <h5 class="card-title">{{ this.searchMovie.title }}</h5>
            <p class="card-text">{{ this.searchMovie.overview }}</p>
          </div>
        </div>
      </div>
    </div>
    <p>리뷰 폼</p>
    <div class="mb-3">
      <label for="review-title" class="form-label">리뷰 제목</label>
      <input v-model="article.title" type="text" class="form-control" id="review-title" placeholder="리뷰 제목">
    </div>
    <div class="mb-3">
      <label for="review-content" class="form-label">리뷰 내용</label>
      <textarea v-model="article.content" class="form-control" id="review-content" rows="5" placeholder="리뷰 내용"></textarea>
    </div>
    <button @click="onClick">리뷰 작성</button>
  </div>
</template>

<script>
import MovieSearchForm from '@/components/MovieSearchForm'

export default {
  name: 'CommunityCreateForm',
  data() {
    return {
      article: {
        title: null,
        content: null,
        movie: null,
      },
      searchMovie: null,
      tmdbImage: 'https://image.tmdb.org/t/p/w500/'
    }
  },
  components: {
    MovieSearchForm,
  },
  methods: {
    onClick() {
      const newArticle = this.article
      
      this.$store.dispatch('CREATE_ARTICLE', newArticle)
        .then(() => {
          this.$router.push('/detail')
        }
      )
    },
    selectMovie(setMovie) {
      this.$store.commit('UPDATE_MODAL_MOVIE', setMovie)
      this.article.movie = setMovie.id
      this.searchMovie = setMovie
    }
  },
  computed: {
    searchMovieList() {
      return this.$store.getters.getSearchMovieList
    },
  }
}
</script>

<style>

</style>