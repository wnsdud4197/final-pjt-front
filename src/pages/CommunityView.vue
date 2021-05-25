<template>
  <div>
    <h1>커뮤니티</h1>
    <div class="container">
      <button @click="onClick">글작성</button>
    </div>
    <CommunityList/>
  </div>
</template>

<script>
import CommunityList from '@/components/CommunityList'

export default {
  name: 'CommunityView',
  components: {
    CommunityList,
  },
  methods: {
    onClick() {
      this.$router.push('/create')
    }
  },
}
</script>

<style>

</style>