<template>
  <div class="col">
    <div class="card" style="width: 18rem;">
      <div class="card-body" @click="onClick(categoryItem.id)">
        <h2 class="card-text fw-bold">{{ categoryItem.name }}</h2>
        <p class="card-text">{{ categoryItem.movie_count }}개</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCategory',
  props: {
    categoryItem: {
      type: Object
    }
  },
  methods: {
    onClick(categoryId) {
      if (this.categoryItem.original_language) {
        this.$store.dispatch('FETCH_MOVIE_LANGUAGE_LIST', categoryId)
      } else {
        this.$store.dispatch('FETCH_MOVIE_GENRE_LIST', categoryId)
      }
    },
  }
}
</script>

<style scoped>
.card {
  font-family: 'KyoboHand';
  cursor: pointer;
  background-color: #d3d3d3;
  padding-top: 7px;
  padding-bottom: 7px;
}
</style>