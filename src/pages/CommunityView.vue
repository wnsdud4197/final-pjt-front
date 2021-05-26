<template>
  <div class="my-3">
    <button @click="onClick" class="btn btn-outline-primary">글작성</button>
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