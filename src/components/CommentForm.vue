<template>
  <div>
    <div class="mt-3 row">
      <div class="col-1"></div>
      <div class="comment-input col-9">
        <input v-model="comment.content" type="text" class="form-control m-2" id="review-title" placeholder="댓글 작성" style="width: 100%">
      </div>
      <div class="text-start col-1 mt-1">
        <button class="btn btn-outline-light btn" @click="onClick"><i class="fas fa-feather-alt" style="font-size: 30px"></i></button>
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

</style>