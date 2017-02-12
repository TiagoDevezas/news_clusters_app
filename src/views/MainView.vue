<template>
  <div class="clusters">
    <div class="loading-overlay" v-if="loading">A criar página...</div>
    <h1 v-if="!loading">As principais notícias de <date-picker></date-picker></h1>
    <!-- <Flatpickr :options="{}" /> -->
    <item-cluster v-for="cluster in clusters" :items="cluster.items" v-show="!loading"></item-cluster>
  </div>
</template>

<script type="text/javascript">
  import fetchClusters from '../store/api.js'

  import ItemCluster from '../components/ItemCluster'
  import DatePicker from '../components/DatePicker'

  export default {

    components: {
      ItemCluster,
      DatePicker
    },

    data () {
      return {
        clusters: [],
        loading: true
      }
    },

    mounted () {
      this.fetchData()
    },

    watch: {
      '$route.query': 'fetchData'
    },

    methods: {
      fetchData () {
        this.loading = true
        fetchClusters(this.$route.query)
        .then((response) => {
          console.log(response)
          this.loading = false
          this.clusters = response.data
        })
        .catch((error) => {
          this.loading = false
          console.log(error)
        })
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
</style>
