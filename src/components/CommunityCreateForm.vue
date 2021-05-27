<template>
  <div>
    <p>리뷰할 영화</p>
    <MovieSearchForm/>
    <div class="list-group overflow-auto" style="max-height: 300px">
      <button 
        id="search-movie-list"
        v-for="(searchItem, idx) in searchMovieList"
        :key="idx"
        type="button"
        @click="selectMovie(searchItem)"
        class="list-group-item list-group-item-action"
      >
        {{ searchItem.title }}
      </button>
    </div>
    <div v-if="this.article.movie" class="card" id="review-movie">
      <div class="row g-0 my-3">
        <div class="col-4" id="review-movie-image">
          <img :src="tmdbImage + searchMovie.poster_path" height="500px">
        </div>
        <div class="col-8" id="review-movie-info">
          <div class="card-body me-5">
            <h1 class="card-title text-start mt-4">{{ this.searchMovie.title }}</h1>
            <h5 class="card-text text-start mt-4">{{ this.searchMovie.overview }}</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5 mb-5 text-start">
      <label for="review-title" class="form-label"><h2>리뷰 제목</h2></label>
      <input v-model="article.title" type="text" class="form-control" id="review-title" placeholder="리뷰 제목">
    </div>
    <div class="my-3 text-start">
      <label for="review-content" class="form-label"><h2>리뷰 내용</h2></label>
      <textarea v-model="article.content" class="form-control" id="review-content" rows="5" placeholder="리뷰 내용"></textarea>
    </div>
    <button @click="onClick" class="btn btn-outline-light mt-3 mb-3 mx-3">
        <h3 class="my-1 mx-3 fw-bold">리뷰 작성</h3>
      </button>
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

<style scoped>
h2 {
  color: #f8f9fa;
}

#review-title {
  font-size: 20px;
  height: 4rem;
}

#review-content {
  font-size: 20px;
  height: 30rem;
}

#review-movie {
  background-color: #f1f1f2;
}

#search-movie-list {
  background-color: #f1f1f2;
}

</style>