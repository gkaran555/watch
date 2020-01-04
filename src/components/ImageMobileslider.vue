<template>
   <div class="slide-main">
      <div class="slide-info" v-for="number in [currentNumber]" :key='number'>
          <div class="slide-info-text">
              <p>{{currentImage.name}}</p>
              <h6>{{currentImage.dis}}</h6>
              <div class="slide-info-img"><img :src="currentImage.avatar"/></div>
              <a href="#"  @click="goToSat(currentImage.id)" class="btn">VIEW WATCH</a>
              <p>Explore {{currentImage.name}}</p> 
          </div>
      </div>

        <div class="slide-control">
            <a class="slide-control-first" @click="prev" href='#'>&#8592;</a> 
            <a class="slide-control-second" @click="next" href='#'>&#8594;</a>
        </div>

  </div>
</template>

<script>
export default {
props: {
    satovi: {
      type: Array
    }
  },
data () {
    return {
       currentNumber: 0,
       timer: null
    }
},
methods: {
    next: function() {
        this.currentNumber += 1
    },
    prev: function() {
        this.currentNumber -= 1
    },
    goToSat(satId) {
        this.$router.push(`/singlesat/${satId}`);
    },
},
computed: {
    currentImage: function() {
    return this.satovi[Math.abs(this.currentNumber) % this.satovi.length];
    }
}

}
</script>

<style lang="scss" scoped>
@import '../assets/global.scss';
.slide-main {
    height: 100%;
    padding-left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
   
}
// .slide-info {
//     display: flex;
//     z-index: 8;
    
// }

.slide-info-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h6 {
        font-family: ButlerBlack;
        font-size: 20px;
        letter-spacing: 3px;
        color: #304061;
        margin-top: 20px;
        margin-bottom: 30px;
    }
    p{
        font-family: ButlerBold;
        font-size: 15px;
        letter-spacing: 3px;
        color: #A9836B;
    }
    // .slide-info-watch {
    //     display: flex;
    //     justify-content: flex-start;
    //     align-items: center;
    //     p {margin-left: 37px;}
    //     @media only screen and (max-width: 950px) {
    //         flex-direction: column;
    //         justify-content: center;
    //         align-items: flex-start;
    //         p {margin-left: 0px; margin-top: 20px;}
    //     }  
    // }
}  

.slide-info-img {
    width: 150px;
    height: 100px;
    img {width: 100%; height: 100%;}
}


.slide-control {
    position: absolute;
    left: 0px;
    bottom: 0px;
    display: flex;
    a {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        color: #A9836B;
    }
    .slide-control-first {background-color: #DDCCB8;}
    .slide-control-second {background-color: white;}
}



</style>
