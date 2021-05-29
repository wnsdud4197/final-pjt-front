<template>
  <div class="container my-3">
    <table class="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col"><h4>#</h4></th>
          <th scope="col"><h4>글 제목</h4></th>
          <th scope="col"><h4>작성자</h4></th>
          <th scope="col"><h4>작성시간</h4></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(community, idx) in communityList"
          :key="idx"
          @click="onClick(community)"
        >
          <th scope="row"><h5>{{ community.id }}</h5></th>
          <td><h5>{{ community.title }}</h5></td>
          <td><h5>{{ community.user.username }}</h5></td>
          <td><h5>⌚ {{ $moment(community.created_at).format("YYYY년 MM월 DD일 HH : mm") }}</h5></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'communityList',
  computed: {
    communityList() {
      // return this.$store.getters.getCommunityList
      return this.$store.getters.getArticleMovie
    }
  },
  methods: {
    onClick(commuinty) {
      this.$store.commit('CREATE_ARTICLE', commuinty)
      this.$router.push('/detail')
    },
  },
}
</script>

<style scoped>
tbody {
  cursor: pointer;
}

h4, h5 {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>