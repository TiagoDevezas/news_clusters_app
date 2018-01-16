<template>
  <div :class="[{ active: open }, 'dropdown']">
    <a class="btn btn-primary" @click.prevent="toggleDropdown">
      {{ selectedLabel }} <i class="icon icon-caret"></i>
    </a>
    <ul :class="[{ hide: !open }, 'menu']">
      <li class="menu-item" v-for="itemLabel in itemLabels">
        <a href="#" :class="[itemLabel.label === selectedLabel ? 'active' : '']" @click.prevent="selectLabel(itemLabel.label)">{{itemLabel.label}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import { localStore, eventBus } from '../main.js'

  export default {

    props: {
      itemLabels: {
        type: Array
      },
      selectedAlgorithm: {
        type: String
      }
    },
    data () {
      return {
        selectedLabel: '',
        open: false
      }
    },
    methods: {
      toggleDropdown () {
        this.open = !this.open
      },
      selectLabel (label) {
        if (label !== this.selectedLabel) {
          localStore.set('selectedAlgorithm', label)
          this.selectedLabel = label
        }
        this.toggleDropdown()
      }
    },
    mounted () {
      this.selectedLabel = this.selectedAlgorithm
    },
    watch: {
      selectedAlgorithm: function (val, oldVal) {
        this.selectedLabel = val
        // eventBus.$emit('algorithmChanged', val)
      },
      selectedLabel: function (val, oldVal) {
        eventBus.$emit('algorithmChanged', val)
      }
    }
  }
</script>

<style scoped>
  .dropdown {
    margin-bottom: 0.75rem;
  }
  .hide {
    display: none;
  }
  .menu-item a.active {
    font-weight: bold;
  }
</style>
