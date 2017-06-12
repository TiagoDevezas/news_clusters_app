<template>
  <div class="container">
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
    updated () {
      eventBus.$emit('sourcesUpdated', this.sourceList)
    }
  }
</script>
