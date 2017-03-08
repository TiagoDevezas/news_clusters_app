<template>
  <div class="column col-4 col-sm-12">
    <ul class="nav">
      <li class="nav-item" v-for="label in labels" @click="filterClusters(label)">{{ label }}</li>
    </ul>
  </div>
</template>

<script>
  import { eventBus } from '../main.js'
  
  export default {
    props: {
      labels: {
        type: Array
      }
    },
    data () {
      return {
        label: ''
      }
    },
    methods: {
      filterClusters (label) {
        eventBus.$emit('labelClicked', label)
      }
    }
  }
</script>
