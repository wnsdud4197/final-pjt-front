<template>
  <div>
    <p>디테일페이지</p>
    <div class="d-flex justify-content-center">
      <div class="mx-5">
        <img :src="poster_path" alt="...">
      </div>      
      
      <div class="box mx-5">
        <div v-if="update">
          <div class="container bg-secondary border rounded mb-3">
            <h1 class="my-2">{{ article.title }}</h1>
          </div>
          <div class="container bg-secondary border rounded">
            <h3 class="my-3">{{ article.content }}</h3>
            <div class="d-flex">
              <p class="mx-3">작성시간 : {{ $moment(article.created_at).format("YYYY년 MM월 DD일") }}</p> 
              <p class="mx-3">마지막 수정시간 : {{ $moment(article.updated_at).format("YYYY년 MM월 DD일") }}</p> 
            </div>
            <div v-if="user === article.user.username" class="my-5">
              <button class="mx-2 btn btn-light" @click="onClickUpdate()">수정</button>
              <button class="mx-2 btn btn-light" @click="onClickDelete()">삭제</button>
            </div>       
          </div> 
        </div>
        <div v-else>
          <div class="mb-3">
            <label for="review-title" class="form-label">리뷰 제목</label>
            <input v-model="article.title" type="text" class="form-control" id="review-title">
          </div>
          <div class="mb-3">
            <label for="review-content" class="form-label">리뷰 내용</label>
            <textarea v-model="article.content" class="form-control" id="review-content" rows="5">
            </textarea>
          </div>
          <div>
            <button class="mx-2 btn btn-light" @click="onClickUpdateServer()">수정</button>
            <button class="mx-2 btn btn-light" @click="onClickBack()">취소</button>
          </div>
        </div>
      </div>      
    </div>    
    <hr>
    <div class="container bg-secondary border rounded">
      <CommentForm/>
      <ol class="list-group list-group-numbered p-3">
        <CommentList
          v-for="(comment, idx) in commentList"
          :key="idx"
          :comment="comment"
        />  
      </ol>
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
  data() {
    return {
      update: true,
      user: localStorage.getItem('user')
    }
  },
  methods: {
    onClickDelete() {
      this.$router.push('/community')
      this.$store.dispatch('DELETE_ARTICLE', this.article)
    },
    onClickUpdate() {
      this.update = false
    },
    onClickBack() {
      this.update = true
    },
    onClickUpdateServer() {
      this.$store.dispatch('UPDATE_ARTICLE', this.article)
      this.update = true
    }
  },
  computed: {
    article() {
      return this.$store.getters.getArticle
    },
    poster_path() {
      return `https://image.tmdb.org/t/p/w500/${this.article.movie.poster_path}`
    },
    commentList() {
      return this.$store.getters.getCommentList
    }
  },
  created() {
    if (!this.$store.getters.getArticle) {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
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