<template>
  <div id="edit-settings" class="container">
    <div class="columns">
      <div class="side-nav column col-3">
        <ul class="nav">
          <li class="nav-item active">
            <a href="#" @click.prevent="setCurrentView('sources')">Fontes</a>
          </li>
          <li class="nav-item">
            <a href="#" @click.prevent="setCurrentView('other')">Other stuff</a>
          </li>
        </ul>
      </div>
      <div class="settings-content column col-9">
        <sources-checkboxes :is="currentView" :source-list="sourceList"></sources-checkboxes>
      </div>
    </div>
    <div class="settings-submit">
      <div>
        <button class="btn btn-primary" @click="updateSettings">Guardar</button>
        <button class="btn btn-link" @click="cancelSettings">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { eventBus, localStore } from '../main.js'
  import SourcesCheckboxes from './SourcesCheckboxes'

  export default {
    props: {
      sourceList: {
        type: Array
      }
    },
    components: {
      sources: SourcesCheckboxes
    },
    data () {
      return {
        currentView: 'sources',
        settings: {
          sourcesToShow: {
            checked: [],
            stored: []
          }
        }
      }
    },
    methods: {
      setCurrentView (viewName) {
        this.currentView = viewName
      },
      updateSettings () {
        // let sourcesString = this.settings.sourcesToShow.toString()
        // let currentQuery = this.$route.query
        // this.$router.push({ query: currentQuery })
        localStore.set('settings', { sources: this.settings.sourcesToShow.stored })
        eventBus.$emit('settingsChanged', 0, this.settings.sourcesToShow.checked)
        eventBus.$emit('fetchNewData')
      },
      cancelSettings () {
        eventBus.$emit('settingsCanceled', 0, this.settings.sourcesToShow.stored)
      }
    },
    mounted () {
      eventBus.$on('sourcesUpdated', (sources) => {
        this.settings.sourcesToShow.checked = sources.checked
        this.settings.sourcesToShow.stored = sources.stored
        // console.log(JSON.stringify(this.settings.sourcesToShow.checked))
        // console.log(JSON.stringify(this.settings.sourcesToShow.stored))
      })
    }
  }
</script>

<style scoped>
  .settings-submit {
    display: flex;
    justify-content: flex-end;
  }
</style>
