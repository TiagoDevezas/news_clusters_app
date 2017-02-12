<template>
  <div class="item-related">
    <span>Mais: </span>
    <span v-for="(item, index) in itemRelatedData">
      <a :href="item.url" :title="item.title.trim()">{{ item.source_name }}</a>{{ index < (itemRelatedData.length - 1) ? ', ' : '' }}
    </span>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: {
      itemRelatedData: {
        type: Array
      }
    }
  }
</script>

<style scoped>
  .item-related {
    font-size: 1.4rem;
  }
</style>
