<template>
  <div>
    <h1>Profile</h1>
    <div class="d-flex align-items-center">
      <img :src="profilePicture" alt="">
      <h2>loginUser</h2>
    </div>
    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
      <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
      <label class="btn btn-outline-primary" for="btnradio1">찜한 영화</label>

      <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
      <label class="btn btn-outline-primary" for="btnradio2">좋아요한 영화</label>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileView',
  computed: {
    profilePicture() {
      return `http://localhost:8000${localStorage.getItem('image')}`
    },
    loginUser() {
      return localStorage.getItem('user')
    }
  }
}
</script>

<style>

</style>