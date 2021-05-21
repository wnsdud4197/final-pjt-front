<template>
  <div class="col">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <p class="card-text">{{ categoryItem.name }}</p>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <p class="card-text">{{ categoryItem.movie_count }}</p>
      </div>
    </div>
    <p></p>
  </div>
</template>

<script>
export default {
  name: 'MovieCategory',
  props: {
    categoryItem: {
      type: Object
    }
  }
}
</script>

<style>

</style>