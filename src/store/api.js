import axios from 'axios'

let isProduction = process.env.NODE_ENV === 'production'

const clustersApiUrl = isProduction ? 'http://irlab.fe.up.pt/p/mediaviz/api/clusters' : 'http://localhost:4567/clusters'
const itemsApiUrl = isProduction ? 'http://irlab.fe.up.pt/p/mediaviz/api/items' : 'http://localhost:4567/items'
const atomApiUrl = isProduction ? 'http://irlab.fe.up.pt/p/mediaviz/api/atom' : 'http://localhost:4567/atom'

let fetchDataFromApi = {
  clusters: function (routeParams, query) {
    console.log(routeParams)
    let newParams = Object.assign(routeParams, { q: query })
    return axios.get(clustersApiUrl, {
      params: newParams
    })
  },
  items: function (routeParams, startValue, query) {
    delete routeParams.lingo // Delete lingo params
    delete routeParams.lsh // Delete lingo params
    let newParams = Object.assign(routeParams, { source_type: 'national', start: startValue, rows: 20, caller: 'news_clusters', q: query }) // This is hardcoded for now, but later will be user-defined
    return axios.get(itemsApiUrl, {
      params: newParams
    })
  },
  atom: function (routeParams, startValue, query) {
    delete routeParams.lingo
    let newParams = Object.assign(routeParams, { source_type: 'national', start: 0, rows: 100, caller: 'news_clusters', q: query }) // This is hardcoded for now, but later will be user-defined
    function makeParams (params) {
      let filteredParams = {}
      Object.keys(params).forEach((key) => {
        if (params[key] && params[key].length !== 0) {
          filteredParams[key] = params[key]
        }
      })
      return filteredParams ? '?' + Object.keys(filteredParams).map((key) => ([key, filteredParams[key]].map(encodeURIComponent).join('='))).join('&') : ''
    }
    window.location.href = atomApiUrl + makeParams(newParams)
  }
}

export default fetchDataFromApi
