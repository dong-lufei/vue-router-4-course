<template>
  <ul>
    <li>
      <RouterLink :to="{name:'protected'}">保护页</RouterLink>
    </li>
    <li>
      <RouterLink :to="{name:'invoices'}">订单页</RouterLink>
    </li>
  </ul>
</template>

<style scoped>
ul {
  padding: 10px;
  margin-right: 20px;
  background: #fff;
  list-style: none;
}
li {
  margin: 10px;
}
</style>