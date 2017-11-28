<template>
  <div class="container">
    <div class="columns">
      <div class="toggle-buttons col-12">
        <!-- <button class="btn btn-sm" @click="toggleAllSources()">Todas</button> -->
        <button class="btn btn-sm" @click="toggleOtherSources('sportsSources')">Desporto</button>
        <button class="btn btn-sm" @click="toggleGeneralSources()">Generalistas</button>
        <button class="btn btn-sm" @click="toggleOtherSources('pressSources')">Imprensa</button>
        <button class="btn btn-sm" @click="toggleOtherSources('broadcastSources')">TV/Rádio</button>
      </div>
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
        generalSourcesClicked: false,
        sportsSourcesClicked: false,
        pressSourcesClicked: false,
        broadcastSourcesClicked: false,
        sportsSources: ['A Bola', 'O Jogo', 'Record', 'SAPO Desporto', 'Maisfutebol'],
        pressSources: ['A Bola', 'Correio da Manhã', 'Diário de Notícias', 'Económico', 'Expresso', 'Jornal de Negócios', 'Jornal de Notícias', 'O Jogo', 'Público', 'Record', 'Sol', 'Sábado', 'Visão', 'iOnline'],
        broadcastSources: ['Antena 1', 'Porto Canal', 'RTP', 'Renascença', 'SIC Notícias', 'TSF', 'TVI24']
      }
    },
    updated () {
      eventBus.$emit('sourcesUpdated', this.sourceList)
    },
    methods: {
      toggleGeneralSources () {
        this.generalSourcesClicked = !this.generalSourcesClicked
        this.sourceList.forEach((obj) => {
          if (obj.selected !== this.generalSourcesClicked && this.sportsSources.indexOf(obj.name) === -1) {
            obj.selected = this.generalSourcesClicked
          }
        })
      },
      toggleOtherSources (sourcesArray) {
        let sourcesClickedString = sourcesArray + 'Clicked'
        this[sourcesClickedString] = !this[sourcesClickedString]
        this.sourceList.forEach((obj) => {
          if (this[sourcesArray].indexOf(obj.name) !== -1) {
            obj.selected = !this[sourcesClickedString]
          }
        })
      }
    },
    computed: {
      getSourcesNames () {
        return this.sourceList.map((obj) => {
          return obj.name
        })
      }
    }
  }
</script>

<style scoped>
  .toggle-buttons {
    margin-bottom: 1rem !important;
  }
</style>
