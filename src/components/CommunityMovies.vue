<template>
  <div class="container my-3">
    <table class="table bg-white">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">글 제목</th>
          <th scope="col">작성자</th>
          <th scope="col">작성시간</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(community, idx) in communityList"
          :key="idx"
          @click="onClick(community)"
        >
          <th scope="row">{{ community.id }}</th>
          <td>{{ community.title }}</td>
          <td>{{ community.user }}</td>
          <td>⌚ {{ $moment(community.created_at).format("YYYY년 MM월 DD일 hh : mm") }}</td>
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
ul {
  text-align: center;
}
li {
  display: inline-block;
  width: 75%;
  cursor: pointer;
}
</style>