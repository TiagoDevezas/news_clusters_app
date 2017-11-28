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
  /*@import url('https://fonts.googleapis.com/css?family=Libre+Franklin:400,600');*/

  body {
    margin-top: 30px !important;
    /*font-family: sans-serif !important;*/
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  a:focus {
    box-shadow: none !important;
  }

  .flatpickr-calendar {
    /*font-family: 'Libre Franklin', sans-serif !important;*/
  }
  .popover-container { /* Override Spectre CSS default popover with */
    width: 45rem !important;
  }
</style>
