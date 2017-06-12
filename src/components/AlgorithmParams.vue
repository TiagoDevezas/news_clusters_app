<template>
  <div class="container">
    <div class="columns">
      <div class="col-6">
        <div class="form-group" v-for="p in params">
          <div class="popover popover-top">          
            <label class="form-label">{{ p.label }}: {{ p.storedValue }}</label>
            <div class="popover-container">
              <div class="card">
                <div class="card-body" v-html="p.description"></div>
              </div>
            </div>
          </div>
          <input :id="p.id" class="slider" type="range" :min="p.minValue" :max="p.maxValue" v-model="p.storedValue" :step="p.step" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { eventBus } from '../main.js'

  export default {
    props: {
      params: {
        type: Array
      }
    },
    updated () {
      eventBus.$emit('algoParamsUpdated', this.params)
    }
  }
</script>

<style></style>
