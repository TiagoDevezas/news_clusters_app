<template>
  <div class="item-main">
    <div class="item-main-source">{{ itemMainData.source_name }} - {{ formatDate }}</div>
    <h1><a :href="itemMainData.url"><span v-html="itemMainData.title"></span></a></h1>
    <div class="item-main-summary" v-html="truncateSummary"></div>
  </div>
</template>

<script>

  export default {
    props: {
      itemMainData: {
        type: Object
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
        return this.itemMainData.pub_date.slice(0, 10) + ' - ' + this.itemMainData.pub_date.slice(11, 16)
      }
    }
  }

</script>

<style scoped>
  .item-main {
    margin-bottom: 1rem;
  }
  .item-main-source {
    font-size: 1.35rem;
  }
  div {
    font-size: 1.6rem;
  }
  h1 {
    font-size: 1.9rem !important;
    margin: 0 0 0.5rem 0;
  }
</style>
