<template>
  <div>
    {{ atomPayload }}
  </div>
</template>

<script>
  import fetchDataFromApi from '../store/api.js'
  import getSourcesByType from '../store/sources.js'

  export default {
    data () {
      return {
        atomPayload: '',
        sources: []
      }
    },
    mounted () {
      this.getAtom()
    },

    watch: {
      '$route.query': 'getAtom'
    },

    methods: {
      getAtom () {
        let queryParams = this.$route.query
        this.sources = getSourcesByType('national')
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

        fetchDataFromApi.atom(mergedParams, 0, this.$route.query.q)
        .then((response) => {
          this.atomPayload = response.data
          this.loading = false
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
  #abs-iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
</style>
