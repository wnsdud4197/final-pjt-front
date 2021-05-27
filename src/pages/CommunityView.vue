<template>
  <div class="container my-3">
    <div class="text-end">
      <button @click="onClick" class="btn btn-outline-white mt-5 mb-3 mx-3">
        <h3 class="my-1 mx-3 fw-bold">글작성 <i class="fas fa-pen-nib"></i></h3>
      </button>
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

<style scoped>
button {
  color: #f8f9fa;
  border: 1px solid;
}

button:hover {
  background-color: #d3d3d3;
}
</style>