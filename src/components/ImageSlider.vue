<template>
   <div class="slide-main">
      <div class="slide-info" v-for="number in [currentNumber]" :key='number'>
          <div class="slide-info-text">
              <p>{{currentImage.name}}</p>
              <h6>{{currentImage.role}}</h6>
              <div class="slide-info-watch">
                <button @click="goToSat(currentImage.id)">VIEW WATCH</button>
                <p>Explore</p>
              </div>
          </div>
          <div><img :src="currentImage.avatar"/></div>
      </div>

        <div class="slide-control">
            <a @click="prev" href='#'>Previous</a> || <a @click="next" href='#'>Next</a>
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

.slide-main {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
}
.slide-info {
    display: flex;
    z-index: 8;
}

.slide-info-watch {
    display: flex;
}

.slide-control {
    position: absolute;
    left: 0px;
    bottom: 0px;
}
img {
    width: 100%
}


</style>
