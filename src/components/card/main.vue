<template>
  <div class="base-card__wrap">
    <div>
      <div class="card-header__cont">
        <div class="card-title">
          <slot name="title"></slot>
        </div>
      </div>
      <div class="card-main__cont">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    

    return {}
  }
})
</script>

<style lang="scss" scoped>
.base-card__wrap {
  background-color: #fff;
  border: 1px solid #f0f1f5;
  .card-header__cont {
    padding: 20px;
    border-bottom: 1px solid #ebecf0;
    .card-title {
      position: relative;
      padding-left: 10px;
      &::after {
        content: '';
        position: absolute;
        width: 3px;
        height: 100%;
        top: 0;
        left: 0;
        background-color: #5c91e6;
      }
    }
  }
  .card-main__cont {
    padding: 10px 20px 20px;
  }
}
</style>
