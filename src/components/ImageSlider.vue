<template>
   <div class="slide-main">
      <div class="slide-info"  v-for="number in [currentNumber]" :key='number'>
          <div class="slide-info-text">
              <p>{{currentImage.name}}</p>
              <h6>{{currentImage.dis}}</h6>
              <div class="slide-info-watch">
                <a href="#"  @click="goToSat(currentImage.id)" class="btn">VIEW WATCH</a>
                <p>Explore {{currentImage.name}}</p>
              </div>
          </div>
          <div class="slide-info-img"><img :src="currentImage.avatar"/></div>
      </div>

        <div class="slide-control">
            <a class="slide-control-first" @mouseout="nexthoverout" 
                                           @mouseover="prevhover" 
                                           @click="prev" href='#'>&#8592;</a> 
            <a class="slide-control-second" @mouseout="prevhoverout"
                                            @mouseover="nexthover" 
                                            @click="next" href='#'>&#8594;</a>
            <div class="slide-control-third">
                <img :src="currentImagehover.avatar"/>
            </div>
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
       currentNumberhover: 0,
       timer: null
    }
},
methods: {
    next: function() {
        this.currentNumber += 1
        this.currentNumberhover += 1
    },
    prev: function() {
        this.currentNumber -= 1
        this.currentNumberhover -= 1
    },
    nexthover: function() {
        this.currentNumberhover += 1
    },
    prevhover: function() {
        this.currentNumberhover -= 1
    },
    nexthoverout: function() {
        this.currentNumberhover = this.currentNumber
    },
    prevhoverout: function() {
        this.currentNumberhover = this.currentNumber
    },
    goToSat(satId) {
        this.$router.push(`/singlesat/${satId}`);
    },
},
computed: {
    currentImage: function() {
       return this.satovi[Math.abs(this.currentNumber) % this.satovi.length];
    },
    currentImagehover: function() {
       return this.satovi[Math.abs(this.currentNumberhover) % this.satovi.length];
    }
}

}
</script>

<style lang="scss" scoped>

.slide-main {
    height: 100%;
    padding-left: 45px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    @media only screen and (max-width: 950px) {padding-left: 0px;}
}
.slide-info {
    display: flex;
    z-index: 8;
    
}

.slide-info-text {
    width: 75%;
    h6 {
        font-family: ButlerBlack;
        font-size: 59px;
        letter-spacing: 7.2px;
        color: #304061;
        margin-top: 50px;
        margin-bottom: 70px;
        @media only screen and (max-width: 950px) {font-size: 39px;}
    }
    p{
        font-family: ButlerBold;
        font-size: 18px;
        letter-spacing: 3px;
        color: #A9836B;
    }
    .slide-info-watch {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        p {margin-left: 37px;}
        @media only screen and (max-width: 950px) {
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            p {margin-left: 0px; margin-top: 20px;}
        }  
    }
}  

.slide-info-img {
    width: 263px;
    height: 427px;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    @media only screen and (max-width: 1500px) { width: 230px;height: 400px;}
    @media only screen and (max-width: 1343px) { margin-right: 20%; }
    @media only screen and (max-width: 1100px) {
        margin-right: 10%;
        width: 200px;
        height: 350px;
    }
    img {width: 100%;}
}


.slide-control {
    position: absolute;
    left: 45px;
    bottom: 0px;
    display: flex;
    @media only screen and (max-width: 1343px) { left: 0px; }
    a {
        width: 114px;
        height: 114px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        color: #A9836B;
        @media only screen and (max-width: 1500px) {
            width: 70px;
            height: 70px;
            font-size: 25px;
        }
    }
    .slide-control-first {background-color: #DDCCB8;}
    .slide-control-second {background-color: white;}
    .slide-control-third {
        background-color: white;
        width: 70px;
        height: 70px;
        padding: 5px;
        img {width: 100%; height: 100%;}
    }
}



</style>
