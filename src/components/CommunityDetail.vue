<template>
  <div>
    <p>디테일페이지</p>
    <div class="container bg-secondary border rounded">
      {{ article }}
      

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
  computed: {
    article() {
      return this.$store.getters.getArticle
    },
  }
}
</script>

<style>

</style>