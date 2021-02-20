<template>
  <div class="auth-layout__wrap">
    <div class="left-preview-cont" :style="{
      backgroundImage: `url(${currentBg})`
    }">

    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import img1 from '@/assets/images/common/auth/pexels-eberhard-grossgasteiger-691668.jpg'
import img2 from '@/assets/images/common/auth/pexels-skitterphoto-53893.jpg'
import img3 from '@/assets/images/common/auth/pexels-pixabay-258112.jpg'

export default defineComponent({
  setup () {
    const bgList: Array<any> = [
      img1,
      img2,
      img3
    ]
    const currentIndex = ref(0)
    const currentBg = ref(bgList[0])
    watch(currentIndex, (v) => {
      currentBg.value = bgList[v]
      console.log(currentBg.value)
    })
    // setInterval(() => {
    //   if (currentIndex.value === bgList.length - 1) {
    //     currentIndex.value = 0
    //   } else {
    //     currentIndex.value += 1
    //   }
    //   console.log(currentIndex.value)
    // }, 10000)
    return {
      currentBg
    }
  },
  data () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.auth-layout__wrap {
  height: 100vh;
  width: 100vw;
  display: flex;
  .left-preview-cont {
    width: 75%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      height: 100%;
      width: 20%;
      right: 0;
      top: 0;
      pointer-events: none;
      background-image: linear-gradient(90deg, transparent 0%, #fff 100%);
    }
  }
}
</style>
