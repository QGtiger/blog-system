<template>
  <div class="about">
    <h1>This is an about page {{ count || count }}</h1>
  </div>
</template>

<script lang="ts">
import { ref, reactive, computed, watchEffect, onMounted } from 'vue'
export default ({
  setup() {
    const root = ref(null)
    console.log(root)
    onMounted(() => {
      // DOM元素将在初始渲染后分配给ref
      console.log(root.value) // <div>这是根元素</div>
    })
  },
  mounted () {
    const count = reactive({
      test: 11111
    })
    watchEffect(() => {
      console.log(count.test)
    })
    const count1 = computed(() => count.test + 1)
    setTimeout(() => {
      count.test = 12
    }, 100)
    console.log(count1)
    console.log(count)
    
  }
})
</script>
