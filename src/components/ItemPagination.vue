<template>
  <div class="pagination-wrapper">
    <ul class="pagination">
      <li class="page-item" v-if="paginationSettings.currentPage > 1">
        <a href="#" @click.prevent="decreaseStart()">
          <
        </a>
      </li>
      <li class="page-item" :class="{ active: isActive(page) }" v-for="page in getPages">
        <a href="#" @click.prevent="multiplyStart(page)">
          {{ page }}
        </a>
      </li>
      <li class="page-item" v-if="paginationSettings.currentPage < paginationSettings.numPages">
        <a href="#" @click.prevent="incrementStart()">
          >
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import { eventBus } from '../main.js'

  export default {
    props: {
      paginationSettings: {
        type: Object
      }
    },
    data () {
      return {
        numRows: 20,
        startValue: 0
      }
    },
    computed: {
      getPages () {
        let startPage, endPage
        let pageArray = []
        let currentPage = this.paginationSettings.currentPage
        let totalPages = this.paginationSettings.numPages

        if (totalPages < 10) {
          startPage = 1
          endPage = totalPages
        } else {
          if (currentPage <= 6) {
            startPage = 1
            endPage = 10
          } else if (currentPage + 4 >= totalPages) {
            startPage = totalPages - 9
            endPage = totalPages
          } else {
            startPage = currentPage - 5
            endPage = currentPage + 4
          }
        }
        for (let i = startPage; i <= endPage; i++) {
          pageArray.push(i)
        }
        return pageArray
      }
    },
    methods: {
      decreaseStart () {
        this.startValue = this.paginationSettings.start - this.numRows
        this.paginationSettings.start = this.startValue
      },
      multiplyStart (page) {
        if (page === 1) {
          this.startValue = 0
          // this.paginationSettings.start = this.startValue
        } else {
          this.startValue = page * this.numRows - this.numRows
        }
        this.paginationSettings.start = this.startValue
      },
      incrementStart () {
        this.startValue = this.paginationSettings.start + this.numRows
        this.paginationSettings.start = this.startValue
      },
      isActive (page) {
        return page === this.paginationSettings.currentPage
      }
    },
    watch: {
      startValue: function (val, oldVal) {
        if (val !== oldVal) {
          eventBus.$emit('startValueChanged', val)
        }
      }
    }
  }
</script>

<style scoped>
  .pagination-wrapper {
    margin-bottom: 1rem;
  }
  .page-item.active a:focus {
    color: #fff !important;
  }
  .page-item a:focus {
    color: #727e96 !important;
  }
</style>
