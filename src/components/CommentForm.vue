<template>
  <div>
    <div class="mt-3 ms-2 d-flex ">
      <div class="comment-input">
        <input v-model="comment.content" type="text" class="form-control m-2" id="review-title" placeholder="댓글 작성">
      </div>
      <div class="col-3 d-flex justify-content-center align-items-center">
        <button class="btn btn-outline-light btn-sm" @click="onClick">댓글 작성</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentForm',
  data() {
    return {
      comment: {
        content: '',
      },
    }
  },
  methods: {
    onClick() {
      this.$store.dispatch('CREATE_COMMENT', this.comment)
      this.comment.content = ''
    }
  }
}
</script>

<style scoped>
.comment-input {
  width: 70%;
}
</style>