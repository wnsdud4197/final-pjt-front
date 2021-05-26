<template>
  <div>
    <div class="mb-3 p-3 row">
      <input v-model="comment.content" type="text" class="form-control m-2 col" id="review-title" placeholder="댓글 작성">
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
    }
  }
}
</script>

<style>

</style>