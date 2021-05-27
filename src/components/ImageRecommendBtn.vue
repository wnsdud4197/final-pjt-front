<template>
  <div>
    <div class="card bg-dark text-white">
      <img src="@/assets/파랑이.png" class="card-img" alt="...">
      <div class="card-img-overlay d-flex flex-column align-items-center justify-content-center">
        <div class="mb-4">
          <img src="@/assets/image_recom.png" style="width: 80%; height: auto;">
        </div>
        <div>
          <button class="btn"  @click="onClick">
            <h3 class="mx-3">
               Click <i class="fas fa-mouse"></i>
            </h3>
          </button>
        </div>
      </div>
    </div>

    <ImageRecommend class="my-3" v-if="showImageRecommend"/>
  </div>
</template>

<script>
import ImageRecommend from '@/components/ImageRecommend'

export default {
  name: 'ImageRecommendBtn',
  data() {
    return {
      showImageRecommend: false,
    }
  },
  components: {
    ImageRecommend,
  },
  methods: {
    onClick() {
      this.showImageRecommend = true
    }
  }
}
</script>

<style scoped>
.btn {
  background-color: #f6d4f8 !important;
  opacity: 0.9;
}
</style>