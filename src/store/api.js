import axios from 'axios'

const apiURL = 'http://irlab.fe.up.pt/p/mediaviz/api/clusters'

export default function fetchClusters (routeParams) {
  return axios.get(apiURL, {
    params: routeParams
  })
}
