<template>
  <div class="col">
    <div class="card" style="width: 18rem;">
      <div class="card-body" @click="onClick(categoryItem.id)">
        <p class="card-text">{{ categoryItem.name }}</p>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <p class="card-text">{{ categoryItem.movie_count }}</p>
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

<style>
.card:hover {
  
}
</style>