<template>
  <div>
    <p>디테일페이지</p>
    <div class="d-flex justify-content-center">
      <div class="mx-5">
        <img :src="poster_path" alt="...">
      </div>      
      <div class="box mx-5">
        <div class="container bg-secondary border rounded mb-3">
          <h1 class="my-2">{{ article.title }}</h1>
        </div>
        <div class="container bg-secondary border rounded">
          <h3 class="my-3">{{ article.content }}</h3>
          <div class="d-flex">
            <p class="mx-3">작성시간 : {{ $moment(article.created_at).format("YYYY년 MM월 DD일") }}</p> 
            <p class="mx-3">마지막 수정시간 : {{ $moment(article.updated_at).format("YYYY년 MM월 DD일") }}</p> 
          </div>
        </div> 
        <div class="my-5">
          <button class="mx-2" @click="onClickUpdate()">수정</button>
          <button class="mx-2" @click="onClickDelete()">삭제</button>
        </div>       
      </div>      
    </div>    
    <hr>
    <div class="container bg-secondary border rounded">
      <p>댓글</p>
      <CommentForm/>
      <CommentList/>
    </div>
  </div>
</template>

<script>
import CommentForm from '@/components/CommentForm'
import CommentList from '@/components/CommentList'

export default {
  name: 'CommunityDetail',
  components: {
    CommentForm,
    CommentList,
  },
  methods: {
    onClickDelete() {
      this.$store.dispatch('DELETE_ARTICLE', this.article)
      .then(() => {
        this.$router.push('/community')
      })
    },
    onClickUpdate() {
      this.$store.dispatch('UPDATE_ARTICLE', this.article)
    },
  },
  computed: {
    article() {
      return this.$store.getters.getArticle
    },
    poster_path() {
      return `https://image.tmdb.org/t/p/w500/${this.article.movie.poster_path}`
    },
  }
}
</script>

<style>
p {
  margin-left: 0;
  margin-right: 0;
}

.box {
  width: 600px;
}

img {
  height: 20rem;
}

h1, h3 {
  text-align: left;
  margin-top: 0;
  margin-bottom: 0;
}
</style>