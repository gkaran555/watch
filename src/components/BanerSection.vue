
<template>
    <section>
      <image-slider :satovi=satovi ></image-slider>
    </section>
</template>

<script>
import ImageSlider from './ImageSlider.vue'
export default {
  props: {
    satovi: {
      type: Array
    }
  },
  components: { ImageSlider },
 }

</script>

<style lang="scss" scoped>
 section {
     height: 810px;
     @media only screen and (max-width: 1500px) { height: 610px;}
 }

</style>
    
    