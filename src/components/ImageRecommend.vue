<template>
  <div class="container">
    <div class="border rounded" style="width: 70%; heigth:40%;">
      <div class="d-flex justify-content-center m-3" style="width: 100%;">
        <div>
          <div class="m-1">
            <input ref="recommend" class="form-control col-3" type="file" id="formFile" @change="onChangeImages">
          </div>
          <div class="m-1" style="width: 100%;">
            <img v-if="imageUrl" :src="imageUrl" class="input_image">
            <img v-else src="@/assets/not_found.png" alt="" class="input_image">
          </div>
        </div>
        <div>
          <ImageLabel
            v-for="(label, idx) in labels"
            :key="idx"
            :label="label"
          />
        </div>
      </div>
      <div>
        <button class="btn btn-outline-info" @click="onClick">이미지로 추천받기!</button>
      </div>
    </div>
    <div>
      <LabelMovie
        v-for="(labelMovie, idx) in labelMovies"
        :key="idx"
        :labelMovie="labelMovie"
      />

    </div>
  </div>
</template>

<script>
import ImageLabel from '@/components/ImageLabel'
import LabelMovie from '@/components/LabelMovie'

export default {
  name: 'ImageRecommend',
  data() {
    return {
      labels: [],
      imageUrl: null,
      labelMovies: [],
    }
  },
  components: {
    ImageLabel,
    LabelMovie,
  },
  methods: {
    onChangeImages(event) {
      const form = new FormData() 
      const file = event.target.files[0]
      // 이미지 미리보기
      this.imageUrl = URL.createObjectURL(file)
      // const file = this.$refs['recommend'].files[0]
      form.append('image', file)
      this.$store.dispatch('FETCH_IMAGE_ANALYZE', form)
        .then(() => {
          this.labels = this.$store.getters.getLabels
        })
    },
    onClick() {
      if (this.labels.length) {
        this.$store.dispatch('FETCH_MOVIE_IMAGE_ANALYZE', this.labels)
          .then(() => {
            this.labelMovies = this.$store.getters.getLabelMovies
          })
      } else {
        alert('이미지 넣어주세요')
      }
    },
  }
}
</script>

<style>
.input_image {
  width: 30%;
}
</style>