<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Libre+Franklin:400,600');

  html {
    font-size: 62.5% !important;
  }

  #app {
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    font-family: 'Libre Franklin', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
    max-width: 600px;
    margin: 0 auto;
  }

  a:link {
    color: #272727;
    text-decoration: none;
    font-weight: 600;
  }
  a:hover {
    border-bottom: 2px solid #BD4343;
  }

  .flatpickr-calendar {
    font-family: 'Libre Franklin', sans-serif !important;
  }
</style>
