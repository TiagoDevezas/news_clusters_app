<template>
  <div class="item-main">
    <div class="item-main-source">{{ itemMainData.source_name }} &middot; {{ formatDate }}</div>
    <div class="popover">
      <h1>
        <a :href="itemMainData.url">
          <span v-html="itemMainData.title"></span>
        </a>
      </h1>
      <div class="popover-container">
        <div class="card">
          <div class="card-body">
            <span v-html="truncateSummary"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    props: {
      itemMainData: {
        type: Object
      }
    },

    data () {
      return {
        showSnippet: false
      }
    },

    methods: {
      displaySnippet () {
        this.showSnippet = true
      },
      hideSnippet () {
        this.showSnippet = false
      }
    },

    computed: {
      truncateSummary () {
        let maxLength = 140
        let separator = ' '
        let summaryStr = this.itemMainData.summary
        let ellipsis = ' ...'
        if (summaryStr <= maxLength) return summaryStr + ellipsis
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
    margin-bottom: .3rem;
  }
  .item-main-source {
    font-size: 1.25rem;
  }
  div {
    font-size: 1.4rem;
  }
  h1 {
    font-size: 1.6rem !important;
    font-weight: bold;
    margin: 0 0 0.1rem 0;
  }
</style>
