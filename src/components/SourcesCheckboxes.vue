<template>
  <div class="container">
    <div class="columns">
      <div class="form-group col-6" v-for="source in sourceList">
        <label class="form-switch">
          <input type="checkbox" :value="source" v-model="checkedSources" />
          <i class="form-icon"></i> {{ source }}
        </label>
      </div>
    </div>
    {{ checkedSources }}
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
        checkedSources: []
      }
    },
    updated () {
      if (!this.checkedSources.length) {
        this.checkedSources = this.sourceList
      }
      eventBus.$emit('sourcesUpdated', this.checkedSources)
      return
    },
    watch: {
      '$route.query': 'resetCheckedSources'
    },
    methods: {
      resetCheckedSources () {
        this.checkedSources = []
      }
    }
  }
</script>
