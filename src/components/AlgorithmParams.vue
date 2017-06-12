<template>
  <div class="container">
    <div class="columns">
      <div class="col-8">
        <div class="form-group" v-for="p in params">
          <div class="icon-label">          
            <div class="popover popover-top">          
              <img class="info-icon" :src="infoIcon" alt="">
              <div class="popover-container">
                <div class="card">
                  <div class="card-body" v-html="p.description"></div>
                </div>
              </div>
            </div>
            <label class="form-label">
              {{ p.label }}: {{ p.storedValue }}
            </label>
          </div>
          <input :id="p.id" class="slider" type="range" :min="p.minValue" :max="p.maxValue" v-model="p.storedValue" :step="p.step" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { eventBus } from '../main.js'
  import infoIcon from '../assets/info.svg'

  export default {
    props: {
      params: {
        type: Array
      }
    },
    data () {
      return {
        infoIcon
      }
    },
    updated () {
      eventBus.$emit('algoParamsUpdated', this.params)
    }
  }
</script>

<style scoped>
  .info-icon {
    /*display: inline-block;*/
    width: 1.8rem;
    margin-right: 1rem;
    cursor: pointer;
  }
  .popover {
    display: flex;
    align-items: center;
  }
  .icon-label {
    display: flex;
    align-items: center;
  }
</style>
