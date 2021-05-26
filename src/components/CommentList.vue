<template>
  <div>
    <p>{{ comment }}</p>
  </div>
</template>

<script>
export default {
  name: 'CommentList',
  props: {
    comment: {
      type: Object
    }
  }
}
</script>

<style>

</style>