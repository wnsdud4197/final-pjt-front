<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item my-3"
        v-for="(community, idx) in communityList"
        :key="idx"
        @click="onClick(community)"
      >
        <div class="d-flex justify-content-evenly mx-5">
          <div>{{ community.title }}</div>
          <div>⌚ {{ $moment(community.created_at).format("YYYY년 MM월 DD일 HH : MM") }}</div>
        </div>        
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CommunityList',
  computed: {
    communityList() {
      // return this.$store.getters.getCommunityList
      return this.$store.getters.getArticleMovie
    }
  },
  async created() {
    this.$store.dispatch('FETCH_COMMUNITY_LIST')
  },
  methods: {
    onClick(commuinty) {
      this.$store.commit('CREATE_ARTICLE', commuinty)
      this.$router.push('/detail')
    },
  },
}
</script>

<style>
ul {
  text-align: center;
}
li {
  display: inline-block;
  width: 75%;
}
</style>