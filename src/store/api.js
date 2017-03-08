import axios from 'axios'

let isProduction = process.env.NODE_ENV === 'production'

const apiURL = isProduction ? 'http://irlab.fe.up.pt/p/mediaviz/api/clusters' : 'http://localhost:4567/clusters'

export default function fetchClusters (routeParams) {
  return axios.get(apiURL, {
    params: routeParams
  })
}
