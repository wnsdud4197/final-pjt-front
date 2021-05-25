<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item"
        v-for="(community, idx) in communityList"
        :key="idx"
      >An item</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CommunityList',
  computed: {
    communityList() {
      return this.$store.getters.getCommunityList
    }
  },
  async created() {
    this.$store.dispatch('FETCH_COMMUNITY_LIST')
  }
}
</script>

<style>

</style>