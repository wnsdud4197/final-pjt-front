<template>
  <div>
    <li v-if="updateMode" class="list-group-item d-flex justify-content-between align-items-start">
      <div class="m-0">
        <input v-model="updateComment.content" type="text" class="form-control m-2 col">
      </div>
      <div>
        <button @click="onClickUpdate()" class="btn btn-success m-1">수정</button>
        <button @click="onClickBack()" class="btn btn-danger m-1">취소</button>
      </div>
    </li>
    <li v-else class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold text-start">작성자 | {{ comment.user.username }}</div>
        <div class="text-start">{{ comment.content }}</div>
      </div>
      <div>
        <div v-if="user === comment.user.username">
          <button @click="onClickUpdateMode()" class="btn btn-outline-success m-1">수정</button>
          <button @click="onDeleteClick(comment)" class="btn btn-outline-danger m-1">삭제</button>
        </div>
      </div>
    </li>

    
  </div>
</template>

<script>
export default {
  name: 'CommentList',
  data() {
    return {
      updateMode: false,
      updateComment: {
        id: this.comment.id,
        content: this.comment.content,
      },
      user: localStorage.getItem('user'),
    }
  },
  props: {
    comment: {
      type: Object
    }
  },
  methods: {
    onDeleteClick(comment) {
      this.$store.dispatch('DELETE_COMMENT', comment)
    },
    onClickUpdateMode() {
      this.updateMode = true
    },
    onClickBack() {
      this.updateMode = false
    },
    onClickUpdate() {
      this.$store.dispatch('UPDATE_COMMENT', this.updateComment)
      this.updateMode = false
      this.comment.content = this.updateComment.content
    }
  }
}
</script>

<style>

</style>