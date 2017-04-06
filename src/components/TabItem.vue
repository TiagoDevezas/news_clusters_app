<template>
  <div v-show="show">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      tabLabel: {
        type: String
      },
      href: {
        type: String
      }
    },
    data () {
      return {
        show: false,
        tabIndex: null
      }
    },
    methods: {
      setIndex (index) {
        this.tabIndex = index
      },
      showContent (bool) {
        this.show = bool
      }
    }
  }
</script>

<style scope>
  .tab-content {
    display: none;
  }
  .visible {
    display: block;
  }
</style>
