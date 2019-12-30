
<template>
    <section>
        <div class="bslider">
            <image-slider :satovi=satovi >
             </image-slider>
        </div>
        <div class="bimage"> </div>
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
     display: flex;
     justify-content: space-around;
     height: 300px;
     background-image: url("../assets/Layer 2 copy 3.png");
 }
 .bslider {
     flex: 1;
     
 }
 .bimage{
     background-image: url("../assets/Layer 21 copy@2x.png");
     background-repeat: no-repeat;
     background-size: 100% 100%;
     flex: 1;
 }

</style>
    
    