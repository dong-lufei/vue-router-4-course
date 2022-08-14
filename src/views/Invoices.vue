<script setup>
import { onBeforeRouteLeave } from "vue-router"

onBeforeRouteLeave(() => {
  const answer = window.confirm("确定要离开订单页嘛")
  if (!answer) return false
})
</script>
<template>
  <div class="invoices-container">
    <h1>订单</h1>
  </div>
</template>