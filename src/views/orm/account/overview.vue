<template>
  <div>
    <base-card>
      <template #title>
        <span>用户信息</span>
      </template>
      <div>test</div>
    </base-card>
  </div>
</template>

<script lang="ts">
import baseCard from '@/components/card/main.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    baseCard
  }
})

</script>

<style scoped>

</style>