<template>
  <div class="container-main">
    <div class="clusters">
      <div class="container grid-980">
        <div class="columns">        
          <label-list :labels="labels" v-show="!loading"></label-list>
          <div class="column col-8 col-sm-12">        
            <div class="loading-overlay" v-show="loading">A criar página...</div>
            <h1 v-if="!loading">As principais notícias de <date-picker></date-picker></h1>
            <dropdown-sorter :item-labels="dropdownLabels" v-show="!loading"></dropdown-sorter>
            <item-cluster v-for="cluster in filteredClusters" :items="cluster.items" :labels="cluster.labels" v-show="!loading"></item-cluster>
          </div>     
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import fetchClusters from '../store/api.js'
  import { eventBus } from '../main.js'

  import ItemCluster from '../components/ItemCluster'
  import DatePicker from '../components/DatePicker'
  import LabelList from '../components/LabelList'
  import DropdownSorter from '../components/DropdownSorter'

  export default {

    components: {
      ItemCluster,
      DatePicker,
      LabelList,
      DropdownSorter
    },

    data () {
      return {
        clusters: [],
        filteredClusters: [],
        labels: [],
        loading: true,
        dropdownLabels: [
          { label: 'Pontuação: mais alta', sort: ['score', 'desc'] },
          { label: 'Pontuação: mais baixa', sort: ['score', 'asc'] },
          { label: 'Data: mais recente', sort: ['date', 'desc'] },
          { label: 'Data: mais antiga', sort: ['date', 'asc'] }
        ]
      }
    },

    mounted () {
      this.fetchData()
      eventBus.$on('labelClicked', label => {
        this.showClusterForLabel(label)
      })
      eventBus.$on('sortClusters', sortParams => {
        this.sortClusters(sortParams)
      })
    },

    watch: {
      '$route.query': 'fetchData'
    },

    methods: {
      fetchData () {
        this.loading = true
        fetchClusters(this.$route.query)
        .then((response) => {
          this.clusters = response.data.clusters
          this.filteredClusters = this.clusters
          this.labels = this.getLabelsFromClusters(this.clusters)
          this.loading = false
        })
        .catch((error) => {
          this.loading = false
          console.log(error)
        })
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
        return [].concat.apply([], clusters.map((cluster) => {
          return cluster.labels
        }))
      },
      showClusterForLabel (label) {
        if (label.length) {
          this.filteredClusters = this.clusters.filter((cluster) => {
            return cluster.labels[0] === label
          })
        } else {
          this.filteredClusters = this.clusters
        }
      }
    }

  }
</script>

<style scoped>
  .loading-overlay {
    text-align: center;
    font-size: 1.4rem;
  }
  h1 {
    font-size: 2.2rem;
  }
  .grid-980 {
    max-width: 98rem;
  }
</style>
