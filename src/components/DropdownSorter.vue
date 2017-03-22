<template>
  <div :class="[{ active: open }, 'dropdown']">
    <a class="btn btn-primary" @click.prevent="toggleDropdown">
      {{ selectedLabel }} <i class="icon-caret"></i>
    </a>
    <ul :class="[{ hide: !open }, 'menu']">
      <li class="menu-item" v-for="itemLabel in itemLabels">
        <a href="#" :class="[itemLabel.label === selectedLabel ? 'active' : '']" @click.prevent="selectLabel(itemLabel.label, itemLabel.sort)">{{itemLabel.label}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import { eventBus } from '../main.js'

  export default {
    props: {
      itemLabels: {
        type: Array
      }
    },
    data () {
      return {
        selectedLabel: '',
        sortParams: '',
        open: false
      }
    },
    methods: {
      setDefaultLabel () {
        !this.selectedLabel ? this.selectedLabel = this.itemLabels[0].label : this.selectedLabel
      },
      toggleDropdown () {
        this.open = !this.open
      },
      selectLabel (label, sort) {
        if (label !== this.selectedLabel) {
          this.selectedLabel = label
          this.sortParams = sort
          eventBus.$emit('sortClusters', this.sortParams)
        }
        this.toggleDropdown()
      }
    },
    mounted () {
      this.setDefaultLabel()
    }
  }
</script>

<style scoped>
  .dropdown {
    margin-bottom: 1.5rem;
  }
  .hide {
    display: none;
  }
  .menu-item a.active {
    font-weight: bold;
  }
</style>
