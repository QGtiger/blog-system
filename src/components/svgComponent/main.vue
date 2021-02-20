<template>
  <i class="sketch-icon" :class="customClass">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="xlinkHref"></use>
    </svg>
  </i>
</template>

<script>
export default {
  name  : 'SketchIcon',
  props : {
    type: {
      type: String,
      required : true
    },
    customClass: String
  },
  computed : {
    xlinkHref() {
      return `#${this.type}`
    }
  }
}
</script>

<style scoped>
.sketch-icon {
}
</style>