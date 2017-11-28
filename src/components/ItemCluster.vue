<template>
  <div class="cluster">
    <h4 v-if="isExpanded">{{ this.currentLabel }}</h4>
    <item-main :item-main-data="mainItem" :cluster-label="clusterLabel" :display-snippet="isExpanded ? true :  false"></item-main>
    <item-related :item-related-data="relatedItems.slice(0, relatedLength)" v-if="relatedItems.length" :cluster-label="clusterLabel" v-show="!isExpanded"></item-related>
    <div class="line-separator" v-if="!isExpanded"></div>
    <span v-for="item in relatedItems" v-if="isExpanded" class="expanded-item">
      <item-main :item-main-data="item" :display-snippet="isExpanded ? true :  false"></item-main>
      <!-- <div class="line-separator"></div> -->
    </span>
  </div>
</template>

<script>
  import { eventBus } from '../main.js'
  import ItemMain from './ItemMain'
  import ItemRelated from './ItemRelated'

  export default {
    props: {
      items: {
        type: Array
      },
      clusterLabel: {
        type: String
      }
    },

    components: {
      ItemMain,
      ItemRelated
    },

    data () {
      return {
        isExpanded: false,
        relatedLength: 4,
        currentLabel: ''
      }
    },

    mounted () {
      eventBus.$on('labelClicked', (label, wasClicked) => {
        this.isExpanded = wasClicked
        this.relatedLength = wasClicked ? -1 : 4
        this.currentLabel = label
        window.scrollTo(0, 0)
      })
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
    margin-bottom: 0.5rem;
  }
  .line-separator {
    height: 1px;
    background: linear-gradient(to right, #ddd, #fff);
    margin-top: 0.5rem;
  }
  .expanded-item {
    /*margin-top: 1rem;*/
    display: block;
  }
</style>
