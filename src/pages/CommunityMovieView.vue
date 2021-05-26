<template>
  <div>
    <h1>커뮤니티</h1>
    <div class="container">
      <button @click="onClick">글작성</button>
    </div>
    <CommunityMovies/>
  </div>
</template>

<script>
import CommunityMovies from '@/components/CommunityMovies'

export default {
  name: 'CommunityView',
  components: {
    CommunityMovies,
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