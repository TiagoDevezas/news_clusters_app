<template>
  <form class="input-group" @submit.prevent="getItems()">
    <input type="text" placeholder="Pesquisar" class="form-input" v-model="queryText">
    <button class="btn btn-primary input-group-btn" type="submit">
      <i class="icon icon-search"></i>
    </button>
  </form>
</template>

<script>
  import { eventBus } from '../main.js'
  export default {
    data () {
      return {
        queryText: ''
      }
    },
    methods: {
      getItems () {
        eventBus.$emit('getItemsForQuery', this.queryText)
        if (!this.queryText.length) {
          this.$router.push({ query: { day: this.$route.query.day } })
        } else {
          this.$router.push({ query: { day: this.$route.query.day, q: this.queryText } })
        }
      }
    },
    watch: {
      'queryText': (val, oldVal) => {
        if (val !== oldVal) {
          this.queryText = val
        }
      }
    }
  }
</script>

<style scoped>
  .input-group {
    margin-bottom: 1rem;
  }
</style>
