<template>
  <div class="container">
    <div class="columns">
      <div class="col-8">
        <label class="form-switch">
          <input type="checkbox" v-model="algorithmIsOn" />
          <i class="form-icon"></i> {{ switchLabel }}
        </label>
        <algorithm-selector :item-labels="algorithmsAvailable" v-if="algorithmIsOn" :selected-algorithm="selectedAlgorithm"></algorithm-selector>
        <div class="form-group" v-for="p in params" v-show="algorithmIsOn">
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
  import { localStore, eventBus } from '../main.js'
  import infoIcon from '../assets/info.svg'
  import AlgorithmSelector from '../components/AlgorithmSelector'

  export default {
    components: {
      AlgorithmSelector
    },

    props: {
      params: {
        type: Array
      },
      selectedAlgorithm: {
        type: String
      }
    },

    data () {
      return {
        infoIcon,
        algorithmIsOn: true,
        algorithmsAvailable: [{ label: 'lingo' }, { label: 'lsh' }],
        switchLabel: this.$i18n.t('switchLabels.on')
      }
    },

    watch: {
      'algorithmIsOn': 'switchAlgorithm'
    },

    mounted () {
      if (localStore.get('algoFilter') !== undefined) {
        this.algorithmIsOn = localStore.get('algoFilter').isOn
      }
    },

    methods: {
      switchAlgorithm (val) {
        eventBus.$emit('algorithmSwitched', val)
        if (!val) {
          this.switchLabel = this.$i18n.t('switchLabels.off')
          this.algorithmIsOn = false
          // eventBus.$emit('algorithmIsOff')
        } else {
          this.switchLabel = this.$i18n.t('switchLabels.on')
          this.algorithmIsOn = true
          // eventBus.$emit('algorithmIsOn')
        }
      }
    }
  }
</script>

<style scoped>
  .info-icon {
    /*display: inline-block;*/
    width: 0.9rem;
    margin-right: 0.5rem;
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
  .form-switch {
    margin-bottom: 1.5rem;
  }
</style>
