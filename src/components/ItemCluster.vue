<template>
  <div class="cluster">
    <item-main :item-main-data="mainItem"></item-main>
    <item-related :item-related-data="relatedItems"></item-related>
    <div class="line-separator"></div>
  </div>
</template>

<script>
  import ItemMain from './ItemMain'
  import ItemRelated from './ItemRelated'

  export default {
    props: {
      items: {
        type: Array
      },
      labels: {
        type: Array
      }
    },

    components: {
      ItemMain,
      ItemRelated
    },

    computed: {
      mainItem () {
        return this.items[0]
      },
      relatedItems () {
        return this.items.slice(1, this.items.length)
      }
    }
  }
</script>

<style scoped>
  .cluster {
    margin-bottom: 1rem;
  }
  .line-separator {
    height: 1px;
    background: linear-gradient(to right, #ddd, #fff);
    margin-top: 1rem;
  }
</style>
