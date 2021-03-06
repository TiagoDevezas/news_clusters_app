<template>
  <div id="edit-settings" class="container">
    <div class="columns">
      <div class="side-nav column col-3">
        <ul class="nav">
          <li class="nav-item" :class="{ active: currentView === 'sources'}">
            <a href="#" @click.prevent="currentView='sources'">{{ $t('settingsOptions.sources') }}</a>
          </li>
          <li class="nav-item" :class="{ active: currentView === 'algorithm'}">
            <a href="#" @click.prevent="currentView='algorithm'">{{ $t('settingsOptions.algorithm') }}</a>
          </li>
        </ul>
      </div>
      <div class="settings-content column col-9">
        <sources-checkboxes v-show="currentView === 'sources'" :source-list="sourceList"></sources-checkboxes>
        <algorithm-params v-show="currentView === 'algorithm'" :params="algorithmParams" :selected-algorithm="selectedAlgorithm"></algorithm-params>
      </div>
    </div>
    <div class="settings-submit">
      <div>
        <button class="btn btn-primary" @click="updateSettings">{{ $t('settingsOptions.button.save') }}</button>
        <button class="btn btn-link" @click="cancelSettings">{{ $t('settingsOptions.button.cancel') }}</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { eventBus, localStore } from '../main.js'
  import SourcesCheckboxes from './SourcesCheckboxes'
  import AlgorithmParams from './AlgorithmParams'

  export default {
    props: {
      sourceList: {
        type: Array
      },
      algorithmParams: {
        type: Array
      },
      selectedAlgorithm: {
        type: String
      }
    },
    components: {
      SourcesCheckboxes,
      AlgorithmParams
    },
    data () {
      return {
        currentView: 'sources',
        sourcesSet: [],
        algorithmIsOn: true
        // settings: {
        //   sourcesToShow: {
        //     checked: [],
        //     stored: []
        //   }
        // }
      }
    },
    methods: {
      setCurrentView (viewName) {
        this.currentView = viewName
      },
      updateSettings () {
        let params = {}
        let paramsKey = localStore.get('selectedAlgorithm')
        params[paramsKey] = this.algorithmParams
        localStore.set('algoFilter', { isOn: this.algorithmIsOn })
        localStore.set('sources', { sources: this.sourcesSet })
        localStore.assign('params', params)
        eventBus.$emit('settingsChanged', 0)
        eventBus.$emit('fetchNewData')
      },
      cancelSettings () {
        eventBus.$emit('settingsCanceled', 0)
        eventBus.$emit('fetchNewData')
      }
    },
    mounted () {
      eventBus.$on('sourcesUpdated', (sources) => {
        this.sourcesSet = sources
      })
      eventBus.$on('algorithmSwitched', (val) => {
        this.algorithmIsOn = val
      })
    }
  }
</script>

<style scoped>
  .settings-content {
    padding-top: 1.1rem;
  }
  .settings-submit {
    display: flex;
    justify-content: flex-end;
  }
</style>
