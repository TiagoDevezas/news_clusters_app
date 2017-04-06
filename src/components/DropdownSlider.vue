<template>
  <div class="dropdown">
    <div class="slider-wrapper">
      <a href="#" @click.prevent="toggleSlider" class="btn btn-primary" tabindex="0">
        {{ label }} <i class="icon icon-caret"></i>
      </a>
      <div :class="[{visible: sliderOpen}, 'slider-content']">      
        <div class="container">
          <div class="columns">
            <div class="form-group col-3" v-for="source in sourceList">
              <label class="form-switch">
                <input type="checkbox" checked="true" />
                <i class="form-icon"></i> {{ source }}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      label: {
        type: String
      },
      sourceList: {
        type: Array
      }
    },
    data () {
      return {
        sliderOpen: false
      }
    },
    methods: {
      toggleSlider () {
        this.sliderOpen = !this.sliderOpen
      }
    }
  }
</script>

<style scoped>
  .slider-wrapper {
    position: relative;
  }
  .slider-content {
    display: none;
    position: absolute;
    width: 500px;
    max-height: 0px;
    overflow: hidden;
    background-color: #fff;
    padding: 1rem;
    transition: max-height 0.35s ease-out;
  }
  .slider-content.visible {
    position: relative;
    display: block;
    max-height: 500px;
    z-index: 100;
  }
</style>
