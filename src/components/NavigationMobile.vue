<template>
  <div class="nav-mobile">
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
    <div class="nav-companyname">
      <p>Company Name</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../assets/navbar.scss';

.nav-mobile {
    margin-top: 75px;
    background-color: white;
    display: flex;
    flex-direction: column;
    div {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    } 
}

.nav-ipsums {
    flex-direction: column;    
    .nav-ipsums-first{
        font-family: ButlerBlack;
        font-size: 24px;
        letter-spacing: 7.2px;
        color: #304061;
    }
    .nav-ipsums-second{
        font-family: FontAwesome5ProLight;
        font-size: 11px;
        letter-spacing: 8px;
        color: #304061;
    }
}

.nav-browse {
    font-family: FontAwesome5ProLight;
    font-size: 18px;
    letter-spacing: 3px;
    color: #383649;
    text-align: center;
}
 .nav-companyname{
    font-family: ButlerBold;
    font-size: 18px;
    color: #2F4061;
}

</style>
