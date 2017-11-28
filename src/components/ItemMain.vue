<template>
  <div class="item-main">
    <div class="item-main-source">{{ itemMainData.source_name }} &middot; {{ formatDate }}</div>
    <div class="popover">
      <h6>
        <a :href="itemMainData.url" :title="itemMainData.title">
          <span v-html="itemMainData.title"></span>
        </a>
      </h6>
      <div class="popover-container" v-if="!displaySnippet">
        <div class="card">
          <div class="card-body">
            <span v-html="truncateSummary"></span>
          </div>
        </div>
      </div>
      <div class="item-main-snippet" v-if="displaySnippet">
        <span v-html="truncateSummary"></span>
        <div class="line-separator"></div>
      </div>
    </div>
  </div>
</template>

<script>
  // import { eventBus } from '../main.js'

  export default {
    props: {
      itemMainData: {
        type: Object
      },
      clusterLabel: {
        type: String
      },
      displaySnippet: {
        type: Boolean
      }
    },

    // data () {
    //   return {
    //     showSnippet: false
    //   }
    // },

    // mounted () {
    //   this.showSnippet = this.displaySnippet ? this.displaySnippet : false
    //   eventBus.$on('labelClicked', (label, wasClicked) => {
    //     if (label === this.clusterLabel && wasClicked) {
    //       console.log(label, wasClicked)
    //     }
    //   })
    // },

    // methods: {
    //   displaySnippet () {
    //     this.showSnippet = true
    //   },
    //   hideSnippet () {
    //     this.showSnippet = false
    //   }
    // },

    computed: {
      truncateSummary () {
        let maxLength = 140
        let separator = ' '
        let summaryStr = this.itemMainData.summary
        let ellipsis = ' ...'
        if (summaryStr.length <= maxLength) return summaryStr
        return summaryStr.substr(0, summaryStr.lastIndexOf(separator, maxLength)) + ellipsis
      },

      formatDate () {
        let datePart = this.itemMainData.pub_date.slice(0, 10)
        let timePart = this.itemMainData.pub_date.slice(11, 16)
        return datePart + ' - ' + timePart
      }
    }
  }

</script>

<style scoped>
  .item-main {
    margin-bottom: .15rem;
  }
  .item-main-source {
    font-size: 0.625rem;
  }
  .item-main-snippet {
    margin-bottom: 0.25rem;
  }
  div {
    font-size: 0.7rem;
  }
  h6 {
    /*font-size: 1.6rem !important;*/
    font-weight: bold;
    margin: 0 0 0.05rem 0;
  }
  .line-separator {
    height: 1px;
    background: linear-gradient(to right, #ddd, #fff);
    margin-top: 0.5rem;
  }
</style>
