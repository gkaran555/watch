<template>
  <div>

    <nav v-if="mobileView" >  
      <div class="container">
        <div class="nav-main">
          <div class="nav-logo">
             <h1>LOGO</h1>
          </div>
          <div class="nav-total">
            <div class="nav-total-cart">
              <span>{{ cart.items.length }}</span>
              <img @click="opensidebar()" :src="'/iconfinder_icon-ios7-cart-outline_211707.svg'" alt="">
            </div>
            <div class="nav-total-num">
              <p>Total: </p>
              <p class="nav-total-num-second">${{ cartTotal }} </p>
            </div>
               <div class="nav-noti" v-show="noticed">
                  <span @click="turnoffNote()">x</span>
                  <div class="nav-noti-lenght" v-if="cart.items.length > 0">
                    <div class="nav-noti-item" v-for="item in cart.items" :key='item.sat.id'>
                      <img :src="item.sat.avatar"/>
                      <p>{{ item.sat.name }}</p>
                    </div>
                    <h1>Has been successfully added to your cart</h1>
                  </div>
                </div>
          </div>
          <div class="nav-mobile-icon"  @click="showNav = !showNav">
             <img :src="[showNav ? '/iconfinder_free-09_463017.svg' : '/iconfinder_Menu2_1891012.svg']">
          </div> 
          </div>
      </div>
    </nav>
    
    <NavigationMobile class="navigation" :class="{'open':showNav}" />
    
    <NavigationDesk @opensidebar="opensidebar" 
                    @turnoffNote="turnoffNote"
                    :cartTotal="cartTotal"
                    :items=cart.items 
                    :noticed=noticed  
                    v-if="!mobileView"/>
    
    <header>
      <div class="container">
        <baner-section :satovi=satovi />
      </div>
    </header>

    <section class="product">

      <tag-section/>

      <div class="product-row" v-for="sat in satovi" :key='sat.id'>
        <div class="product-title" @click="toggle(sat)" :class="{ opened: opened.includes(sat.id) }">   
          <span v-on:click.stop="toggle"> <img @click="starlike(sat)" :src="[sat.changestar ? '/iconfinder_star_299040.svg' : '/iconfinder_star_172558.svg']"/></span>
          <img :src="sat.avatar"/>
          {{sat.name}}
          <div class="product-title-btn" v-on:click.stop="toggle">
            <span v-show="sat.inStock < 3 && sat.inStock > 0">Low on stock</span>
            <button @click="addProductToCart(sat)" :disabled="sat.inStock == 0">   
              <span class="product-title-arrow" v-if="sat.inStock == 0">out of stock</span> 
              <span class="product-title-arrow" v-else>{{sat.added ? 'ADDED' : 'ADD'}}</span>  
            </button>
          </div>
          <span class="product-title-arrow">{{sat.tagglearrow ? '+' : '-'}}</span>  
        </div>
        <hr/>
        <div class="product-extend"  v-if="opened.includes(sat.id)">
          <div v-for="img in sat.sideimage" :key='img'>
            <img v-img:group :src="img">
          </div>
           <button @click="goToSat(sat.id)">detail</button>
        </div>
      </div>
 
      <div class="sidebar" v-show='toggleadd'>
        <button @click="closeside()">close</button>
        <div v-if="cart.items.length > 0">
         <div class="sidebar-control" v-for="item in cart.items" :key='item.sat.id'>
           <p>{{ item.sat.name }}</p>
           <p>{{ item.quantity }}</p>
           <p>{{ item.price }}</p>
           <div>
              <button @click="increaseQuantity(item)" :disabled="item.sat.inStock == 0">+</button>
              <button @click="decreaseQuantity(item)">-</button>
           </div>
         </div>
        </div>
        <p>Total:{{ cartTotal }} </p>
         <button @click="checkout">Checkout</button>
     </div>

    </section>

   
  </div>
</template>


<script>
import BanerSection from './BanerSection.vue'
import TagSection from './TagSection.vue'
import NavigationDesk from "./NavigationDesk.vue";
import NavigationMobile from "./NavigationMobile.vue";

export default {
  name: 'app',
  components: { BanerSection, TagSection, NavigationMobile, NavigationDesk},
  data () {
    return {
      showSection: false,
      toggleadd: false,
      noticed: false,
      mobileView: true,
      showNav: false,
      opened: [],
      cart: {
        items: []
      },
      satovi:[
      {
        "id": 1,
        "name": "AlFRED SUNG",
        "price": "100",
        "avatar": '/086c6f27 - transparent - no logo.png',
        "color": "red",
        "miniavatar": '/avatar-5.png',
        inStock: 4,
        changestar: false,
        tagglearrow: false,
        added: false,
        sideimage: ['/a87c76cf.png', '/9ba04ee2@2x.png']
      },
      {
        id: 2,
        name: "GERMAN",
        price: "200",
        avatar: '/Layer -1.png',
        color: "black",
        miniavatar: '/avatar-5.png',
        inStock: 42,
        changestar: false,
        tagglearrow: false,
        added: false,
        sideimage: ['/a87c76cf.png', '/9ba04ee2@2x.png']
      },
      {
        "id": 3,
        "name": "WRANGLER",
        "price": "300",
        "avatar": '/hero-banner-8---alfred-sung-ultra-slim-collection-watch@2x.png',
        "color": "green",
        "miniavatar": '/avatar-5.png',
        inStock: 42,
        changestar: false,
        tagglearrow: false,
        added: false,
        sideimage: ['/a87c76cf.png', '/9ba04ee2@2x.png']
      }]

    }
  },
  methods: {
    toggle(sat) {
      sat.tagglearrow = !sat.tagglearrow;
      const index = this.opened.indexOf(sat.id);
      if (index > -1) {
        this.opened.splice(index, 1);
      } else {
      	this.opened.push(sat.id);
      }
    },
    closeside() {
      this.toggleadd = false;
    },
    starlike (sat){
      sat.changestar = !sat.changestar;
    },
    opensidebar() {
      this.toggleadd = !this.toggleadd;
    },
    turnoffNote () {
      this.noticed = false;
    },
    addProductToCart: function(sat) {
        sat.added = true;
        this.noticed = true;
        this.toggleadd = true;
        var cartItem = this.getCartItem(sat);

        if (cartItem != null) {
            cartItem.quantity++;
        } else {
            this.cart.items.push({
                sat: sat,
                quantity: 1
            });
        }
        sat.inStock--;
    },
    increaseQuantity: function(cartItem) {
        cartItem.sat.inStock--;
        cartItem.quantity++;
    },
    decreaseQuantity: function(cartItem) {
        cartItem.quantity--;
        cartItem.sat.inStock++;
        if (cartItem.quantity == 0) {
            this.removeItemFromCart(cartItem);
        }
    },
    removeItemFromCart: function(cartItem) {
       cartItem.sat.added = false;  
        var index = this.cart.items.indexOf(cartItem);
        if (index !== -1) {
            this.cart.items.splice(index, 1);
        }
        
    },
    checkout: function() {
        if (confirm('Are you sure that you want to purchase these products?')) {
            this.cart.items.forEach(function(item) {
                item.sat.inStock += item.quantity;
            });
            this.cart.items = [];
        }
    },
    getCartItem: function(sat) {
        for (var i = 0; i < this.cart.items.length; i++) {
            if (this.cart.items[i].sat.id === sat.id) {
                return this.cart.items[i];
            }
        }
        return null;
    },
    goToSat(satId) {
        this.$router.push(`/singlesat/${satId}`);
    },
    handleView() {
      this.mobileView = window.innerWidth <= 1120;
    },
    handlenab() {
      if (window.innerWidth >= 1120){
      this.showNav = false
      }
    }
  },
  computed: {
    cartTotal: function() {
        var total = 0;
        this.cart.items.forEach(function(item) {
            total += item.quantity * item.sat.price;
        });
        return total;
    },
    taxAmount: function() {
        return ((this.cartTotal * 10) / 100);
    }
   },
   created() {
      this.handleView();
      window.addEventListener('resize', this.handleView);
      this.handlenab();
      window.addEventListener('resize', this.handlenab);
   }
    
  }
  
</script>


<style lang="scss" scoped>
@import '../assets/global.scss';
@import '../assets/navbar.scss';


section {
  position: relative;
}

.product-row {
  background: lightgrey;
  margin-bottom: 20px;
  .product-title {
    display: flex;
    // justify-content: space-around;
    align-items: center;
    .product-title-arrow{
      height: 10px;
    }
    .product-title-btn{
      margin-right: 20px;
      margin-left: 20px
    }
    span {
      margin-right: 20px;
      margin-left: 20px
    }
    img {
      margin-right: 10px;
    }
  }
  .product-extend {
    display: flex;
    img {
      margin-right: 10px;
    }

  }
}

.sidebar {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 30%;
  z-index: 10;
  background-color: #a2ff00fa; 
  .sidebar-control{
    display: flex;
    justify-content: space-around;
  }
}

.navigation {
  position: fixed;
  width: 0px;
  transition: 0.5s;
  left: -100%;
}
.open {
  width: 250px;
  left: 0;
  z-index: 30;
}
</style>
