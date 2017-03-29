<template>
  <div class="item-related">
    <span>Mais: </span>
    <span class="item-related-wrapper" v-for="(item, index) in itemRelatedData" @mouseover="showSnippet(index)" @mouseleave="hideSnippet(index)">
      <a :href="item.url">{{ item.source_name }}</a>{{ index < (itemRelatedData.length - 1) ? ', ' : '' }}
      <span :class="[activeItemIndex === index ? 'visible': '', 'item-related-content']">
        <span class="item-related-title" v-html="item.title"></span>
        <br>
        <span class="item-related-summary" v-html="item.summary"></span>
      </span>
    </span>
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
    font-size: 1.25rem;
  }
  .item-related-wrapper {
    position: relative;
    display: inline-block;
  }
  .item-related-content {
    display: none;
    position: absolute;
    background-color: #fff;
    padding: 1rem;
    z-index: 1;
    left: 0;
    right: 0;
    border-radius: .5rem;
    box-shadow: 0 .1rem .4rem rgba(0,0,0,.3);
    width: 40rem;
  }
  .item-related-title {
    font-size: 1.45rem;
    color: #111;
    font-weight: bold;
  }
  .visible {
    display: block;
  }
</style>
