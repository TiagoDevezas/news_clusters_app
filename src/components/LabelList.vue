<template>
  <div class="column col-4 col-sm-12">
    <ul class="nav">
      <li class="nav-item" v-for="label in labels" :class="[ activeLabel === label && labelClicked ? 'active' : '' ]">
        <a href="#" @click.prevent="filterClusters(label)">{{ label }}</a>
      </li>
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
        activeLabel: '',
        labelClicked: false
      }
    },
    methods: {
      filterClusters (label) {
        this.activeLabel = label
        this.labelClicked = !this.labelClicked
        eventBus.$emit('labelClicked', this.activeLabel)
      }
    }
  }
</script>
