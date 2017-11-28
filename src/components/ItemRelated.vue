<template>
  <div class="item-related">
    <span>Mais: </span>
    <div class="popover popover-top"  v-for="(item, index) in itemRelatedData">
      <a :href="item.url" :title="item.title">{{ item.source_name }}</a>{{ index < (itemRelatedData.length - 1) ? ',&nbsp;' : '' }}
      
      <div class="popover-container">
        <div class="card">
          <div class="card-header">
            <span class="card-title" v-html="item.title"></span>
          </div>
          <div class="card-body">
            <span class="item-related-summary" v-html="item.summary"></span>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      itemRelatedData: {
        type: Array
      }
    },

    data () {
      return {
        activeItemIndex: ''
      }
    },

    methods: {
      showSnippet (index) {
        this.activeItemIndex = index
      },
      hideSnippet (index) {
        this.activeItemIndex = ''
      }
    }
  }
</script>

<style scoped>
  .item-related {
    font-size: 0.625rem;
  }
</style>
