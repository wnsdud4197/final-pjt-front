<template>
  <div>
    <div class="mb-3">
      <label for="formFile" class="form-label">Default file input example</label>
      <input ref="recommend" class="form-control" type="file" id="formFile">
    </div>
    <button class="btn btn-outline-info" @click="onClick">이미지로 추천받기!</button>
    <ImageLabel
      v-for="(label, idx) in labels"
      :key="idx"
      :label="label"
    />
  </div>
</template>

<script>
import ImageLabel from '@/components/ImageLabel'
export default {
  name: 'ImageRecommend',
  data() {
    return {
      labels: [],
    }
  },
  components: {
    ImageLabel
  },
  methods: {
    onClick() {
      const form = new FormData() 
      const file = this.$refs['recommend'].files[0]
      form.append('image', file)
      this.$store.dispatch('FETCH_IMAGE_ANALYZE', form)
        .then(() => {
          this.labels = this.$store.getters.getLabels
        })
    },
  }
}
</script>

<style>

</style>