
<template>
    <section>
      <image-slider v-if="!mobileView" :satovi=satovi ></image-slider>
      <image-mobileslider v-if="mobileView" :satovi=satovi ></image-mobileslider>
    </section>
</template>

<script>
import ImageSlider from './ImageSlider.vue'
import ImageMobileslider from './ImageMobileslider.vue'
export default {
  props: {
    satovi: {
      type: Array
    }
  },
  data () {
    return {
       mobileView: true,
    }
  },
  components: { ImageSlider, ImageMobileslider },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 650;
    },
  },
  created() {
      this.handleView();
      window.addEventListener('resize', this.handleView);
      // this.handlenab();
      // window.addEventListener('resize', this.handlenab);
   }
    
 }

</script>

<style lang="scss" scoped>
@import '../assets/global.scss';

 section {
     height: 810px;
     @media only screen and (max-width: 1500px) { height: 610px;}
     @media only screen and (max-width: 650px) { height: 500px;}
 }

</style>
    
    