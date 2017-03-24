<template>
  <div class="item-main">
    <div class="item-main-source">{{ itemMainData.source_name }} &middot; {{ formatDate }}</div>
    <div class="item-main-wrapper">
      <h1>
        <a :href="itemMainData.url" @mouseover="toggleSnippet" @mouseleave="toggleSnippet">
          <span v-html="itemMainData.title"></span>
        </a>
      </h1>
      <div :class="[{visible: showSnippet}, 'item-main-summary']" v-html="truncateSummary"></div>
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
      toggleSnippet () {
        this.showSnippet = !this.showSnippet
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
  }
  .item-main-summary {
    display: none;
    position: absolute;
    background-color: #fff;
    z-index: 100;
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
