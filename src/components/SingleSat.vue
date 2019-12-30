<template>
<div>
<button><router-link to="/">&#8592; Back to Home</router-link></button>
<p>to je{{$route.params.satId}}</p>
    

</div>

</template>

<script>
export default {
    name: 'singlesat',
    props: ['satId']
}
</script>

<style>

</style>
