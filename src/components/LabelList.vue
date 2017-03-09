<template>
  <div class="column col-4 col-sm-12">
    <ul class="nav">
      <li class="nav-item" v-for="label in labels" :class="[ selectedLabel === label && labelClicked ? 'active' : '' ]">
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
        selectedLabel: '',
        labelClicked: false
      }
    },
    methods: {
      filterClusters (label) {
        this.selectedLabel = this.selectedLabel !== label ? label : ''
        this.labelClicked = this.selectedLabel === label
        console.log(this.selectedLabel, this.labelClicked)
        eventBus.$emit('labelClicked', this.selectedLabel)
      }
    }
  }
</script>
