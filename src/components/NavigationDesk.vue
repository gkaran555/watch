<template>
    <nav >
       <div class="container">
         <div class="nav-main">

            <div class="nav-ipsums">
              <p class="nav-ipsums-first">IPSUMS</p>
              <p class="nav-ipsums-second">DEV TEST TASK</p>      
            </div>
            <div class="nav-browse">
              <p>BROWSE PRODUCTS</p>
            </div>
            <div class="nav-info">
              <p>Company info</p>
            </div>

            <div class="nav-total">
              <div class="nav-total-cart">
                <span>{{ items.length }}</span>
                <img @click="opensidebar()" :src="'/iconfinder_icon-ios7-cart-outline_211707.svg'" alt="">
              </div>
              <div class="nav-total-num">
                <p>Total: </p>
                <p class="nav-total-num-second">${{ cartTotal }} </p>
              </div>
               <div class="nav-noti" v-show="noticed">
                  <span @click="turnoffNote()">x</span>
                  <div class="nav-noti-lenght" v-if="items.length > 0">
                    <div class="nav-noti-item" v-for="item in items" :key='item.sat.id'>
                      <img :src="item.sat.avatar"/>
                      <p>{{ item.sat.name }}</p>
                    </div>
                    <h1>Has been successfully added to your cart</h1>
                  </div>
                </div>
            </div>

            <div class="nav-companyname">
              <p>Company Name</p>
            </div>

          </div>
        </div>  
      </nav>

</template>

<script>
export default {
props: {
    items: {
       type: Array
    },
    noticed: {
        type: Boolean
    },
    cartTotal: {
        type: Number
        
    }
},
methods: {
  opensidebar () {
    this.$emit('opensidebar')
   },
  turnoffNote () {
    this.$emit('turnoffNote')
   }
}

}
</script>

<style lang="scss" scoped>

@import '../assets/navbar.scss';

</style>
