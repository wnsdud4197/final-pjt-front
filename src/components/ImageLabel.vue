<template>
  <div>
    <p>{{ label.label }}, {{ label.score }}</p>    
  </div>
</template>

<script>
export default {
  name: 'ImageLabel',
  props: {
    label: {
      type: Object
    }
  }
}
</script>

<style>

</style>