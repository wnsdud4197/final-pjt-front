<template>
  <div class="container my-3">
    <div v-if="article && Object.keys(article).length" class="d-flex justify-content-center mt-5 pt-5 px-5">
      <div class="mx-5">
        <img :src="poster_path" alt="...">
      </div>      
      
      <div class="box mx-5">
        <div v-if="update">
          <div class="">
            <h2 class="my-2 text-start">{{ article.movie.title }}</h2>
          </div>
          <div class="">
            <h2 class="my-2 text-start">{{ article.title }}</h2>
          </div>
          <div class="">
            
            <h3 class="my-3">{{ article.content }}</h3>
            <p class="mt-5 text-end">작성시간 : {{ $moment(article.created_at).format("YYYY년 MM월 DD일 HH시 mm분") }}</p> 
            <div v-if="user === article.user.username" class="mb-5 text-end">
              <button class="mx-2 px-4 btn btn-success" @click="onClickUpdate()">수정</button>
              <button class="mx-2 px-4 btn btn-danger" @click="onClickDelete()">삭제</button>
            </div>       
          </div> 
        </div>
        <div v-else>
          <div class="mb-3 text-start">
            <label for="review-title" class="form-label"><h3>리뷰 제목</h3></label>
            <input v-model="article.title" type="text" class="form-control" id="review-title">
          </div>
          <div class="mb-3 text-start">
            <label for="review-content" class="form-label"><h3>리뷰 내용</h3></label>
            <textarea v-model="article.content" class="form-control" id="review-content" rows="5">
            </textarea>
          </div>
          <div class="text-end mb-5">
            <button class="mx-2 px-4 btn btn-success" @click="onClickUpdateServer()">수정</button>
            <button class="mx-2 px-4 btn btn-danger" @click="onClickBack()">취소</button>
          </div>
        </div>
      </div>      
    </div>
    <div class="container mt-5" id="comment-list">
      <CommentForm/>
      <ol class="list-group list-group-numbered p-3 ">
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

h2, h3, p {
  color: #f8f9fa;
}

#comment-list {
  
}
</style>