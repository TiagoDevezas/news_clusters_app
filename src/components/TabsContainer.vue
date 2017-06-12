<template>
  <div>  
    <ul class="tab">
      <li :class="[{ active: tabIndex === activeIndex }, 'tab-item']" v-for="(tab, tabIndex) in tabs">
          <a :href="tab.href" @click.prevent="setActive(tabIndex)" ref="tabIndex">{{ tab.tabLabel }}</a>
      </li>
    </ul>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import { eventBus } from '../main.js'
  export default {
    data () {
      return {
        activeIndex: 0,
        tabs: []
      }
    },
    mounted () {
      this.tabs = this.$children
      for (let i = 0; i < this.tabs.length; i++) {
        this.tabs[i].setIndex(i)
      }
      this.setActive(this.activeIndex)
      eventBus.$on('settingsChanged', (tabIndex) => {
        this.clickOnTab(tabIndex)
      })
      eventBus.$on('settingsCanceled', (tabIndex) => {
        this.clickOnTab(tabIndex)
      })
      eventBus.$on('showInfo', (tabIndex) => {
        this.clickOnTab(tabIndex)
      })
    },
    methods: {
      setActive (index) {
        this.activeIndex = index
        this.tabs[index].showContent()
        this.tabs.forEach(tab => {
          tab.tabIndex === this.activeIndex ? tab.showContent(true) : tab.showContent(false)
        })
      },
      clickOnTab (index) {
        let tabToClick = this.$refs.tabIndex[index]
        tabToClick.click()
      }
    }
  }
</script>
