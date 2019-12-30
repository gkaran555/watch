<template>
    <div class="filter">
        <input type="text">
        <div class="filter-select">
          <select v-model="brand">
            <option value="" selected="selected" hidden="hidden">Brand</option>
            <option>aaa</option>
            <option>bbb</option>
          </select>  
        
          <select v-model="colours">
            <option value="" selected="selected" hidden="hidden">Colours</option>
            <option>red</option>
            <option>black</option>
          </select>  

        </div>
        <div class="filter-tag">
          <span class="filter-tag-round" v-if="brand">{{ brand }}</span>
          <span class="filter-tag-round" v-if="colours">{{ colours }}  </span>
        </div>
      </div>
</template>

<script>
export default {
  data (){
    return {
      tagremove: false,
      brand: '', 
      colours: '',
    }
  }

}
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  flex-direction: column;
}
.filter-select {
  display: flex;
}
.filter-tag {
  display: flex;
  .filter-tag-round {
    padding: 5px 20px 5px 20px;
    border: 1px solid black;
    border-radius: 30%;
    margin-right: 5px;
  }
}

</style>
