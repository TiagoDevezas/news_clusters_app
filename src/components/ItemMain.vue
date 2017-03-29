<template>
  <div class="item-main">
    <div class="item-main-source">{{ itemMainData.source_name }} &middot; {{ formatDate }}</div>
    <span class="item-main-wrapper" @mouseover="displaySnippet" @mouseleave="hideSnippet">
      <h1>
        <a :href="itemMainData.url">
          <span v-html="itemMainData.title"></span>
        </a>
      </h1>
      <span :class="[{visible: showSnippet}, 'item-main-summary']" v-html="truncateSummary"></span>
    </span>
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
  .item-main-wrapper {
    position: relative;
    display: inline-block;
  }
  .item-main-wrapper:hover {
    z-index: 100;
  }
  .item-main-summary {
    display: none;
    position: absolute;
    background-color: #fff;
    padding: 1rem;
    border-radius: .2rem;
    box-shadow: 0 .1rem .4rem rgba(0,0,0,.3);
  }
  .visible {
    display: block;
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
