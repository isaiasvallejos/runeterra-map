<template>
  <div>Board #{{ id }}</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Board',
  props: {
    id: String
  }
})
</script>
