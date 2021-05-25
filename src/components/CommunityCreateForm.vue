<template>
  <div>
    <p>리뷰할 영화</p>
    <MovieSearchForm/>
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
        movie: this.$store.state.modalMovie.id,
      }
    }
  },
  components: {
    MovieSearchForm,
  },
  methods: {
    onClick() {
      this.$store.dispatch('CREATE_ARTICLE', this.article)
        .then(
          this.$router.push('/detail')
        )
    }
  }
}
</script>

<style>

</style>