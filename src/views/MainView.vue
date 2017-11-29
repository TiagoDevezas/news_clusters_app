<template>
  <div class="container-main">
    <div class="clusters">
      <div class="container grid-980">
        <div class="loading-overlay" v-show="loading">A criar página...</div>
        <div class="columns">
          <label-list :labels="labels" v-show="!loading"></label-list>
          <div class="column col-7 col-sm-12">
            <tabs-container v-show="!loading">
              <tab-item tab-label="Notícias" href="#">
                <h6>
                  As <span v-if="algorithmFiltering">principais</span> notícias de <date-picker></date-picker> 
                  <span v-if="algorithmFiltering">*</span>
                </h6>
                <p class="indication-algorithm" v-if="algorithmFiltering">* segundo um <a href="#" @click.prevent="showInfo"><strong>algoritmo</strong></a></p>
                <dropdown-sorter :item-labels="dropdownLabels" v-show="!loading" v-if="algorithmFiltering"></dropdown-sorter>
                <item-cluster v-for="(cluster, index) in filteredClusters" :items="cluster.items" :cluster-label="labels[index]" v-show="!loading" v-if="algorithmFiltering"></item-cluster>
                <div v-if="!clustersExist && algorithmFiltering">
                  Neste momento não foi possível gerar os grupos de notícias. Provavelmente ainda não foram recolhidas notícias suficientes. Por favor tente mais logo ou escolha outro dia.
                </div>
                <div class="unclustered-items" v-if="!algorithmFiltering">
                  <search-form></search-form>
                  <div class="results-counter">{{ resultsFound }}
                    <a href="" @click.prevent="getFeed()">Atom</a>
                  </div>
                  <item-main v-for="item in unclusteredItems" :item-main-data="item" :display-snippet="true"></item-main>
                  <item-pagination :pagination-settings="paginationSettings"></item-pagination>
                </div>
              </tab-item>
              <tab-item tab-label="Definições" href="#">
                <edit-settings :source-list="sources" :algorithm-params="algorithmParams"></edit-settings>
              </tab-item>
              <tab-item tab-label="Informação" href="#">
                <algorithm-information></algorithm-information>
              </tab-item>
            </tabs-container>       
          </div> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import fetchDataFromApi from '../store/api.js'
  import getSourcesByType from '../store/sources.js'
  import getAlgorithParams from '../store/algorithmParams.js'
  import { localStore, eventBus } from '../main.js'

  import ItemCluster from '../components/ItemCluster'
  import ItemMain from '../components/ItemMain'
  import ItemPagination from '../components/ItemPagination'
  import SearchForm from '../components/SearchForm'
  import DatePicker from '../components/DatePicker'
  import LabelList from '../components/LabelList'
  import DropdownSorter from '../components/DropdownSorter'
  import DropdownSlider from '../components/DropdownSlider'
  import TabsContainer from '../components/TabsContainer'
  import TabItem from '../components/TabItem'
  import EditSettings from '../components/EditSettings'
  import AlgorithmInformation from '../components/AlgorithmInformation'

  export default {

    components: {
      ItemCluster,
      ItemMain,
      ItemPagination,
      SearchForm,
      DatePicker,
      LabelList,
      DropdownSorter,
      DropdownSlider,
      TabsContainer,
      TabItem,
      EditSettings,
      AlgorithmInformation
    },

    data () {
      return {
        unclusteredItems: [],
        clusters: [],
        filteredClusters: [],
        labels: [],
        sources: [],
        algorithmParams: [],
        loading: true,
        dropdownLabels: [
          { label: 'Pontuação: mais alta', sort: ['score', 'desc'] },
          { label: 'Pontuação: mais baixa', sort: ['score', 'asc'] },
          { label: 'Data: mais recente', sort: ['date', 'desc'] },
          { label: 'Data: mais antiga', sort: ['date', 'asc'] }
        ],
        paginationSettings: {
          start: 0,
          numPages: 0,
          currentPage: 0,
          numFound: 0
        },
        algorithmFiltering: true, // false if algorithm is turned off - show the unfiltered news list
        queryString: '',
        defaultTitleTagText: 'News Clusters',
        showAtom: false
      }
    },

    mounted () {
      this.setPageTitle(this.defaultTitleTagText)
      this.fetchData()
      eventBus.$on('labelClicked', (label, wasClicked) => {
        this.showClusterForLabel(label, wasClicked)
      })
      eventBus.$on('sortClusters', sortParams => {
        this.sortClusters(sortParams)
      })
      eventBus.$on('fetchNewData', () => {
        this.fetchData()
      })
      eventBus.$on('startValueChanged', val => {
        this.paginationSettings.start = val
        this.fetchData()
      })
      eventBus.$on('getItemsForQuery', val => {
        this.queryString = val
        this.paginationSettings.start = 0
        this.fetchData()
      })
      // eventBus.$on('algorithmSwitched', (val) => {
      //   this.algorithmFiltering = val
      // })
    },

    watch: {
      '$route.query': 'fetchData'
    },

    computed: {
      clustersExist () {
        return this.clusters.length
      },
      resultsFound () {
        return this.paginationSettings.numFound > 0 ? this.paginationSettings.numFound + ' artigos encontrados' : 'Nenhum artigo encontrado.'
      }
    },

    methods: {
      getFeed () {
        let queryParams = this.$route.query
        /* Extract to function */
        let sourcesToShow = this.sources.filter((source) => {
          return source.selected
        }).map((source) => {
          return source.name
        })
        let sourcesToHide = this.sources.filter((source) => {
          return !source.selected
        }).map((source) => {
          return source.name
        })
        let sourcesToFetch = { sourcesToShow: sourcesToShow, sourcesToHide: sourcesToHide }
        let mergedParams = Object.assign(queryParams, sourcesToFetch)
        fetchDataFromApi.atom(mergedParams, 0, this.queryString)
      },
      setPageTitle (titleText) {
        document.title = titleText
      },
      fetchData () {
        this.unclusteredItems = []
        this.labels = []
        this.clusters = []
        this.loading = true
        this.sources = getSourcesByType('national')
        this.algorithmFiltering = this.checkIfFilteringIsOn()
        this.algorithmParams = getAlgorithParams('lingo')
        let queryParams = this.$route.query
        /* Extract to function */
        let algoParams = { lingo: this.algorithmParams }
        let sourcesToShow = this.sources.filter((source) => {
          return source.selected
        }).map((source) => {
          return source.name
        })
        let sourcesToHide = this.sources.filter((source) => {
          return !source.selected
        }).map((source) => {
          return source.name
        })
        let sourcesToFetch = { sourcesToShow: sourcesToShow, sourcesToHide: sourcesToHide }
        let mergedParams = Object.assign(queryParams, sourcesToFetch, algoParams)

        if (queryParams.day) {
          let title = 'Notícias de ' + queryParams.day + ' - ' + this.defaultTitleTagText
          // title !== document.title ? this.setPageTitle(title) : this.set
          if (document.title !== title) {
            this.setPageTitle(title)
          }
        }

        if (this.queryString && this.queryString.length) {
          let title = this.queryString + ' - ' + this.defaultTitleTagText
          if (document.title !== title) {
            this.setPageTitle(title)
          }
        }
        /* */
        if (this.algorithmFiltering) {
          fetchDataFromApi.clusters(mergedParams, this.queryString)
          .then((response) => {
            this.clusters = response.data.clusters
            // this.clusters = response.data.clusters.filter(function (cluster) {
            //   return cluster.labels[0].split(' ').length > 1 // Just for testing - filter out clusters with one word labels
            // })
            this.filteredClusters = this.clusters
            this.labels = this.getLabelsFromClusters(this.clusters)
            this.loading = false
          })
          .catch((error) => {
            this.loading = false
            console.log(error)
          })
        } else {
          fetchDataFromApi.items(mergedParams, this.paginationSettings.start, this.queryString)
          .then((response) => {
            // console.log(response.data)
            this.unclusteredItems = response.data.docs
            this.paginationSettings = {
              start: response.data.start,
              numPages: response.data.numPages,
              currentPage: response.data.currPage,
              numFound: response.data.numFound
            }
            this.loading = false
          })
          .catch((error) => {
            this.loading = false
            console.log(error)
          })
        }
      },
      showInfo () {
        eventBus.$emit('showInfo', 2)
      },
      sortClusters (sortParams) {
        let dimension = sortParams[0]
        let order = sortParams[1]
        this.clusters.sort((a, b) => {
          if (dimension === 'score') {
            return order === 'asc' ? a.score - b.score : b.score - a.score
          } else if (dimension === 'date') {
            return order === 'asc' ? Date.parse(a.latest_date) - Date.parse(b.latest_date) : Date.parse(b.latest_date) - Date.parse(a.latest_date)
          }
        })
      },
      getLabelsFromClusters: (clusters) => {
        let labelArray = [].concat.apply([], clusters.map((cluster) => {
          return cluster.labels
        }))
        return labelArray[0] ? labelArray : []
      },
      showClusterForLabel (label, wasClicked) {
        if (wasClicked) {
          this.filteredClusters = this.clusters.filter((cluster) => {
            return cluster.labels[0] === label
          })
        } else {
          this.filteredClusters = this.clusters
        }
      },
      checkIfFilteringIsOn () {
        if (localStore.get('algoFilter') !== undefined) {
          return localStore.get('algoFilter').isOn
        }
        return true
      }
    }

  }
</script>

<style scoped>
  .loading-overlay {
    text-align: center;
    font-size: 0.7rem;
  }
  h6 {
    /*font-size: 2.2rem;*/
    margin-bottom: 0;
  }
  .grid-980 {
    max-width: 49rem;
  }
  p.indication-algorithm {
    margin: 0 0 0.25rem 0;
    padding: 0;
  }
  .results-counter {
    margin: 0.5rem 0;
    font-size: 0.65rem;
    color: #666;
  }
  .unclustered-items {
    margin-top: 1rem;
  }
</style>
