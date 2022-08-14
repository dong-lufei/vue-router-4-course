<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

// 暂用window存储
const username = ref(window.user)
const router = useRouter()

// 登出
const logout = () => {
  window.user = null
  router.push({ name: 'home', query: { logout: null } })


}
</script>

<template>
  <div class="protected-container">
    <h1>欢迎 {{username}}</h1>
    <button @click="logout">退出登录</button>

    <RouterLink :to="{name:'invoices'}">
      <button>去订单页</button>
    </RouterLink>
  </div>
</template>