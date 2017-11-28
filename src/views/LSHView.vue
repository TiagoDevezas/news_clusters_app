<template>
  <div>Hello</div>
</template>

<script>
  import fetchDataFromApi from '../store/api.js'

  export default {
    mounted () {
      fetchDataFromApi.clusters(this.$route.query)
      .then((response) => {
        console.log(response.data.clusters)
      })
    }
  }
</script>

<style>
  
</style>
