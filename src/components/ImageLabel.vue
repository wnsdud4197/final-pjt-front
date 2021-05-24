<template>
  <div class="border rounded" style="background-color: #eee;">
    <div class="d-flex justify-content-between">
      <h3>{{ label.label }}</h3>
      <p>{{ score }}%</p>
    </div>
    <div class="progress">
      <div class="progress-bar bg-success" role="progressbar" :style="scoreProgress" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageLabel',
  props: {
    label: {
      type: Object
    }
  },
  computed: {
    score() {
      return Math.round(this.label.score * 100)
    },
    scoreProgress() {
      return {
        width: Math.round(this.label.score * 100) + "%"
      }
    }
  }
}
</script>

<style scope>

</style>