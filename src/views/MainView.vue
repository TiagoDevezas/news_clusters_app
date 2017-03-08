<template>
  <div class="container-main">
    <div class="clusters">
      <div class="container grid-980">
        <div class="columns">        
          <label-list :labels="labels"></label-list>
          <div class="column col-8 col-sm-12">        
            <div class="loading-overlay" v-if="loading">A criar página...</div>
            <h1 v-if="!loading">As principais notícias de <date-picker></date-picker></h1>
            <!-- <Flatpickr :options="{}" /> -->
            <item-cluster v-for="cluster in clusters" :items="cluster.items" :labels="cluster.labels" v-show="!loading"></item-cluster>
          </div>     
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import fetchClusters from '../store/api.js'
  import { eventBus } from '../main.js'

  import ItemCluster from '../components/ItemCluster'
  import DatePicker from '../components/DatePicker'
  import LabelList from '../components/LabelList'

  export default {

    components: {
      ItemCluster,
      DatePicker,
      LabelList
    },

    data () {
      return {
        clusters: [],
        labels: [],
        loading: true
      }
    },

    mounted () {
      this.fetchData()
      eventBus.$on('labelClicked', function (label) {
        console.log(label)
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
          // console.log(response)
          this.loading = false
          this.clusters = response.data.clusters
          // this.sortByDate(this.clusters)
          // this.sortByScore(this.clusters)
          this.labels = this.filterLabels(this.clusters)
        })
        .catch((error) => {
          this.loading = false
          console.log(error)
        })
      },
      sortByScore: (clusters) => {
        clusters.sort((a, b) => {
          return b.score - a.score
        })
      },
      sortByDate: (clusters) => {
        clusters.sort((a, b) => {
          return Date.parse(b.latest_date) - Date.parse(a.latest_date)
        })
      },
      filterLabels: (clusters) => {
        return [].concat.apply([], clusters.map((cluster) => {
          return cluster.labels
        }))
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
