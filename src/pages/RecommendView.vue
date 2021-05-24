<template>
  <div>
    <MovieRandom/>
    <ImageRecommend/>
  </div>
</template>

<script>
import MovieRandom from '@/components/MovieRandom'
import ImageRecommend from '@/components/ImageRecommend'

export default {
  name: 'RecommendView',
  components: {
    MovieRandom,
    ImageRecommend,
  },
}
</script>

<style>

</style>