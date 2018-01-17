<template>
  <div>
    
  <div class="column" v-html="$t('algorithmInformation.lingo')" v-if="selectedAlgorithm === 'lingo'">   
  </div>
  <div class="column" v-html="$t('algorithmInformation.lsh')" v-if="selectedAlgorithm === 'lsh'">
  </div>
  </div>
</template>

<script>
  import { localStore, eventBus } from '../main.js'
  export default {
    data () {
      return {
        selectedAlgorithm: ''
      }
    },
    mounted () {
      this.selectedAlgorithm = this.getSelectedAlgo()
      eventBus.$on('algorithmChanged', val => {
        this.selectedAlgorithm = val
      })
    },
    methods: {
      getSelectedAlgo () {
        return localStore.get('selectedAlgorithm') !== undefined ? localStore.get('selectedAlgorithm') : 'lingo'
      }
    }
  }
</script>
