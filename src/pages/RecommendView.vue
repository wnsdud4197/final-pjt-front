<template>
  <div class="container">
    <MovieRandom class="my-5"/>
    <ImageRecommendBtn/>
  </div>
</template>

<script>
import MovieRandom from '@/components/MovieRandom'
import ImageRecommendBtn from '@/components/ImageRecommendBtn'

export default {
  name: 'RecommendView',
  data() {
    return {
      showImageRecommend: false
    }
  },
  components: {
    MovieRandom,
    ImageRecommendBtn,
  },
}
</script>

<style>

</style>