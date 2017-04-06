<template>
  <div id="edit-settings" class="container">
    {{ settings.sourcesToShow }}
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
        <button class="btn btn-link">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { eventBus } from '../main.js'

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
          sourcesToShow: []
        }
      }
    },
    methods: {
      setCurrentView (viewName) {
        this.currentView = viewName
      },
      updateSettings () {
        // let sourcesString = this.settings.sourcesToShow.toString()
        let currentQuery = this.$route.query
        this.$router.push({ query: currentQuery })
      }
    },
    mounted () {
      eventBus.$on('sourcesUpdated', sourcesArray => {
        this.settings.sourcesToShow = sourcesArray
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
