<template>
  <div class="container">
    {{ sourceList }}
    <div class="columns">
      <div class="form-group col-6" v-for="source in sourceList">
        <label class="form-switch">
          <input type="checkbox" :value="source.name" :checked="source.selected" @click="source.selected = !source.selected" />
          <i class="form-icon"></i> {{ source.name }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
  import { eventBus } from '../main.js'

  export default {
    props: {
      sourceList: {
        type: Array
      }
    },
    data () {
      return {
        storedSources: [],
        checkedSources: []
      }
    },
    updated () {
      eventBus.$emit('sourcesUpdated', { checked: this.checkedSources, stored: this.storedSources })
      return
    },
    watch: {
      // '$route.query': 'resetCheckedSources'
      'sourceList': function () {
        this.storedSources = this.sourceList.slice(0)
      }
    },
    methods: {
      checkSource (sourceObj) {
        console.log(sourceObj)
      }
    }
  }
</script>
