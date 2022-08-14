<script setup>
import { ref } from "vue"
import { useRouter, useRoute } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()
const route = useRoute()

// 登录
const login = () => {
  window.user = username
  const redirectPath = route.query.redirect || '/protected'
  router.push(redirectPath)
}

</script>
<template>
  <div class="login-container">
    <form class="form" @submit.prevent="login">
      <h1>登录</h1>
      <label for="username">用户名</label>
      <input v-model="username" placeholder="随便填点什么" type="text" class="input" name="username" />
      <label for="password">密码</label>
      <input v-model="password" type="password" class="input" name="password" />
      <button class="btn">登录</button>
    </form>
  </div>
</template>