<template>
  <div class="column col-3 col-sm-12">
    <ul class="menu" v-if="labels.length">
      <li class="menu-item"><strong>{{ $t('topics.header') }}</strong></li>
      <li class="divider"></li>
      <li class="menu-item" v-for="label in labels">
        <a href="#" @click.prevent="filterClusters(label)" :class="[ selectedLabel === label && labelClicked ? 'active' : '' ]">{{ label }}</a>
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
        eventBus.$emit('labelClicked', label, this.labelClicked)
        // eventBus.$emit('labelClicked', this.selectedLabel)
      }
    }
  }
</script>
